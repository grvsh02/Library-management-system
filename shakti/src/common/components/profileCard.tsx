import React from "react";
import Avatar from "@/src/common/components/avatar";

const ProfileCard = ({title, subTitle, optionalText, onRemove = () => {}}: any) => {
    return (
        <div className="flex flex-col items-center justify-center bg-center bg-cover" >
            <div className="bg-black opacity-80 inset-0 z-0"></div>
            <div className="max-w-3xl w-full mx-auto z-10">
                <div className="flex flex-col">
                    <div className="bg-white border border-white shadow-lg  rounded-3xl p-4 m-4">
                        <div className="flex-none sm:flex">
                            <div className=" relative h-24 w-24   sm:mb-0 mb-3">
                                <Avatar size={"base"} altText={title} />
                            </div>
                            <div className="flex-auto sm:ml-5 justify-evenly">
                                <div className="flex items-center justify-between sm:mt-2">
                                    <div className="flex items-center">
                                        <div className="flex flex-col">
                                            <div className="w-full flex-none text-lg text-gray-800 font-bold leading-none">{title}</div>
                                            <div className="flex-auto text-gray-500 my-1">
                                                <span className="mr-3 ">{subTitle}</span><span className="mr-3 border-r border-gray-200  max-h-0"></span><span>#{optionalText}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex pt-2 text-sm text-gray-500 justify-end ">
                                    <button  className="flex-no-shrink bg-rose-400 hover:bg-rose-500 px-5 ml-4 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-rose-300 hover:border-rose-500 text-white rounded-full transition ease-in duration-300" onClick={onRemove}>Remove</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;