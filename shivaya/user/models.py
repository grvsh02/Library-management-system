from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.
class Student(models.Model):
    fullname = models.CharField(max_length=30, verbose_name='Full Name')
    rollno = models.CharField(max_length=30, verbose_name='Roll No', unique=True)
    email = models.EmailField(unique=True, verbose_name='Email Address')
    mobileno = PhoneNumberField(null=True, blank=True, verbose_name='Mobile Number', unique=True)
    def __str__(self):
        return self.fullname