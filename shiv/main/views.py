import json
from datetime import datetime, timedelta, timezone

from django.contrib.auth.models import User
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from main.models import Books, UserVisit, Library


@csrf_exempt
def add_book(request):
    req = json.loads(request.body)
    try:
        title = req['title']
        author = req['author']
        stock = req['stock']
        price = req['price']
        book = Books(author=author, title=title, stock=stock, price=price, total_stock=stock)
        book.save()
        return JsonResponse({'status': 201, 'message': 'Book added successfully'})
    except Exception as e:
        return JsonResponse({'status': 400, 'message': 'Error adding book: ' + str(e)})

@csrf_exempt
def remove_book(request):
    req = json.loads(request.body)
    try:
        book_id = req['book_id']
        book = Books.objects.get(book_id=book_id)
        book.delete()
        return JsonResponse({'status': 201, 'message': 'Book removed successfully'})
    except Exception as e:
        return JsonResponse({'status': 400, 'message': 'Error removing book: ' + str(e)})

@csrf_exempt
def update_book(request):
    req = json.loads(request.body)
    try:
        book_id = req['book_id']
        book = Books.objects.get(book_id=book_id)
        if 'title' in req:
            title = req['title']
            book.title = title
        if 'author' in req:
            author = req['author']
            book.author = author
        if 'stock' in req:
            stock = req['stock']
            book.stock = stock
        if 'price' in req:
            price = req['price']
            book.price = price
        book.save()
        return JsonResponse({'status': 201, 'message': 'Book updated successfully'})
    except Exception as e:
        return JsonResponse({'status': 400, 'message': 'Error updating book: ' + str(e)})


def get_books(request):
    try:
        books = Books.objects.all()
        books = [book.dict() for book in books]
        return JsonResponse({'status': 201, 'message': 'Books fetched successfully', 'books': books})
    except Exception as e:
        return JsonResponse({'status': 400, 'message': 'Error fetching books: ' + str(e)})


def get_book(request):
    req = request.GET
    try:
        book_id = req['book_id']
        book = Books.objects.get(book_id=book_id)
        return JsonResponse({'status': 201, 'message': 'Book fetched successfully', 'book': book.dict()})
    except Exception as e:
        return JsonResponse({'status': 400, 'message': 'Error fetching book: ' + str(e)})


def user_visit_in(request):
    req = json.loads(request.body)
    try:
        user_id = req['user_id']
        user = User.objects.get(id=user_id)
        user_visit = UserVisit(user=user)
        user_visit.save()
        return JsonResponse({'status': 201, 'message': "User's visit recorded successfully"})
    except Exception as e:
        return JsonResponse({'status': 400, 'message': "Error recording user's visit: " + str(e)})


def user_visit_out(request):
    req = json.loads(request.body)
    try:
        user_id = req['user_id']
        user = User.objects.get(id=user_id)
        user_visit = UserVisit.objects.filter(user=user, time_out=None).first()
        user_visit.time_out = datetime.now(timezone.utc)
        user_visit.save()
        return JsonResponse({'status': 201, 'message': "User's visit recorded successfully"})
    except Exception as e:
        return JsonResponse({'status': 400, 'message': "Error recording user's visit: " + str(e)})


@csrf_exempt
def issue_book(request):
    req = json.loads(request.body)
    try:
        username = req['username']
        book_id = req['book_id']
        user = User.objects.get(username=username)
        book = Books.objects.get(book_id=book_id)
        if book.stock > 0:
            book.stock -= 1
            book.save()
            library = Library(user=user, book=book)
            if "return_date" in req:
                return_date = req['return_date']
                library.return_date = return_date
            else:
                library.return_date = datetime.now(timezone.utc) + timedelta(days=7)
            library.save()
            return JsonResponse({'status': 201, 'message': 'Book issued successfully'})
        else:
            return JsonResponse({'status': 400, 'message': 'Book not in stock'})
    except Exception as e:
        return JsonResponse({'status': 400, 'message': 'Error issuing book: ' + str(e)})

@csrf_exempt
def return_book(request):
    req = json.loads(request.body)
    try:
        user_id = req['username']
        book_id = req['book_id']
        user = User.objects.get(username=user_id)
        book = Books.objects.get(book_id=book_id)
        library = Library.objects.filter(user=user, book=book, returned_on=None).first()
        library.returned_on = datetime.now(timezone.utc)
        library.is_returned = True
        if library.returned_on > library.return_date:
            library.fine = (library.returned_on - library.return_date).days * 10
        library.save()
        book.stock += 1
        book.save()
        if library.fine:
            return JsonResponse({'status': 201, 'message': 'Book returned successfully', 'fine': library.fine})
        else:
            return JsonResponse({'status': 201, 'message': 'Book returned successfully'})
    except Exception as e:
        return JsonResponse({'status': 400, 'message': 'Error returning book: ' + str(e)})


def get_user_history(request):
    req = request.GET
    try:
        user_id = req['user_id']
        user = User.objects.get(id=user_id)
        library = Library.objects.filter(user=user)
        library = [lib.dict() for lib in library]
        userVisits = UserVisit.objects.filter(user=user)
        userVisits = [userVisit.dict() for userVisit in userVisits]
        return JsonResponse({'status': 201, 'message': 'User history fetched successfully', 'book_history': library, 'user_visit_history': userVisits})
    except Exception as e:
        return JsonResponse({'status': 400, 'message': 'Error fetching user history: ' + str(e)})


def get_book_history(request):
    req = request.GET
    try:
        book_id = req['book_id']
        book = Books.objects.get(book_id=book_id)
        library = Library.objects.filter(book=book)
        library = [lib.dict() for lib in library]
        return JsonResponse({'status': 201, 'message': 'Book history fetched successfully', 'history': library})
    except Exception as e:
        return JsonResponse({'status': 400, 'message': 'Error fetching book history: ' + str(e)})


def get_users(request):
    try:
        users = User.objects.all()
        data = []
        for user in users:
            visits = UserVisit.objects.filter(user=user).first()
            lib = Library.objects.filter(user=user)
            total_fine = 0
            for l in lib:
                if l.fine:
                    total_fine += l.fine
            user_data = {
                "first_name": user.first_name,
                "last_name": user.last_name,
                "username": user.username,
                "last_visit": visits.time_in if visits else None,
                "banned": False,
                "fine": total_fine
            }
            data.append(user_data)
        return JsonResponse({'status': 201, 'message': 'Users fetched successfully', 'users': data})
    except Exception as e:
        return JsonResponse({'status': 400, 'message': 'Error fetching users: ' + str(e)})


def get_transaction_history(request):
    try:
        library = Library.objects.all()
        library = [lib.dict() for lib in library]
        return JsonResponse({'status': 201, 'message': 'Transaction history fetched successfully', 'history': library})
    except Exception as e:
        return JsonResponse({'status': 400, 'message': 'Error fetching transaction history: ' + str(e)})


def get_books_to_be_returned(request):
    try:
        library = Library.objects.filter(returned_on=None)
        library = [lib.dict() for lib in library]
        return JsonResponse({'status': 201, 'message': 'Books to be returned fetched successfully', 'books': library})
    except Exception as e:
        return JsonResponse({'status': 400, 'message': 'Error fetching books to be returned: ' + str(e)})