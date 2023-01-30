import React from 'react';

const NavBar = ({}) => {

    const [selected, setSelected] = React.useState(null);
    const [stroke, setStroke] = React.useState("#828282");

    return (
        <div className="h-16 w-full fixed bg-[#3c8dbc] shadow-md flex flex-row justify-between items-center">
            Nav Bar
        </div>
    )
}

export default NavBar;