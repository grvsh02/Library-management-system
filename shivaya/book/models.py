from django.db import models
from datetime import datetime, timedelta
from user.models import Student

class Book(models.Model):
    id = models.AutoField(primary_key=True, help_text='Unique ID')
    book_name = models.CharField(max_length=100, verbose_name='Book Name', null=False, blank=False)
    book_id = models.IntegerField(unique=True, help_text='Unique ID', verbose_name='Book ID', null=False, blank=False)
    author = models.CharField(max_length=100, verbose_name='Author', null=False, blank=False)
    is_borrowed = models.BooleanField(default=False, help_text='Is the book borrowed?', null=False, blank=False)
    summary = models.TextField(max_length=1000, help_text='Summary of the book', null=True, blank=True)
    cost = models.PositiveIntegerField(default=100, help_text='Cost of the book', null=False, blank=False)
    in_stock = models.PositiveIntegerField(default=1, help_text='Number of books in stock', null=False, blank=False)
    def __str__(self):
        return self.book_name
