from typing import List, Optional

import strawberry

from user.graphql.types.user import UserType
from user.models import Student

@strawberry.type
class UserQuery:
    @strawberry.field
    def users(self, info) -> List[UserType]:
        return UserType.objects.all()

    @strawberry.field
    def user(self, id: int) -> Optional[UserType]:
        try:
            return Student.objects.get(id=id)
        except Student.DoesNotExist:
            return None