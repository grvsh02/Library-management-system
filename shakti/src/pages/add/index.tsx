import React from 'react';
import Card from "../../components/card";
import LabelTextInput from "../../components/labelTextInput";
import Dropdown from "../../components/dropdown";
import Button from "../../components/button";
import Modal from "../../components/modal";
import TagsInput from "../../components/taginput";
import {toast} from "react-toastify";
import  { useNavigate } from 'react-router-dom'
import NavBar from "../../components/navbar";
import Sidebar from "../../components/sidebar";


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
        <div className="bg-gray-200 flex flex-col w-full min-h-screen">
            <NavBar/>
           <div className="text-5xl py-10 text-blue-900">
               Add Book
           </div>
           <div className="py-10">
                Here you can add a new book to the library, Grow your inventory and make your library more diverse
           </div>
              <div className="flex flex-col">
                  <form className="mt-6">
                      <div className="mb-2">
                          <label>
                              <span className="text-gray-700">Book Name</span>
                              <input
                                  type="text"
                                  name="name"
                                  className="

            w-full
            block px-16 py-2 mt-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                                  placeholder="John cooks"
                              />
                          </label>
                      </div>
                          <div className="mb-2">
                              <label>
                                  <span className="text-gray-700">Author</span>
                                  <input
                                      type="text"
                                      name="name"
                                      className="

            w-full
            block px-16 py-2 mt-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                                      placeholder="John cooks"
                                  />
                              </label>
                          </div>
                          <div className="mb-2">
                              <label>
                                  <span className="text-gray-700">Quantity</span>
                                  <input
                                      type="number"
                                      name="name"
                                      className="

            w-full
            block px-16 py-2 mt-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                                      placeholder="John cooks"
                                  />
                              </label>
                          </div>
           </form>

           <Button onClick={() => console.log("Book added")} className="xs">
                Add Book
           </Button>
                  </div>
       </div>
    );
}

export default AddPage;