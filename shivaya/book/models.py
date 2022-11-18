from django.db import models
from datetime import datetime, timedelta
import uuid

# Create your models here.

class Books(models.Model):
    book_name = models.CharField(max_length=100)
    book_id = models.IntegerField()
    author = models.CharField(max_length=100)
    is_available = models.BooleanField(default=True)
    summary = models.TextField(max_length=1000, help_text='Summary of the book', null=True, blank=True)
    def __str__(self):
        return self.book_name

class BookInstance(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, help_text='Unique ID')
    book = models.ForeignKey('Books', on_delete=models.CASCADE, null=True)
    book_number = models.PositiveIntegerField(null=True)
    is_borrowed = models.BooleanField(default=False)
    def __str__(self):
        return f"{self.id} ({self.book})"