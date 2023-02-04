import React, {useEffect, useState} from 'react';
import Avatar from "@/src/common/components/avatar";
import Card from "@/src/common/components/card";
import axios from "axios";
import {useRouter} from "next/router";
import Layout from "@/src/common/components/layout";
import BookHistoryTable from "@/src/books/booksHistoryTable";
import {toast} from "react-toastify";

const BookDetails = () => {

    const router = useRouter()

    const {query: queryList } = router

    // @ts-ignore
    const [book, setBook] = useState<any>(null)

    const fetchBook = async () => {
        console.log(queryList)
        const res = await axios.get("http://127.0.0.1:8000/api/book/get/",{
            params: {
                book_id: queryList.id
            }
        })
        console.log(res)
        setBook(res?.data?.book)
    }

    useEffect(() => {
        console.log(queryList)
        if (queryList.id) {
            fetchBook()
        }
    }, [queryList])

    const handleDelete = async (id: any) => {
        const res = await axios.post('http://127.0.0.1:8000/api/books/remove/', {
            book_id: id
        });
        console.log(res.data)
        if (res?.data?.success) {
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
            router.push('/books')
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

    return (
        <Layout>
            <div className="flex flex-row justify-center h-full">
                <div className="w-11/12 h-full flex flex-col">
                    <Card className="mx-5 my-3 mt-16 w-full">
                        <div className="p-10">
                            <div className="flex flex-row justify-between">
                                <div className="flex flex-row">
                                    <div className="mr-5">
                                        <Avatar size='base' />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="text-2xl font-semibold">{book?.title}</div>
                                        <div className="text-lg">~ {book?.author}</div>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-lg font-semibold">Price</div>
                                    <div className="text-lg">{book?.price}</div>
                                </div>
                            </div>
                            <div className="flex flex-row justify-between mt-10">
                                <div className="flex flex-col">
                                    <div className="text-lg font-semibold">Total Stock</div>
                                    <div className="text-lg">{book?.total_stock}</div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-lg font-semibold">Current Stock</div>
                                    <div className="text-lg">{book?.stock}</div>
                                </div>
                            </div>
                        </div>
                    </Card>
                    <Card className="mx-5 my-3 w-full">
                        <div className="p-7">
                            <div className="flex flex-row justify-between">
                                <div className="text-2xl font-semibold">Actions</div>
                                <div className="flex flex-row">
                                    <div className="mr-5">
                                        <i className="fa-solid fa-trash-can" onClick={() => handleDelete(queryList.id)}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                    <div className="mx-5 w-full">
                        <Card className="mt-3 p-5">
                            <div>
                                <BookHistoryTable id={queryList.id} />
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default BookDetails;
