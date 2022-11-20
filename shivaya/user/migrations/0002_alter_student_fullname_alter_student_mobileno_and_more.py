# Generated by Django 4.0.5 on 2022-11-20 05:08

from django.db import migrations, models
import phonenumber_field.modelfields


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='fullname',
            field=models.CharField(max_length=30, verbose_name='Full Name'),
        ),
        migrations.AlterField(
            model_name='student',
            name='mobileno',
            field=phonenumber_field.modelfields.PhoneNumberField(blank=True, max_length=128, null=True, region=None, verbose_name='Mobile Number'),
        ),
        migrations.AlterField(
            model_name='student',
            name='rollno',
            field=models.CharField(max_length=10, verbose_name='Roll No'),
        ),
    ]
