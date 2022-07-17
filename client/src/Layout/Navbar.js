import React, { useContext, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import Logo from "../img/logo.png";
import { useNavigate } from "react-router-dom";
import { AuthorContext } from "../Context/author";
import { IoEllipsisVerticalOutline } from "react-icons/io5";
import { LOCAL_STORAGE_TOKEN_NAME } from "../Context/constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();
  const { author, LogUser } = useContext(AuthorContext);
  const log = () => {
    navigate("/login");
    LogUser();
  };

  return (
    <div
      className="
        h-[70px]
        lg:h-[90px] 
        w-full
        text-white
        
        
        
        "
    >
      <div className="flex  justify-around bg-black items-center h-full px-[30px] lg:px-0 ">
        <img className="w-[50px] h-[50px]" src={Logo} alt="" />
        <h1 className="text-[2rem] flex-1 lg:flex-none font-mono">Blog</h1>
        <div className=" flex items-center justify-between relative">
          <FaUserCircle className="text-[2rem]" />
          <span className="name mx-2">
            {author.user ? author.user.username : "My acount"}
          </span>
          <div className="setting   h-[50px] flex items-center justify-end absolute right-[-20px] w-full ">
            <IoEllipsisVerticalOutline className="cursor-pointer text-white  " />
            <div className="box-setting  ">
              <ul className="w-full text-center text-black z-10">
                <li className="p-2  border-b-2">
                  <Link to="/login">Login</Link>
                </li>
                <li onClick={log} className="p-2">
                  Log out
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
