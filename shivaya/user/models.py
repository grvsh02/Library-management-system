from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.
class Student(models.Model):
    fullname = models.CharField(max_length=100)
    rollno = models.IntegerField()
    email = models.EmailField(unique=True, verbose_name='Email Address')
    mobileno = PhoneNumberField(null=True, blank=True)
    def __str__(self):
        return self.fullname