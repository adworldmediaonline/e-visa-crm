import { logo } from '@/constants/images';
import { CircleUserRound } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
const Navbar = () => {
  return (
    <>
      <div className="fixed w-full  flex items-center justify-between h-16 bg-gradient-to-r from-[#dcf2ea] to-primary shadow-xl dark:bg-gray-800 text-white z-10">
        <div className="px-12">
          <Image src={logo} className="w-36 mx-auto" alt="logo" />
        </div>
        <div className="flex w-full justify-end items-center h-14 header-right">
          <div className="flex items-center justify-start md:justify-center pl-3 w-14 md:w-64 h-14 border-none">
            <CircleUserRound className="w-7 h-7 md:w-10 md:h-10 mr-2" />
            <span className="hidden md:block">ADMIN</span>
          </div>

          <button className="flex items-end border-l-2 pl-2 mr-4 hover:text-blue-100">
            <span className="inline-flex mr-1">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                ></path>
              </svg>
            </span>
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
