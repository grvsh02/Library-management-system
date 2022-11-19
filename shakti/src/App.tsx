import React from 'react';
import NavBar from "./components/navbar";
// import Main from "./main";
import Sidebar from "./components/sidebar";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <div className="bg-gray-200 flex flex-col w-full min-h-screen">
            <NavBar/>
            <Sidebar/>
            <ToastContainer/>
        </div>
    );
}

export default App;