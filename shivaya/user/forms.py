from django import forms
from user.models import Student


class StudentsForm(forms.ModelForm):
    class Meta:
        model = Student
        fields = '__all__'