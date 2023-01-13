import React from 'react';
import { Routes, Route } from 'react-router-dom';
import issue from "./pages/issue";
import AddPage from './pages/add';
import ViewPage from './pages/view';
import Issue from "./pages/issue";
import Login from "./pages/login";
import Signup from "./pages/signup";

const Main = () => {
    return (
        <Routes>
            <Route path='/add' element={<AddPage/>}></Route>
            <Route path='/' element={<ViewPage/>}></Route>
            <Route path='/issue' element={<Issue/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
        </Routes>
    );
}

export default Main;