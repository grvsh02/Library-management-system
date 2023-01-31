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

const BookHistoryTable = ({id = ""}: any) => {

    const [books, setBooks] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [reload, setReload] = React.useState(false);

    const router = useRouter();
    const {query: queryList} = router;

    const fetchBookHistory = async () => {
        const res = await axios.get(`http://127.0.0.1:8000/api/book/history/`,{params: {book_id: id}});
        console.log(res);
        const data = await res?.data?.history;
        setBooks(data);
    }


    useEffect(() => {
        fetchBookHistory();
    }, [id, reload])

    const columns = [
        {
            name: 'User',
            selector: (row: any) => row.user,
        },
        {
            name: 'Issue Date',
            selector: (row: any) => row.issued_on,
        },
        {
            name: 'Return Date',
            selector: (row: any) => row.return_date,
        },
        {
            name: 'Returned On',
            selector: (row: any) => row.returned_on,
        },
        {
            name: 'Fine',
            selector: (row: any) => row.fine,
        },
        {
            name: 'Status',
            selector: (row: any) => <StatusTag status={"Not Available"}/>,
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
                // onRowClicked={(row) => router.push(`/book/${row.book_id}`)}
            />
        );
    }

    return <p>Loading...</p>;

}

export default BookHistoryTable;