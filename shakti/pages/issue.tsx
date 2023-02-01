import React, {useEffect} from 'react';
import Layout from "@/src/common/components/layout";
import Card from "@/src/common/components/card";
import BooksTable from "@/src/common/components/table";
import UserTable from "@/src/students/usersTable";
import IssueBooksTable from "@/src/transactions/issue/issueBooksTable";
import IssueUsersTable from "@/src/transactions/issue/issueUsersTable";

const IssueBook = () => {

    const [book, setBook] = React.useState<any>(null)
    const [user, setUser] = React.useState<any>(null)

    useEffect(() => {
        console.log(book)
        console.log(user)
    }, [book, user])

    return (
        <Layout>
            <div className="flex flex-row justify-center m-10 h-full">
                <Card className="w-11/12 h-full flex flex-col">
                    <div className="p-10">
                        <IssueBooksTable setBook={setBook}/>
                    </div>
                </Card>
                <Card className="w-11/12 h-full flex flex-col">
                    <div className="p-10">
                        <IssueUsersTable setUser={setUser}/>
                    </div>
                </Card>
            </div>
        </Layout>
    )
}

export default IssueBook