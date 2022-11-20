# Generated by Django 4.0.5 on 2022-11-20 03:54

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('book', '0005_book_issue_remove_books_is_available_books_cost_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book_issue',
            name='due_date',
            field=models.DateTimeField(default=datetime.datetime(2022, 11, 26, 9, 24, 53, 580864), help_text='Date the book is due to'),
        ),
        migrations.AlterField(
            model_name='books',
            name='cost',
            field=models.IntegerField(),
        ),
    ]