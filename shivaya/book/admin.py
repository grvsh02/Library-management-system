from django.contrib import admin
from .models import Books, Book_Issue
# Register your models here.

@admin.register(Books)
class BooksAdmin(admin.ModelAdmin):
    list_display = ['book_name', 'author', 'book_id', 'cost', 'is_borrowed', 'summary']
    list_filter = ['book_name', 'author', 'cost', 'book_id']
    search_fields = ['book_name', 'author']

@admin.register(Book_Issue)
class Book_IssueAdmin(admin.ModelAdmin):
    list_display = ['student', 'book', 'issue_date', 'due_date', 'date_returned']
    list_filter = ['student', 'book']
    search_fields = ['student', 'book']
