from django.db import models
from datetime import datetime, timedelta
from ..user.models import Student

class Books(models.Model):
    id = models.AutoField(primary_key=True, help_text='Unique ID')
    book_name = models.CharField(max_length=100)
    book_id = models.IntegerField()
    author = models.CharField(max_length=100)
    is_borrowed = models.BooleanField(default=False)
    summary = models.TextField(max_length=1000, help_text='Summary of the book', null=True, blank=True)
    cost = models.IntegerField()
    def __str__(self):
        return self.book_name

def get_returndate():
    return datetime.today() + timedelta(days=6)

class Book_Issue(models.Model):
    student = models.ForeignKey(Student.fullname, on_delete=models.CASCADE)
    book = models.ForeignKey(Books.book_name, on_delete=models.CASCADE)
    issue_date = models.DateTimeField(auto_now=True, help_text="Date the book is issued")
    due_date = models.DateTimeField(default=get_returndate(),help_text="Date the book is due to")
    date_returned = models.DateField(null=True, blank=True, help_text="Date the book is returned")
    remarks_on_issue = models.CharField(max_length=100, default="Book in good condition", help_text="Book remarks/condition during issue")
    remarks_on_return = models.CharField(max_length=100, default="Book in good condition", help_text="Book remarks/condition during return")

    def __str__(self):
        return str(self.student) + " borrowed " + str(self.book)
