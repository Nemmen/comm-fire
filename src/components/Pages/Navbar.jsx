import React, { useState } from "react";
import empowermend from "../img/empowermend.jpg";
import { Link } from "react-router-dom";

import Button from "./Button";
import { FaBars } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const [toggle, setToggle] = useState(false);

  return (
    <section className="text-center flex shadow-md justify-center items-center scroll-smooth">
      <nav className="sm:w-[90%] w-full flex py-2 justify-between items-center">
        <img src={empowermend} alt="" className="w-[80px]" />
        <ul className="list-none sm:flex gap-4 hidden justify-center ms-5 items-center flex-1">
          <li className={`font-poppins font-normal  active:font-semibold  cursor-pointer text-[18px] `}>
            <Link to="/">HOME</Link>
          </li>
          <li className={`font-poppins  font-normal active:font-semibold cursor-pointer text-[18px] `}>
            <Link to="/ayurveda">AYURVEDA</Link>
          </li>
          <li className={`font-poppins  font-normal active:font-semibold cursor-pointer text-[18px] `}>
            <Link to="/community">COMMUNITY</Link>
          </li>
          <li className={`font-poppins  font-normal active:font-semibold cursor-pointer text-[18px] `}>
            <Link to="/experts">EXPERTS</Link>
          </li>
          <li className={`font-poppins  font-normal active:font-semibold  ms-auto cursor-pointer text-[18px] `}>
            <Link to="/contact">
              <Button name="Contact"></Button>
            </Link>
          </li>
          {/* <li>
            <Link to="/profile">
              <FaRegUserCircle className="h-[50px] w-[50px] text-black/25"/>
            </Link>
          </li> */}
          {user === null ? (
            <li>
              <Link to='/signin'><Button name='Log in'></Button></Link>
            </li>
          ) : (
            <li>
              <Link to={`/profile/${user?.uid}`}>
                <FaRegUserCircle className="h-[50px] w-[50px] text-black/25" />
              </Link>
            </li>
          )}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          {toggle ? (
            <IoCloseOutline
              className="w-[28px] h-[28px] mr-[20px]"
              onClick={() => setToggle((prev) => !prev)}
            />
          ) : (
            <FaBars
              className="w-[28px] h-[28px] mr-[20px]"
              onClick={() => setToggle((prev) => !prev)}
            />
          )}

          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded -xl sidebar`}
          >
            <ul className="list-none flex flex-col justify-end items-center flex-1">
              <li className={`font-poppins font-normal active:font-semibold  cursor-pointer text-[18px] `}>
                <Link to="/">Home</Link>
              </li>
              <li className={`font-poppins  font-normal active:font-semibold cursor-pointer text-[18px] `}>
                <Link to="/about">About</Link>
              </li>
              <li className={`font-poppins  font-normal active:font-semibold  cursor-pointer text-[18px] `}>
                <Link to="/community">Community</Link>
              </li>
              <li className={`font-poppins  font-normal cursor-pointer text-[18px] `}>
                <Link to="/contact">Contact</Link>
              </li>
              <li className={`font-poppins  font-normal cursor-pointer text-[18px] `}>
                <Link to={`/profile/${user?.uid}`}>Profile</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
