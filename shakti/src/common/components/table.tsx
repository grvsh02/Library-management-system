import React, {useEffect} from "react";
import DataTable from "react-data-table-component";
import StatusTag from "@/src/common/components/statusTag";
import axios from "axios";
import {router} from "next/client";
import {useRouter} from "next/router";

const customStyles = {
    rows: {
        style: {
            minHeight: '62px',
        },
    },
    headCells: {
        style: {
            paddingLeft: '8px',
            paddingRight: '8px',

        },
    },
    cells: {
        style: {
            paddingLeft: '8px',
            paddingRight: '8px',
        },
    },
};

const BooksTable = ({keyword = ""}) => {

    const [books, setBooks] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [reload, setReload] = React.useState(false);

    const router = useRouter();

    const fetchBooks = async () => {
        const res = await axios.get('http://127.0.0.1:8000/api/books/get/');
        console.log(res);
        const data = await res?.data?.books;
        setBooks(data);
    }

    const handleDelete = async (id: any) => {
        const res = await axios.post('http://127.0.0.1:8000/api/books/remove/', {
            book_id: id
        });
        console.log(res.data)
        setReload(!reload)
    }

    useEffect(() => {
        fetchBooks();
    }, [keyword, reload])

    const columns = [
        {
            name: 'Title',
            selector: (row: any) => row.title,
        },
        {
            name: 'Author',
            selector: (row: any) => row.author,
        },
        {
            name: 'Price',
            selector: (row: any) => row.price,
        },
        {
            name: 'Total stock',
            selector: (row: any) => row.total_stock,
        },
        {
            name: 'current stock',
            selector: (row: any) => row.stock,
        },
        {
            name: 'Banned',
            selector: (row: any) => row.isBanned ? 'Yes' : 'No',
        },
        {
            name: 'Status',
            selector: (row: any) => <StatusTag status={row.status}/>,
        },
        {
            name: 'Actions',
            selector: (row: any) => {
                return (
                    <div className="flex items-center">
                        <i className="fa-solid fa-pen-to-square" onClick={() => router.push(`/books/edit/${row.book_id}`) }></i>
                        <i className="fa-solid fa-trash-can ml-4" onClick={() => handleDelete(row.book_id)}></i>
                    </div>
                )
            },
        }

    ]

    if (error) {
        return <p>Error :(</p>;
    }

    if (books) {
        return (
            <DataTable
                columns={columns}
                data={books}
                highlightOnHover={true}
                customStyles={customStyles}
                pagination={true}
                onRowClicked={(row) => router.push(`/book/${row.book_id}`)}
            />
        );
    }

    return <p>Loading...</p>;

}

export default BooksTable;