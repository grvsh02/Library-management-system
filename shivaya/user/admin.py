from django.contrib import admin
from .models import Student

# Register your models here.

@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    list_display = ['fullname', 'rollno', 'email']
    list_filter = ['rollno', 'fullname']
    search_fields = ['fullname', 'rollno']