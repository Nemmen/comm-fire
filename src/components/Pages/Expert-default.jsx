
import React from 'react';
import exp from "../svgs/empowermend logo (3).png"
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
const ExpertDefault = () => {
  return (
    <div className='body'>
      <div className="p-5 border rounded-md shadow-lg hover:shadow-xl text-gray-500 w-full m-2 ">
        <div className="flex items-center">
          <img className="w-16 h-16 rounded mr-4 " src={exp} alt="jane" />
          <div className="text-sm">
            <a href="#"
              className="font-medium leading-none text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out">
              Jane Doe
            </a>
            <p>Lawyer &amp; Doctor  </p>
          </div>
        </div>

        <p className="mt-2 text-sm text-gray-900">
          Lorem ipsum dolor sit amet, consecte adipisicing elit. Voluptatibus quia
          Maiores et perferendis eaque
        </p>
        <button className=" text-sm text-indigo-600 font-medium py-2 my-5 px-4 rounded-full border border-indigo-600 hover:bg-indigo-600 hover:text-white hover:border-transparent transition duration-300 ease-in-out">
  Schedule a Demo
</button>
        <div className="flex mt-4">
        <a href="/#" className="w-6 mx-1">
        <FaFacebook />
          </a>
          <a href="/#" className="w-6 mx-1">
          <FaTelegram />
          </a>
          <a href="/#" className="w-6 mx-1">
          <AiFillInstagram />
          </a>
          <a href="/#" className="w-6 mx-1">
          <FaYoutube />
          </a>
      
        </div>
      </div>
    </div>
  );
};

export default ExpertDefault;
