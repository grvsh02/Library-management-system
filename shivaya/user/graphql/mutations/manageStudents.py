import strawberry
from graphql import GraphQLError

@strawberry.type
class ManageStudents:
    @strawberry.mutation
    def createStudent(self, info, fullname: str, rollno: int, email: str, mobileno: str) -> str:
        return "Student created successfully"

    @strawberry.mutation
    def updateStudent(self, info, id: int, fullname: str, rollno: int, email: str, mobileno: str) -> str:
        return "Student updated successfully"

    @strawberry.mutation
    def deleteStudent(self, info, id: int) -> str:
        return "Student deleted successfully"
