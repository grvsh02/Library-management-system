import React, {useEffect} from "react";
import DataTable from "react-data-table-component";
import StatusTag from "@/src/common/components/statusTag";
import axios from "axios";

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

    const fetchBooks = async () => {
        const res = await axios.get('http://127.0.0.1:8000/api/books/get/');
        console.log(res);
        const data = await res?.data?.books;
        setBooks(data);
    }

    useEffect(() => {
        fetchBooks();
    }, [keyword, reload])

    const columns = [
        {
            name: 'Name',
            selector: (row: any) => row.firstName + ' ' + row.lastName,
        },
        {
            name: 'Email',
            selector: (row: any) => row.email,
        },
        {
            name: 'Phone No.',
            selector: (row: any) => row.phone,
        },
        {
            name: 'Role',
            selector: (row: any) => row.role,
        },
        {
            name: 'Registration Date',
            selector: (row: any) => row.createdAt,
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
                        <i className="fa-solid fa-pen-to-square"></i>
                        <i className="fa-solid fa-trash-can ml-4"></i>
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
                // onRowClicked={(row) => {navigate('/user/' + row.id)}}
            />
        );
    }

    return <p>Loading...</p>;

}

export default BooksTable;