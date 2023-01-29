import React, {useEffect} from 'react';
import Avatar from "@/src/common/components/avatar";

const Sidebar = () => {

    const [selected, setSelected] = React.useState("");

    useEffect(() => {

    }   , [selected])

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
                <div className="my-6">
                    <div
                        className={`font-semibold flex justify-center hover:cursor-pointer items-center h-12 text-slate-200 my-5 border-[#222d32] border-4 w-full pr-16 ${selected === "dashboard" ? "border-l-cyan-400" : "hover:border-l-cyan-400"}`}
                        onClick={() => setSelected("dashboard")}
                    >
                        <i className="fa-sharp fa-solid fa-house"></i><span className="ml-6">Dashboard</span>
                    </div>
                    <div
                        className={`font-semibold flex flex-col justify-center items-center my-5 text-slate-200 border-[#222d32] border-4 w-full pl-2 ${selected === "issue" || selected === "return" ? "border-l-cyan-400" : "hover:border-l-cyan-400"}`}
                    >
                        <div
                            onClick={() => setSelected("issue")}
                            className="h-12 hover:cursor-pointer"
                        >
                            <i className="fa-solid fa-recycle"></i><span className="ml-6">Transactions</span><i className="fa-solid fa-chevron-right ml-12"></i>
                        </div>
                        {selected === "issue" || selected === "return" ? (
                            <div className="flex flex-col w-full mr-4 bg-[#2C3B41]">
                                <div
                                    className={`font-semibold flex hover:cursor-pointer justify-center items-center h-12 text-slate-200 my-2 border-4 border-[#2C3B41] w-full ${selected === "issue" ? "border-l-cyan-400" : "hover:border-l-cyan-400"}`}
                                    onClick={() => setSelected("issue")}
                                >
                                    <i className="fa-solid fa-right-left"></i><span className="ml-6">Issue</span>
                                </div>
                                <div
                                    className={`font-semibold flex hover:cursor-pointer justify-center items-center h-12 text-slate-200 my-2 border-4 border-[#2C3B41] w-full ${selected === "return" ? "border-l-cyan-400" : "hover:border-l-cyan-400"}`}
                                    onClick={() => setSelected("return")}
                                >
                                    <i className="fa-solid fa-right-left"></i><span className="ml-6">Return</span>
                                </div>
                            </div>
                        ) : null}
                    </div>
                    <div
                        className={`font-semibold flex flex-col justify-center items-center my-5 text-slate-200 border-[#222d32] border-4 w-full pl-2 ${selected === "manage_books" ? "border-l-cyan-400" : "hover:border-l-cyan-400"}`}
                    >
                        <div
                            onClick={() => setSelected("manage_books")}
                            className="h-12 hover:cursor-pointer"
                        >
                            <i className="fa-solid fa-book"></i><span className="ml-6">Books</span><i className="fa-solid fa-chevron-right ml-[104px]"></i>
                        </div>
                        {selected === "manage_books" && (
                            <div className="flex flex-col w-full mr-4 bg-[#2C3B41]">
                                <div
                                    className={`font-semibold flex hover:cursor-pointer justify-center items-center h-12 text-slate-200 my-2 border-4 border-[#2C3B41] w-full ${selected === "manage_books" ? "border-l-cyan-400" : "hover:border-l-cyan-400"}`}
                                    onClick={() => setSelected("manage_books")}
                                >
                                    <i className="fa-solid fa-right-left"></i><span className="ml-6">Manage</span>
                                </div>
                            </div>
                        )}
                    </div>
                    <div
                        className={`font-semibold flex flex-col justify-center items-center my-5 text-slate-200 border-[#222d32] border-4 w-full pl-2 ${selected === "manage_students" ? "border-l-cyan-400" : "hover:border-l-cyan-400"}`}
                    >
                        <div
                            onClick={() => setSelected("manage_students")}
                            className="h-12 hover:cursor-pointer"
                        >
                            <i className="fa-solid fa-book"></i><span className="ml-6">Students</span><i className="fa-solid fa-chevron-right ml-20"></i>
                        </div>
                        {selected === "manage_students" && (
                            <div className="flex flex-col w-full mr-4 bg-[#2C3B41]">
                                <div
                                    className={`font-semibold flex hover:cursor-pointer justify-center items-center h-12 text-slate-200 my-2 border-4 border-[#2C3B41] w-full ${selected === "manage_students" ? "border-l-cyan-400" : "hover:border-l-cyan-400"}`}
                                    onClick={() => setSelected("students")}
                                >
                                    <i className="fa-solid fa-right-left"></i><span className="ml-6">Manage</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </ul>
        </div>
    );
}

export default Sidebar;