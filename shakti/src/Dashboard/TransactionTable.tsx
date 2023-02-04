import React, {useEffect} from "react";
import DataTable from "react-data-table-component";
import StatusTag from "@/src/common/components/statusTag";
import axios from "axios";
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

    const fetchHistories = async () => {
        const res = await axios.get('http://127.0.0.1:8000/api/histories/get/');
        console.log(res);
        const data = await res?.data?.history;
        setBooks(data);
    }

    useEffect(() => {
        fetchHistories();
    }, [reload])

    const columns = [
        {
            name: 'Transaction ID',
            selector: (row: any) => row.transaction_id,
        },
        {
            name: 'Book',
            selector: (row: any) => row.book,
        },
        {
            name: 'User',
            selector: (row: any) => row.user,
        },
        {
            name: 'issued on',
            selector: (row: any) => row.issued_on,
        },
        {
            name: 'return date',
            selector: (row: any) => row.return_date,
        },
        {
            name: 'returned on',
            selector: (row: any) => row.returned_on,
        },
        {
            name: 'fine',
            selector: (row: any) => row.fine,
        },
        {
            name: 'Status',
            selector: (row: any) => <StatusTag status={row.is_returned ? "Available": "Not Available"}/>,
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