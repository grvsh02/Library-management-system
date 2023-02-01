import React, {useEffect} from 'react';
import Layout from "@/src/common/components/layout";
import Card from "@/src/common/components/card";
import IssueBooksTable from "@/src/transactions/issue/issueBooksTable";
import IssueUsersTable from "@/src/transactions/issue/issueUsersTable";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import ProfileCard from "@/src/common/components/profileCard";
import Button from "@/src/common/components/button";
import axios from "axios";
import {useRouter} from "next/router";

const IssueBook = () => {

    const [book, setBook] = React.useState<any>(null)
    const [user, setUser] = React.useState<any>(null)
    const [issueDate, setIssueDate] = React.useState<any>(null)
    const [returnDate, setReturnDate] = React.useState<any>(null)
    const [issueOpen, setIssueOpen] = React.useState(false)
    const [returnOpen, setReturnOpen] = React.useState(false)

    const router = useRouter();

    const handleIssue = async () => {
        const res = await axios.post(`http://127.0.0.1:8000/api/book/issue/`, {
            book_id: book.book_id,
            username: user.username,
        });
        console.log(res.data)
        router.push('/books')
    }

    var today: any = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    useEffect(() => {
        console.log(book)
        console.log(user)
        console.log(issueOpen)
        console.log(returnOpen)
        console.log(typeof(issueDate))
        console.log(returnDate)
    }, [book, user, issueOpen, returnOpen, returnDate, issueDate])

    return (
        <Layout>
            <div className="flex flex-col items-center m-10 h-full">
                <div className="w-11/12 flex h-1/2 flex-row justify-center">
                    <Card className="w-full m-2 h-full flex flex-col">
                        <div className="p-10">
                            <IssueBooksTable setBook={setBook}/>
                        </div>
                    </Card>
                    <Card className="w-full m-2 h-full flex flex-col">
                        <div className="p-10">
                            <IssueUsersTable setUser={setUser}/>
                        </div>
                    </Card>
                </div>
                <div className="w-11/12 flex flex-row mt-8 justify-center">
                    <Card className="w-full m-2 h-full flex flex-col">
                        <div className="flex w-full">
                            <div className="w-1/2 m-10">
                                Books :
                                {book && (
                                    <div>
                                        <ProfileCard title={book?.title} subTitle={book?.author} optionalText={book?.book_id} onRemove={() => setBook(null)}/>
                                    </div>
                                )}
                            </div>
                            <div className="w-1/2 m-10">
                                Student :
                                {user && (
                                    <div>
                                        <ProfileCard title={user.first_name + " " + user.last_name} subTitle={user.username} onRemove={() => setUser(null)}/>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="flex w-full">
                            <div className="w-1/2 m-10">
                                <div>
                                    Date of Issue : {JSON.stringify(today)}
                                </div>
                            </div>
                            <div className="w-1/2 m-10">
                                <div>
                                    Date of Return : {JSON.stringify(returnDate)}
                                </div>
                                <div>
                                    <Calendar onChange={setReturnDate} value={returnDate} />
                                </div>
                            </div>
                        </div>
                        <Button className="m-10" onClick={handleIssue}>Issue Book</Button>
                    </Card>
                </div>
            </div>
        </Layout>
    )
}

export default IssueBook