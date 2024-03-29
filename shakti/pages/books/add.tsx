import React, {useEffect, useState} from 'react';
import Card from "@/src/common/components/card";
import LabelTextInput from "@/src/common/components/labelTextInput";

import Button from "@/src/common/components/button";

import {Router, useRouter} from "next/router";
import Layout from "@/src/common/components/layout";
import axios from "axios";
import {toast} from "react-toastify";

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

    const [isOpen, setIsOpen] = React.useState(false);

    const [reload, setReload] = useState(false)

    // @ts-ignore
    const [book, setBook] = useState<any>(null)

    const handleAdd = () => {
        setIsOpen(false);
        setReload(!reload)
    }

    const handleSave = async () => {
        const res = await axios.post('http://127.0.0.1:8000/api/books/add/', {
            title: book.title,
            author: book.author,
            stock: book.stock,
            price: book.price
        });
        console.log(res.data)
        if (res.data) {
            toast.success('Book added successfully !', {
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
            toast.error('Error adding book !', {
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
            <div className="flex flex-row justify-center items-center h-full mt-10">
                <div className="w-2/3 h-full">
                    <Card className="m-5">
                        <div className="p-10">
                            <div className="text-4xl align-middle font-semibold my-6">Add Book</div>
                            <div className="align-middle h-full">
                                <LabelTextInput label="Title" type="text" className="mt-10" placeholder="" required={true} onChange={(tname) => setBook({...book, title: tname})}/>
                                <LabelTextInput label="Author" type="text" className="mt-10" placeholder="" onChange={(Aname) => setBook({...book,author: Aname})}/>
                                <div className="flex justify-around ">
                                    <LabelTextInput label="Stock" type="number" className="mt-10 mr-4" placeholder="" required={true} onChange={(stock) => setBook({...book,stock: stock})}/>
                                    <LabelTextInput label="Price" type="number" className="mt-10 ml-4" placeholder="" onChange={(price) => setBook({...book, price: price})}/>
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