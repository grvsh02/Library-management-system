# Generated by Django 4.1.3 on 2022-11-18 08:00

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('book', '0003_books_is_available_alter_books_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='books',
            name='summary',
            field=models.TextField(blank=True, help_text='Summary of the book', max_length=1000, null=True),
        ),
        migrations.AlterField(
            model_name='books',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.CreateModel(
            name='BookInstance',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, help_text='Unique ID', primary_key=True, serialize=False)),
                ('book_number', models.PositiveIntegerField(null=True)),
                ('is_borrowed', models.BooleanField(default=False)),
                ('book', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='book.books')),
            ],
        ),
    ]
