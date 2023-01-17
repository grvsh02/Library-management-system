from django.contrib import admin
from .models import Book, BookInstance, Book_Issue, Students
# Register your models here.

@admin.register(Book)
class BooksAdmin(admin.ModelAdmin):
    list_display = ('book_title', 'book_author', 'book_pages', 'summary')
    list_filter = ('book_title', 'book_author', 'book_pages', 'summary')
    search_fields = ('book_title', 'book_author', 'book_pages', 'summary')
    ordering = ('book_title', 'book_author', 'book_pages', 'summary')

@admin.register(BookInstance)
class BookInstanceAdmin(admin.ModelAdmin):
    list_display = ('book', 'book_number', 'Is_borrowed')
    list_filter = ('book', 'book_number', 'Is_borrowed')
    search_fields = ('book', 'book_number', 'Is_borrowed')
    ordering = ('book', 'book_number', 'Is_borrowed')

@admin.register(Book_Issue)
class Book_IssueAdmin(admin.ModelAdmin):
    list_display = ('book_instance', 'student', 'issue_date', 'due_date', 'remarks_on_return', 'date_returned')
    list_filter = ('book_instance', 'student', 'issue_date', 'due_date', 'remarks_on_return', 'date_returned')
    search_fields = ('book_instance', 'student', 'issue_date', 'due_date', 'remarks_on_return', 'date_returned')
    ordering = ('book_instance', 'student', 'issue_date', 'due_date', 'remarks_on_return', 'date_returned')

@admin.register(Students)
class StudentsAdmin(admin.ModelAdmin):
    list_display = ('roll_number', 'fullname', 'address', 'program', 'Guardian_name', 'Email')
    list_filter = ('roll_number', 'fullname', 'address', 'program', 'Guardian_name', 'Email')
    search_fields = ('roll_number', 'fullname', 'address', 'program', 'Guardian_name', 'Email')
    ordering = ('roll_number', 'fullname', 'address', 'program', 'Guardian_name', 'Email')
    