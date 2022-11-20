from django.contrib import admin
from .models import Book_Issue
# Register your models here.

@admin.register(Book_Issue)
class Book_IssueAdmin(admin.ModelAdmin):
    list_display = ['student', 'book', 'issue_date', 'due_date', 'date_returned']
    list_filter = ['student', 'book']
    search_fields = ['student', 'book']