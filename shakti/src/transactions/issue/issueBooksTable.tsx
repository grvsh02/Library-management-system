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

const IssueBooksTable = ({setBook} : any) => {

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
    }, [reload])

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
            name: 'Status',
            selector: (row: any) => <StatusTag status={row.status}/>,
        },
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
                onRowClicked={(row) => setBook(row)}
            />
        );
    }

    return <p>Loading...</p>;

}

export default IssueBooksTable;