import random


class book:
    def __init__(self, name, author, code, price):
        self.name = name
        self.author = author
        self.code = code
        self.price = price

    def display(self):
        print(f"Name: {self.name} \nAuthor: {self.author} \nCode: {self.code} \nPrice: {self.price}")


class student:
    def __init__(self, name, rollno, branch):
        self.name = name
        self.rollno = rollno
        self.branch = branch

    def display(self):
        print(f"Name: {self.name} \nRoll No: {self.rollno} \nBranch: {self.branch}")


class library(book, student):

    def __init__(self, datein, dateout, name, author, code, price, roll, branch):
        book.__init__(self, name, author, code, price)
        student.__init__(self, name, roll, branch)
        self.datein = datein
        self.dateout = dateout

    def display(self):
        book.display(self)
        student.display(self)
        print(f"Date In: {self.datein} \nDate Out: {self.dateout}")

