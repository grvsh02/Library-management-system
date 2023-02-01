import React, {useEffect} from "react";
import DataTable from "react-data-table-component";
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


const UserTable = ({setUser}: any) => {

    const [users, setUsers] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [reload, setReload] = React.useState(false);

    const fetchUsers = async () => {
        const res = await axios.get(`http://127.0.0.1:8000/api/users/get/`);
        console.log(res);
        const data = await res?.data?.users;
        setUsers(data);
    }

    useEffect(() => {
        fetchUsers();
    }, [reload]);

    const columns = [
        {
            name: 'Name',
            selector: (row: any) => row.firstName + ' ' + row.lastName,
        },
        {
            name: 'username',
            selector: (row: any) => row.username,
        },
        {
            name: 'Role',
            selector: (row :any) => "user",
        },
        {
            name: 'Last Visit',
            selector: (row :any) => row.last_visit,
        },
        {
            name: 'Banned',
            selector: (row :any) => row.banned ? 'Yes' : 'No',
        },
        {
            name: 'Fine',
            selector: (row :any) => row.fine,
        },
    ]

    if (error) {
        return <p>Error :(</p>;
    }

    if (users) {
        return (
            <DataTable
                columns={columns}
                data={users}
                highlightOnHover={true}
                customStyles={customStyles}
                pagination={true}
                onRowClicked={(row) => setUser(row)}
            />
        );
    }

    return <p>Loading...</p>;

}

export default UserTable;