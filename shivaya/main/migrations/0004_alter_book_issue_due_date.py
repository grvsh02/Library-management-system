# Generated by Django 4.0.5 on 2022-11-20 08:59

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0003_alter_book_issue_due_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book_issue',
            name='due_date',
            field=models.DateTimeField(default=datetime.datetime(2022, 11, 26, 14, 29, 36, 101460), help_text='Date the book is due to'),
        ),
    ]
