import React from 'react';
import Navbar from "@/src/common/components/navbar";
import Sidebar from "@/src/common/components/sidebar";

const Layout = ({ children }: any) => {
    return (
        <div className={'flex w-screen h-screen overflow-y-auto bg-slate-50 dark:bg-slate-900'}>
            <Navbar />
            <Sidebar />
            <div className={'grow max-w-100 overflow-x-hidden transition-all duration-300 flex flex-col ml-72 mt-12'}>{children}</div>
        </div>
    );
}

export default Layout;