from typing import List

import strawberry

@strawberry.type
class UserType:
    id: strawberry.ID
    fullname: str
    rollno: int
    email: str
    mobileno: str