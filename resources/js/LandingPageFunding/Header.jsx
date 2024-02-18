import { Link } from '@inertiajs/inertia-react';
import React, { useState, useEffect } from 'react';
import NavLink from "@/Components/NavLink";
import DropdownMenu from "@/Components/DropdownMenu";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
    
    MenuIcon,
    
    XIcon,
} from "@heroicons/react/outline";

import Logo from '../../img/Tawarin.png';

function Header() {

  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-white backdrop-blur-sm shadow-lg'}`}>
      <div className="max-w-6xl px-5 mx-auto sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            {/* <NavLink href="/">Home</NavLink> */}
            <Link href="/" className="block" aria-label="Cruip">
              <img className="w-8 h-8" src={Logo}/>
            </Link>
          </div>

          {/* Site navigation */}
          <Popover className="relative hidden md:block">
                <div className="px-4 mx-auto max-w-7xl sm:px-6">
                    <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
                       
                        <div className="-my-2 -mr-2 md:hidden">
                            <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span className="sr-only">Open menu</span>
                                <MenuIcon
                                    className="w-6 h-6"
                                    aria-hidden="true"
                                />
                            </Popover.Button>
                        </div>

                        <Popover.Group
                            as="nav"
                            className="hidden space-x-10 md:flex"
                        >
                            <NavLink href="/">Tawarin Reservasi</NavLink>
                            <NavLink href="/">Tawarin Konstruksi</NavLink>
                            

                            {/* <DropdownMenu label={"Plan"}>
                                <DropdownMenu.Link href="/plans">
                                    Index
                                </DropdownMenu.Link>
                                <DropdownMenu.Link href="/public/plans/list">
                                    List
                                </DropdownMenu.Link>
                                <DropdownMenu.Link href="/plans/create">
                                    Form
                                </DropdownMenu.Link>
                            </DropdownMenu>
                            <DropdownMenu label={"Example"}>
                            <DropdownMenu.Link href="/example/home2">
                                    Home2
                                </DropdownMenu.Link>
                                <DropdownMenu.Link href="/example/form">
                                    Form
                                </DropdownMenu.Link>
                                <DropdownMenu.Link href="/example/funding">
                                    Funding
                                </DropdownMenu.Link>
                                <DropdownMenu.Link href="/example/descriptionlist">
                                    Decription List
                                </DropdownMenu.Link>
                                <DropdownMenu.Link href="/filepond">
                                    Filepond
                                </DropdownMenu.Link>
                                <DropdownMenu.Link href="/dropzone">
                                    Dropzone
                                </DropdownMenu.Link>
                            </DropdownMenu> */}
                           
                        </Popover.Group>
                        
                    </div>
                </div>

                <Transition
                    as={Fragment}
                    enter="duration-200 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel
                        focus
                        className="absolute inset-x-0 top-0 z-20 p-2 transition origin-top-right transform md:hidden"
                    >
                        <div className="divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
                            <div className="px-5 pt-5 pb-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <img
                                            className="w-auto h-8"
                                            src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                                            alt="Workflow"
                                        />
                                    </div>
                                    <div className="-mr-2">
                                        <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                            <span className="sr-only">
                                                Close menu
                                            </span>
                                            <XIcon
                                                className="w-6 h-6"
                                                aria-hidden="true"
                                            />
                                        </Popover.Button>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <DropdownMenu
                                        className="grid gap-y-8"
                                        label={"Categories"}
                                    >
                                        
                                    </DropdownMenu>
                                </div>
                            </div>
                            <div className="px-5 py-6 space-y-6">
                                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                    

                                    <DropdownMenu label={"Plan"}>
                                        <DropdownMenu.Link href="/plans">
                                            Index
                                        </DropdownMenu.Link>
                                        <DropdownMenu.Link href="/public/plans/list">
                                            List
                                        </DropdownMenu.Link>
                                        <DropdownMenu.Link href="/plans/create">
                                            Form
                                        </DropdownMenu.Link>
                                    </DropdownMenu>
                                    <NavLink href="/toko/products">
                                        Products
                                    </NavLink>
                                    <DropdownMenu label={"Example"}>
                                        <DropdownMenu.Link href="/example/form">
                                            Form
                                        </DropdownMenu.Link>
                                        <DropdownMenu.Link href="/example/funding">
                                            Funding
                                        </DropdownMenu.Link>
                                        <DropdownMenu.Link href="/example/descriptionlist">
                                            Decription List
                                        </DropdownMenu.Link>
                                        <DropdownMenu.Link href="/filepond">
                                            Filepond
                                        </DropdownMenu.Link>
                                        <DropdownMenu.Link href="/dropzone">
                                            Dropzone
                                        </DropdownMenu.Link>
                                    </DropdownMenu>
                                    
                                    
                                   
                                    
                                </div>
                                
                            </div>
                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>
          <nav className="flex flex-grow">
            <ul className="flex flex-wrap items-center justify-end flex-grow">
              <li>
              

                <NavLink href="/login" className="flex items-center px-5 py-3 font-medium text-gray-600 transition duration-150 ease-in-out hover:text-gray-900">Masuk</NavLink>
              </li>
              <li>
              
                        <NavLink href="/register"
                    data-aos="flip-up"
                    className="block px-5 py-3 mx-auto font-medium text-yellow-500 transition duration-300 ease-in-out transform border border-yellow-500 rounded my-14 focus:outline-none hover:scale-110"
                >
                    Daftar
                </NavLink>
                
              </li>
            </ul>

          </nav>

        </div>
      </div>
    </header>
  );
}

export default Header;
