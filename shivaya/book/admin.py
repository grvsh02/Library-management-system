from django.contrib import admin
from .models import Book
# Register your models here.

@admin.register(Book)
class BooksAdmin(admin.ModelAdmin):
    list_display = ['book_name', 'author', 'book_id', 'cost', 'is_borrowed', 'summary']
    list_filter = ['book_name', 'author', 'cost', 'book_id']
    search_fields = ['book_name', 'author']
