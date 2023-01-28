import React from 'react';
import Avatar from "@/src/common/components/avatar";

const Sidebar = () => {

    return (
        <div className="flex flex-col justify-start items-center fixed w-72 h-full bg-[#222d32] shadow-md">
            <ul>
                <div className="h-16 w-72 justify-center flex items-center text-slate-100 bg-[#367fa9]">
                    <div className="font-bold text-2xl flex mr-1">Library</div>
                    <div className="font-light text-2xl flex">Management</div>
                </div>
                <div className="mt-9 ml-3 flex">
                    <Avatar size="base" roundedFull altText="Librarian"/>
                    <div className="mx-3 flex flex-col justify-center items-start">
                        <div className="font-bold text-sm text-slate-100">ELC Department</div>
                        <div className="font-light text-xs text-slate-100">
                            <div className="flex">
                                <div className="mr-1">Logged in as:</div>
                                <div>Gaurav Sharma</div>
                            </div>
                        </div>
                    </div>
                </div>
                <li><div className="font-semibold text-slate-200 w-full"><span>Dashboard</span></div></li>
            </ul>
        </div>
    );
}

export default Sidebar;