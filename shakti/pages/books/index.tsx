import React, {useEffect} from 'react';
import Card from "@/src/common/components/card";
import Searchbar from "@/src/common/components/searchbar";

import UserTable from "@/src/common/components/table";
import Layout from "@/src/common/components/layout";
import Button from "@/src/common/components/button";
import {router} from "next/client";
import {useRouter} from "next/router";
import BooksTable from "@/src/common/components/table";

const ViewPage = () => {

    const [isOpen, setIsOpen] = React.useState(false);
    const [keyword, setKeyword] = React.useState('');

    const router = useRouter();

    useEffect(() => {}, [keyword])


    return (
        <Layout>
            <div className="w-full">
                <div className="m-10">
                    <div className="text-4xl font-semibold">All Books</div>
                    <Card className="w-full flex justify-between mt-10 p-4">
                        <Button onClick={() => {router.push("/books/add")}}>Add Books</Button>
                        <Searchbar onSearch={setKeyword}/> {/* add onSearch parameter and add a function to call api for searching*/}
                        <Button>Export as XLSX</Button>
                    </Card>
                    <div>
                        <Card className="mt-10 p-5">
                            <div>
                                <BooksTable />
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default ViewPage;