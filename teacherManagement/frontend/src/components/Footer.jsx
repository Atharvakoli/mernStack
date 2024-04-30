import React from 'react'
import { FaChalkboardTeacher } from "react-icons/fa"; 

const Footer = () => {
  return (
<div className="bg-slate-300">  
    <div className="max-w-2xl mx-auto text-white py-10">
        <div className="text-center">
            <h3 className="text-3xl mb-3"> For Teachers Management who Want the Exact Changes </h3>
            <p> Stay Updated. And Update, every day. </p>
            <div className="flex justify-center my-10">
                <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2">
                    <FaChalkboardTeacher size={50} />
                    <div className="text-left ml-3">
                        <p className='text-xs text-gray-200'>For Teachers </p>
                        <p className="text-sm md:text-base"> Manage Attendence </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
            <p className="order-2 md:order-1 mt-8 md:mt-0"> &copy; All Rights Reserved, 2024. </p>
            <div className="order-1 md:order-2">
                <span className="px-2">About us</span>
                <span className="px-2 border-l">Guide</span>
                <span className="px-2 border-l">Features</span>
            </div>
        </div>
    </div>
</div>
  )
}

export default Footer
