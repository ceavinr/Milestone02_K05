import React from "react";
import { Link } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className="flex h-[80px] items-center sticky top-0 z-50 py-4 px-12 shadow-xl bg-[#fff]">
      {/* Logo */}
      <Link to="/">
        <div className="flex items-center text-[#FFAA33] text-2xl">
          Study<span className="font-bold">Mate</span>
        </div>
      </Link>

      {/* Profile */}
      <div className="flex flex-grow justify-end items-center gap-2">
        <div className="">
          <CgProfile size={30} color={"#44288F"} />
        </div>
        <div className="">
          <h3 className="">Ceavin Rufus</h3>
          <p className="text-[12px] text-[#44288F]">@ceavinrufus</p>
        </div>
        <BsChevronDown />
      </div>
    </div>
  );
};

export default Navbar;
