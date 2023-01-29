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
        <div className="w-2/5 h-12 flex bg-white relative">
            <input className="min-w-full pl-8" onChange={handleSearch} value={keyword} placeholder="Search by Name, email or phone no. "></input>
            <i className="fa-solid fa-magnifying-glass"></i>
        </div>
    )
}

export default Searchbar