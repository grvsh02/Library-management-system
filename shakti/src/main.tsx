import React from 'react';
import { Routes, Route } from 'react-router-dom';
import issue from "./pages/issue";
import AddPage from './pages/add';
import ViewPage from './pages/view';
import Issue from "./pages/issue";

const Main = () => {
    return (
        <Routes>
            <Route path='/add' element={<AddPage/>}></Route>
            <Route path='/' element={<ViewPage/>}></Route>
            <Route path='/issue' element={<Issue/>}></Route>
        </Routes>
    );
}

export default Main;