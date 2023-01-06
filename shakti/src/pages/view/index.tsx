import React from 'react';
import Navcards from "../../components/navcards";



const ViewPage = () => {
    return (
        <div>
            <div className="text-5xl py-10 text-blue-900">
                Welcome Admin
            </div>
            <div className="py-10">
                Here are all the options and features you can use as an admin to manage your library
            </div>
            <div className="grid gap-4 grid-cols-3 grid-rows-3">
                <Navcards title="Add Books " image="https://cdn.pixabay.com/photo/2013/04/01/10/57/manual-98728_1280.png"/>
                <Navcards title="Manage Issuers/Readers" image="https://cdn.pixabay.com/photo/2012/04/14/17/04/boy-34619_1280.png"/>
                <Navcards title="Issue Book " image="https://cdn.pixabay.com/photo/2017/01/31/00/09/books-2022463_1280.png"/>
                <Navcards title="Manage Fines" image="https://cdn.pixabay.com/photo/2012/04/18/23/39/money-38268_1280.png"/>
                <Navcards title="Manage Admin" image="https://cdn.pixabay.com/photo/2015/03/04/22/35/hed-659651_960_720.png"/>
                <Navcards title="Entry System" image="https://cdn.pixabay.com/photo/2012/04/11/12/13/enter-27853_1280.png"/>
            </div>
        </div>
    )
}

export default ViewPage;