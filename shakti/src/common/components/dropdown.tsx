import React from 'react';
import Button from "./button";

type DropdownProps = {
    placeholder?: string;
    label?: string;
    className?: string,
    onClick?: () => void,
    isSelected?: string,
    onClose?: () => void,
    disabled?: boolean,
    onChange?: (value : any) => void,
    hasButton?: boolean,
    onButtonClick?: () => void,
    buttonText?: string,
    items?: string[],
}

const Dropdown = ({ items = [], onClose = () => {}, className = '', placeholder, label, isSelected, disabled, onChange = () => {}, hasButton, onButtonClick, buttonText } : DropdownProps) => {

    const [isOpen, setIsOpen] = React.useState(false);
    const [selectedItem, setSelectedItem] = React.useState(isSelected ? isSelected : "");

    return (
        <div className={"relative inline-block w-full " + className}>
            <div className="h-full w-full text-[#030e19] text-sm rounded">
                <div className={'w-full px-0 flex justify-between'}>
                    {label &&
                        <label className="text-lg opacity-80 mb-2" aria-hidden={false}>
                            {label}
                        </label>}
                    {hasButton &&
                        <Button onClick={onButtonClick} size={"sm"} className="mb-1">
                            {buttonText}
                        </Button>}
                </div>
                <div  className="w-full p-2 flex border border-[#828282] text-[#030e19] rounded text-sm focus:border-[#F4694C] justify-between" onClick={() => setIsOpen(true)}>
                    {selectedItem !== "" ? selectedItem : placeholder}
                </div>
            </div>
            {isOpen && !disabled ? (
                <div className="block absolute mt-2 bg-[#f6f6f6] border border-[#bdbdbd] z-10 w-full" role="navigation" onMouseLeave={() => setIsOpen(false)}>
                    <div role="menu" onMouseLeave={onClose}>
                        {items.length > 0 && items.map((n,i) => {
                            return (
                                <div className="w-full p-2 text-[#828282] cursor-pointer text-sm relative inline-block bg-[#fff] rounded hover:bg-[#E8E8E8]" key={i}  onClick={() => {
                                    onChange(n);
                                    setSelectedItem(n);
                                    setIsOpen(false);
                                }}>
                                    {n}
                                </div>
                            )
                        })}
                    </div>
                </div>
            ) : <div />}
        </div>
    )
}

export default Dropdown;