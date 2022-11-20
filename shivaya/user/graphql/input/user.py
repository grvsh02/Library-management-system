from typing import Optional

import strawberry

@strawberry.input()
class UserInput:
    fullname: str
    rollno: int
    email: str