# Generated by Django 4.1.5 on 2023-01-16 20:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('book', '0011_alter_bookissue_return_date'),
    ]

    operations = [
        migrations.DeleteModel(
            name='AddBook',
        ),
        migrations.RemoveField(
            model_name='returnbook',
            name='book',
        ),
        migrations.RemoveField(
            model_name='returnbook',
            name='student',
        ),
        migrations.RenameField(
            model_name='book',
            old_name='isbn',
            new_name='book_id',
        ),
        migrations.DeleteModel(
            name='BookIssue',
        ),
        migrations.DeleteModel(
            name='ReturnBook',
        ),
    ]
