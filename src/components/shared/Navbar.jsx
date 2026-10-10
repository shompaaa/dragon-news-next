import Link from "next/link";
import React from "react";
import userAvatar from "@/assets/user.png"
import Image from "next/image";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div></div>
      <ul className="flex gap-4 text-gray-800">
        <li>
          <NavLink href={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink href={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink href={"/career"}>Career</NavLink>
        </li>
      </ul>
      <div className="flex items-center gap-3">
        <Image src={userAvatar} alt="User" height={50} width={50}></Image>
        <button className="btn bg-gray-800 text-white"><Link href={"/login"}>Login</Link></button>
      </div>
    </div>
  );
};

export default Navbar;
