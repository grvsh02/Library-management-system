from django.contrib.auth.models import AbstractUser, User
from django.db import models


class Books(models.Model):
    title = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    stock = models.IntegerField(default=0)
    price = models.IntegerField(default=0)

    def __str__(self):
        return self.title


class UserRole(models.Model):
    roleChoices = (
        ('admin', 'admin'),
        ('user', 'user'),
    )
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    role = models.CharField(max_length=10, choices=roleChoices, default='user')


class Library(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    book = models.ForeignKey(Books, on_delete=models.CASCADE)
    issued_on = models.DateTimeField(auto_now_add=True)
    returned_on = models.DateTimeField(null=True, blank=True)
    is_returned = models.BooleanField(default=False)
    fine = models.IntegerField(default=0)
    return_date = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return self.user.username + ' ' + self.book.title


class UserVisit(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    visit_date = models.DateTimeField(auto_now_add=True)
    time_in = models.TimeField(auto_now_add=True)
    time_out = models.TimeField(null=True, blank=True)

    def __str__(self):
        return self.user.username + ' ' + str(self.visit_date)


