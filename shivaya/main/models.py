from django.db import models
from datetime import datetime, timedelta
from user.models import Student
from book.models import Book
# Create your models here.

def get_returndate():
    return datetime.today() + timedelta(days=6)
class Book_Issue(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    issue_date = models.DateTimeField(auto_now=True, help_text="Date the book is issued")
    due_date = models.DateTimeField(default=get_returndate(),help_text="Date the book is due to")
    date_returned = models.DateField(null=True, blank=True, help_text="Date the book is returned")
    remarks_on_issue = models.CharField(max_length=100, default="Book in good condition", help_text="Book remarks/condition during issue")
    remarks_on_return = models.CharField(max_length=100, default="Book in good condition", help_text="Book remarks/condition during return")

    def __str__(self):
        return str(self.student) + " borrowed " + str(self.book)