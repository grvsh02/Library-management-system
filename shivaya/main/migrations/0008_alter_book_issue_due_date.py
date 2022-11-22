# Generated by Django 4.0.5 on 2022-11-21 17:12

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0007_alter_book_issue_due_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book_issue',
            name='due_date',
            field=models.DateTimeField(default=datetime.datetime(2022, 11, 27, 22, 42, 13, 827169), help_text='Date the book is due to'),
        ),
    ]