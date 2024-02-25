import React from "react";
import logo from "../img/empowermend.png";
import Button from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="w-[100%]">
      <footer className="p-5 rounded-xl bg-gray-900">
        <div className="">
          <div className="grid lg:grid-cols-3 gap-20 md:grid-cols-2 sm:grid-cols-1 sm:text-center mt-[50px] pt-4 lg:h-[50vh] md:h-[70vh] h-[100%]">
            <div className="">
              <div className="">
                <img
                  src={logo}
                  className="object-start h-24 w-24 mx-auto lg:h-38 lg:w-38 md:h-28 md-w-28 sm:w-28 sm:h-28 m-3"
                  alt="Flowbite Logo"
                />
              </div>
              <p className="text-white w-[70%] mx-auto text-center lg:text-start md:text-center sm:text-center">
                Join us in breaking the silence, finding strength in solidarity,
                and reclaiming hope for a brighter future.
              </p>
            </div>
            <div className="flex flex-col gap-4 text-center mt-5 lg:text-start md:text-start sm:text-center ps-4 my-auto text-xl">
              <h4 className="text-white pb-2 text-xl lg:text-xl md:text-xl sm:text-lg font-bold">
                Pages
              </h4>
              <Link
                to="/"
                className="text-white text-base lg:text-xl md:text-xl sm:text-lg"
              >
                Home
              </Link>
              <Link
                to="/community"
                className="text-white text-base lg:text-xl md:text-xl sm:text-lg"
              >
                Community
              </Link>
              <Link
                to="/ayurveda"
                className="text-white text-base lg:text-xl md:text-xl sm:text-lg"
              >
                AYURVEDA
              </Link>
            </div>
            <div className="flex flex-col gap-4 text-center mt-5 lg:text-start md:text-start sm:text-center ps-4 my-auto text-xl">
              <h4 className="text-white pb-2 text-xl font-bold">Utilities</h4>
              <p className="text-white mt-1 text-base lg:text-xl md:text-xl sm:text-lg">
                Privacy Policy
              </p>
              <p className="text-white mt-1 text-base lg:text-xl md:text-xl sm:text-lg">
                License
              </p>
              <p className="text-white mt-1 text-base lg:text-xl md:text-xl sm:text-lg">
                Terms of Use
              </p>
              <p className="text-white mt-1 text-base lg:text-xl md:text-xl sm:text-lg">
                FAQ
              </p>
            </div>
          </div>
          <hr className="text-white-50 mt-5 mb-5" />
          <p className="text-center text-white">Created By Team SolutioNexus</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
