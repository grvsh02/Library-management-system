import React from 'react';
import Card from "../../components/card";
import LabelTextInput from "../../components/labelTextInput";
import Dropdown from "../../components/dropdown";
import Button from "../../components/button";
import Modal from "../../components/modal";
import TagsInput from "../../components/taginput";
import {toast} from "react-toastify";
import  { useNavigate } from 'react-router-dom'


const AddPage = () => {

    const navigate = useNavigate();

    const [isOpen, setIsOpen] = React.useState(false);

    const handleAdd = () => {
        setIsOpen(false);
        // API call to add
        toast.success("Tags Added !", {
            position: toast.POSITION.TOP_RIGHT
        });
    }

    const handleSave = () => {
        // API call to save
        toast.success("Saved !", {
            position: toast.POSITION.TOP_RIGHT
        });
        navigate('/');
    }

    return (
       <div>
           <div className="text-5xl py-10 text-blue-900">
               Add Book
           </div>
           <div className="py-10">
                Here you can add a new book to the library, Grow your inventory and make your library more diverse
           </div>
              <div className="flex flex-col">
           <form className="flex flex-col py-10">
               <label className="py-10">Enter the book name:
                   <input type="text" />
               </label>
               <label className="py-10">Enter the author name:
                   <input type="text" />
               </label>
               <label className="py-10">Enter the quantity:
                     <input type="number" />
                </label>
           </form>

           <Button onClick={() => console.log("Book added")} className="xs">
                Add Book
           </Button>
                  </div>


       </div>
    );
}

export default AddPage;