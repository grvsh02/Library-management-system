import React, {useEffect, useState} from 'react';
import Card from "@/src/common/components/card";
import LabelTextInput from "@/src/common/components/labelTextInput";

import Button from "@/src/common/components/button";

import {Router, useRouter} from "next/router";
import Layout from "@/src/common/components/layout";
import axios from "axios";

export type UserProps = {
    firstName: string,
    lastName: string,
    email: string,
    phone?: string,
    status: string,
    role: string,
}

const AddPage = () => {

    const router = useRouter()

    const {query: queryList } = router

    const [isOpen, setIsOpen] = React.useState(false);

    const [reload, setReload] = useState(false)

    // @ts-ignore
    const [book, setBook] = useState<any>(null)

    const fetchBook = async () => {
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
        fetchBook()
    }, [queryList])

    const handleSave = async () => {
        const res = await axios.post('http://127.0.0.1:8000/api/books/update/', {
            book_id: queryList.id,
            title: book.title,
            author: book.author,
            stock: book.stock,
            price: book.price
        });
        console.log(res.data)
        router.push('/books')
    }

    return (
        <Layout>
            <div className="flex flex-row justify-center items-center h-full mt-10">
                <div className="w-2/3 h-full">
                    <Card className="m-5">
                        <div className="p-10">
                            <div className="text-4xl align-middle font-semibold my-6">Update Book</div>
                            <div className="align-middle h-full">
                                <LabelTextInput label="Title" type="text" className="mt-10" placeholder="" value={book?.title} required={true} onChange={(tname) => setBook({...book, title: tname})}/>
                                <LabelTextInput label="Author" type="text" className="mt-10" placeholder="" value={book?.author} onChange={(Aname) => setBook({...book,author: Aname})}/>
                                <div className="flex justify-around ">
                                    <LabelTextInput label="Stock" type="number" className="mt-10 mr-4" placeholder="" value={book?.stock} required={true} onChange={(stock) => setBook({...book,stock: stock})}/>
                                    <LabelTextInput label="Price" type="number" className="mt-10 ml-4" placeholder="" value={book?.price} onChange={(price) => setBook({...book, price: price})}/>
                                </div>
                            </div>
                            <div className="flex mt-7 justify-end">
                                <Button className='m-2' onClick={handleSave}>
                                    Save
                                </Button>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </Layout>
    );
}

export default AddPage;