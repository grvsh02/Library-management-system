import React from "react";
import styled from "@emotion/styled";
import {useNavigate} from "react-router-dom";
import DataTable from 'react-data-table-component';


const customstyles = {
    headRow: {
        style: {
            fontWeight: 'bold',
            fontSize: '15px',
            minHeight: '52px',
            borderBottomWidth: '8px',
            borderBottomStyle: 'solid',
        },
    },
};


const columns = [
    {
        name: 'Book Name',
        selector: (row: { bookname: any; }) => row.bookname,

    },
    {
        name: 'Author',
        selector: (row: { author: any; }) => row.author,
    },
    {
        name: 'Quantity',
        selector: (row: { quant: any; }) => row.quant,
    },

]

const data = [
    {
        id: 1,
        bookname: 'Short Stories',
        author: 'Yash K',
        quant: '8',
    },
    {
        id: 2,
        bookname: 'Ghostbusters',
        author: 'Saumy S',
        quant: '9',
    },
    {
        id: 3,
        bookname: 'DSA in Java',
        author: 'Gaurav S',
        quant: '3',
    },
    {
        id: 4,
        bookname: 'Operating Systems',
        author: 'Prashant G',
        quant: '4',
    },
    {
        id: 5,
        bookname: 'Intro to Electric Circuits`',
        author: 'Aranyak S',
        quant: '3',
    },
    {
        id: 6,
        bookname: 'Beetlejuice',
        author: 'Himanshu L',
        quant: '4',
    },

]




const issue = () => {
    return (
        <div>
            <div className="text-5xl py-10 text-blue-900">
                Book Issuing System
            </div>
            <div className="py-10">
                Check your inventory and make your book issuing management simple
            </div>
            <div>
                <DataTable columns={columns} data={data} responsive pagination customStyles={customstyles}/>
            </div>
        </div>
    );
    };

export default issue;