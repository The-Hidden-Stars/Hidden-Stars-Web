import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Button from "../Button";

const Navbar = () => {
    const [ mobileMenuOpen, setMobileMenuOpen ] = useState(false);

    return (
        <nav className={`fixed z-50 w-full ${mobileMenuOpen && "pb-[35px]"} md:pb-3 bg-white border-b border-solid border-b-gray-800 px-3 sm:px-4 py-2.5 dark:bg-gray-900 backdrop-blur-md dark:bg-opacity-75`}>
            <div className="container flex flex-wrap justify-between items-center mx-auto">
            <Link href="/">
                <a className="flex items-center space-x-3">
                    <Image src="/svg/logo.svg" width={25} height={25} alt="The Hidden Stars Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                        Hidden Stars
                    </span>
                </a>
            </Link>
            <div className="flex md:order-2">
                <Link href={'https://discord.com/invite/CA9AEyWSGr'} passHref>
                    <a target={"_blank"} rel="noopener noreferrer">
                        <Button>Join Today</Button>
                    </a>
                </Link>
                <button onClick={() => { setMobileMenuOpen(!mobileMenuOpen) }} data-collapse-toggle="mobile-menu-4" type="button" className="inline-flex items-center p-2 text-sm text-gray-800 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-4" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    { 
                        mobileMenuOpen ? (
                            <XIcon className="w-6" />
                        ) : <MenuIcon className="w-6"/>
                    }
                </button>
            </div>
            <div className={`${mobileMenuOpen ? "block" : "hidden"} justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-3`}>
                <ul className="flex space-y-3 md:space-y-0 flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                <li>
                    <a href="/" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
                </li>
                <li>
                    <a href="#about" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Our Mission</a>
                </li>
                <li>
                    <a href="#founder" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Founder</a>
                </li>
                </ul>
            </div>
            </div>
           
        </nav>
    )
}

export default Navbar; 