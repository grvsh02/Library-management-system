import React from 'react';
import Card from "../../components/card";
import Button from "../../components/button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashCan, faDownload} from "@fortawesome/free-solid-svg-icons";
import Searchbar from "../../components/searchbar";
import DataTable from 'react-data-table-component';
import {Link} from "react-router-dom";
import Modal from "../../components/modal";
import { toast } from 'react-toastify';

export interface dataProps {
    name: string;
    Member_id: string;
    IssuedBook: string;
    Book_id: string;
    IssueDate: string;
}

const ViewPage = () => {

    const [isOpen, setIsOpen] = React.useState(false);

    const handleDelete = () => {
        setIsOpen(false);
        // API call to delete
        toast.success("Deleted successfully !", {
            position: toast.POSITION.TOP_RIGHT
        });
    }

    const columns = [
        {
            name: 'Member ID',
            selector: (row: { Member_id: any; }) => row.Member_id,
        },
        {
            name: 'Member Name',
            selector: (row: { name: any; }) => row.name,
        },
        {
            name: 'Issued Book',
            selector: (row: { IssuedBook: any; }) => row.IssuedBook,
        },
        {
            name: 'Book ID',
            selector: (row: { BookID: any; }) => row.BookID,
        },
        {
            name: 'Registration Date',
            selector: (row: { IssuedDate: any; }) => row.IssuedDate,
        },
        {
            name: 'Delete',
            selector: () => <FontAwesomeIcon icon={faTrashCan} size={'1x'} className="cursor-pointer" onClick={() => setIsOpen(true)}/>,
        }

    ];

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

    const [isLoaded, setIsLoaded] = React.useState(false);
    const [items, setItems] = React.useState([{
        name: '',
        Member_id: '',
        IssuedBook: '',
        BookID: '',
        IssuedDate: '',
    }]);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        fetch("http://localhost:3000/api/view")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result.name);
                },
                (error) => {
                    console.log(error);
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    return (
        <div>
            <div className="m-10">
                <div className="text-4xl font-semibold">All Members</div>
                <div className="w-full flex justify-between mt-10">
                    <Link to="/add"><Button>Add Member</Button></Link>
                    <Searchbar/> {/* add onSearch parameter and add a function to call api for searching*/}
                    <Button><FontAwesomeIcon icon={faDownload} className="mt-1"/>Export as XLSX</Button>
                </div>
                <div>
                    <Card className="mt-10">
                        <div>
                            <DataTable
                                columns={columns}
                                data={items}
                                highlightOnHover={true}
                                customStyles={customStyles}
                                pagination={true}
                            />
                        </div>
                    </Card>
                </div>
            </div>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <div className="text-2xl font-semibold">Delete member</div>
                <div className="text-lg mt-5">Are you sure you want to delete this Member?</div>
                <div className="flex justify-end mt-10">
                    <Button className="mr-5" onClick={() => setIsOpen(false)}>Cancel</Button>
                    <Button className="bg-red-500" onClick={() => {handleDelete()}}>Delete</Button>
                </div>
            </Modal>
        </div>
    );
}

export default ViewPage;