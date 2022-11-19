# Generated by Django 4.1.3 on 2022-11-18 07:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('book', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Books',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('book_name', models.CharField(max_length=100)),
                ('book_id', models.IntegerField()),
                ('author', models.CharField(max_length=100)),
            ],
        ),
        migrations.DeleteModel(
            name='Destination',
        ),
    ]
