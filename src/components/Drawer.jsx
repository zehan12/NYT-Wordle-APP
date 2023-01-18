import React, { useState } from 'react';
import { FcHome, FcContacts, FcAbout } from 'react-icons/fc';
import { ImCross } from 'react-icons/im';

const menuItems = [
    {
        icon: FcHome,
        label: 'Home',
        route: '/home',
    },
    {
        icon: FcAbout,
        label: 'About',
        route: '/about',
    },
    {
        icon: FcContacts,
        label: 'Contact',
        route: '/contact',
    },
];


const Drawer = ({

    //  handleDrawerClose 
}) => {
    return (
        <div>
            <div className="fixed z-40 h-screen p-4 overflow-y-auto bg-black w-80 left-0 top-[72px] ">
                <h5 className="text-base font-mono font-semibold text-gray-500 uppercase dark:text-gray-400">
                    Menu
                </h5>
                <button
                    // onClick={handleDrawerClose} 
                    type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                    <ImCross />
                </button>
                <div className="py-4 overflow-y-auto">
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className='flex font-mono items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'>
                                <FcHome />
                                <span className="flex-1 ml-3 whitespace-nowrap">Home</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );


};

export default Drawer;