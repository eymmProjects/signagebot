"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { IoClose } from "react-icons/io5";
// import Logo from "@/public/Images/Logo_white.png";
import Logo from "../../../public/Images/Logo_white.png";

const navigation = [
  { name: "Products", href: "/products" },
  { name: "Technology", href: "/technology" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Navbar = ({ className }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hovering, setHovering] = useState(false);

  return (
    <div
      className={`lg:flex-1 lg:justify-end px-6 pt-3   top-0 z-50 fixed w-full items-center justify-center ${className} `}
    >
      <nav
        onMouseLeave={() => {
          setHovering(null);
        }}
        className="flex items-center mx-auto top-0 z-50  lg:justify-center sm:justify-between justify-between flex-1  p-2"
        aria-label="Global"
      >
        {/* left */}
        <div className="flex max-w-screen-2xl mr-5  justify-start lg:w-0 lg:flex-1 ">
          <div className="flex-between mx-auto w-full  max-w-screen-2xl px-2 xs:px-2 sm:px-4">
            <Link href="/">
              <Image src={Logo} width={150} height={40} alt="JSM logo" />
            </Link>

            <span className="text-lg space-x-2 mx-2 font-semibold leading-7 text-gray-600"></span>
          </div>
        </div>
        {/*  */}

        {mobileMenuOpen && (
          <div className="absolute top-0 left-0 w-full h-full bg-primary z-50 p-4">
            {/* Mobile Navigation Menu */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-white"
            >
              <div className="flex flex-row gap-2 items-center">
                <IoClose />
                Close
              </div>
            </button>
            <ul>
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="block px-4 py-2 text-sm text-white bg-gray-800  hover:bg-primary"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/*  */}
        {/* center */}
        <div className="hidden text-white  lg:flex   md:flex justify-center flex-1 ">
          <div className="hidden text-white justify-center flex-1 lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                as={item.href}
                className="nav-item text-white mt-2 text-center mb-2 justify-center text-xs"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#"
              className="flex nav-item text-white mt-2 text-center mb-2 justify-center text-xs"
              onMouseEnter={() => {
                setHovering(true);
              }}
            >
              Company
              <svg
                className="ml-2 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
          <div className="  absolute  justify-end flex-1 md:flex items-center sm:static sm:inset-auto sm:pr-0 flex lg:hidden  lg:w-0 space-x-4    ">
            <button
              type="button"
              className=" -m-2.5   items-center  rounded-md justify-between p-2.5 text-gray-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6 fill-primary " aria-hidden="true" />
            </button>
          </div>
          <div className="  md:flex items-center sm:static sm:inset-auto sm:pr-0">
            {/* <div className="relative group flex text-white mt-2 text-center mb-2 justify-center text-xs cursor-pointer">
              <button
                className="flex flex-row items-center"
                onMouseEnter={() => {
                  setHovering(true);
                }}
              >
                Company
                <svg
                  className="ml-2 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div> */}
            {/* Dropdown Links */}

            {hovering && (
              // <
              <Menu as="div" className="relative">
                <div
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-black-400 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none "
                  style={{ top: "70%", left: "-150px" }}
                >
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="/about"
                        className={classNames(
                          active ? "bg-gray-300" : "bg-brand_black",
                          "block px-4 py-2 text-sm text-gray-200  hover:text-black"
                        )}
                      >
                        About
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="/blog"
                        className={classNames(
                          active ? "bg-gray-300" : "bg-brand_black",
                          "block px-4 py-2 text-sm text-gray-200 hover:text-black"
                        )}
                      >
                        Blog
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="/career"
                        className={classNames(
                          active ? "bg-gray-300" : "bg-brand_black",
                          "block px-4 py-2 text-sm text-gray-200 hover:text-black"
                        )}
                      >
                        Career
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu>
            )}
          </div>
        </div>
        {/* test for navigation */}
        <div className=" items-center  justify-end md:flex-1 lg:w-0 space-x-4  hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/login"
            className="text-white  text-center justify-center text-xs"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="text-white text-xs bg-brand_blue  hover:bg-brand_blue/50 px-4 py-2 rounded-2xl "
          >
            Getting Started
          </Link>
        </div>
      </nav>

      <div className="w-full h-0.5 bg-white mt-1 opacity-5"></div>
    </div>
  );
};

export default Navbar;
