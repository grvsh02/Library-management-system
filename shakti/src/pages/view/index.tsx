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
import Navcards from "../../components/navcards";


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
            <div className="text-5xl py-10">
                Welcome Admin
            </div>
            <div className="py-10">
                Here are all the options and features you can use as an admin to manage your library
            </div>
            <div className="grid gap-4 grid-cols-3 grid-rows-3">
                <Navcards title="Add Book " image="https://cdn.pixabay.com/photo/2021/11/24/05/16/bookmark-6820226_1280.png"/>
                <Navcards title="View" image="https://cdn.pixabay.com/photo/2015/03/04/22/35/hed-659651_960_720.png"/>
                <Navcards title="Add Book " image="https://cdn.pixabay.com/photo/2021/11/24/05/16/bookmark-6820226_1280.png"/>
                <Navcards title="View" image="https://cdn.pixabay.com/photo/2015/03/04/22/35/hed-659651_960_720.png"/>
                <Navcards title="Add Book " image="https://cdn.pixabay.com/photo/2021/11/24/05/16/bookmark-6820226_1280.png"/>
                <Navcards title="View" image="https://cdn.pixabay.com/photo/2015/03/04/22/35/hed-659651_960_720.png"/>
                <Navcards title="Add Book " image="https://cdn.pixabay.com/photo/2021/11/24/05/16/bookmark-6820226_1280.png"/>
                <Navcards title="View" image="https://cdn.pixabay.com/photo/2015/03/04/22/35/hed-659651_960_720.png"/>
            </div>
        </div>
    )
}

export default ViewPage;