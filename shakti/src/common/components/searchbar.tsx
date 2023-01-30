import React from 'react'
import {faSearch} from "@fortawesome/free-solid-svg-icons";

type SearchbarProps = {
    keyword?: string,
    onSearch?: (keyword: string) => void
}

const Searchbar = ({keyword, onSearch = () => {}}: SearchbarProps) => {

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        onSearch(e.target.value);
    }

    return (
        <div className="w-2/5 h-12 flex bg-white relative border-2 border-[#fff] border-b-slate-700 flex justify-center items-center">
            <input className="min-w-full pl-8 outline-0" onChange={handleSearch} value={keyword} placeholder="Search "></input>
            <i className="fa-solid fa-magnifying-glass "></i>
        </div>
    )
}

export default Searchbar