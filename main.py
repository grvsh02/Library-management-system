import random


class book:
    def __init__(self, name, author, code, price):
        self.name = name
        self.author = author
        self.code = code
        self.price = price


class student:
    def __init__(self, name, rollno, branch):
        self.name = name
        self.rollno = rollno
        self.branch = branch


class library(book, student):
    def __init__(self, datein, dateout, name, author, code, price, roll, branch):
        book.__init__(self, name, author, code, price)
        student.__init__(self, name, roll, branch)
        self.datein = datein
        self.dateout = dateout
