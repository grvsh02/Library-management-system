import React from 'react';
import Card from "@/src/common/components/card";
import IssueBooksTable from "@/src/transactions/issue/issueBooksTable";
import ProfileCard from "@/src/common/components/profileCard";
import Calendar from "react-calendar";
import Button from "@/src/common/components/button";
import Layout from "@/src/common/components/layout";
import axios from "axios";
import {useRouter} from "next/router";
import ReturnBooksTable from "@/src/transactions/return/returnBookTable";
import {toast} from "react-toastify";

const ReturnBook = () => {

    const [book, setBook] = React.useState<any>(null)
    const [user, setUser] = React.useState<any>(null)
    const [returnDate, setReturnDate] = React.useState<any>(null)

    const router = useRouter();

    const handleReturn = async () => {
        const res = await axios.post(`http://127.0.0.1:8000/api/book/return/`, {
            book_id: book.book_id,
            username: user,
        });
        console.log(res.data)
        if (res.data) {
            toast.success('Book returned successfully !', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            router.push('/')
        }
        else{
            toast.error('Error returning book !', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    var today: any = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    return (
        <Layout>
            <div className="flex flex-col items-center m-10 h-full">
                <div className="w-11/12 flex h-1/2 flex-row justify-center">
                    <Card className="w-full m-2 h-full flex flex-col">
                        <div className="p-10">
                            <ReturnBooksTable setBook={setBook} setUser={setUser}/>
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
                        </div>
                        <Button className="m-10" onClick={handleReturn}>Return Book</Button>
                    </Card>
                </div>
            </div>
        </Layout>
    );
}

export default ReturnBook;