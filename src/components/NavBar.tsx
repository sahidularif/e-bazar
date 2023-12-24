import React, { useState } from 'react';
import OffCanvasCart from './OffCanvasCart';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const handleCartToggle = () => {
        setIsCartOpen(!isCartOpen);
    };

    const closeCart = () => {
        setIsCartOpen(false);
    };
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="h-12 relative px-16 py-8 text-center flex flex-col justify-center items-center">
            <div className="container mx-auto flex justify-between items-center">
                <div className='flex flex-row items-center justify-between gap-5'>
                    {/* Logo or Branding */}
                    <a href="#" className="text-black text-3xl font-semibold p-0 m-0">
                        E-Bazar
                    </a>

                    {/* Responsive Menu */}
                    <div
                        className="lg:flex hidden lg:items-center lg:w-auto"
                    >
                        <ul className="text-lg lg:flex-grow">
                            <li
                                className="text-black hover:text-gray-300 px-4 py-2 block lg:inline-block"
                            >
                                Home
                            </li>
                            <li
                                className="text-black hover:text-gray-300 px-4 py-2 block lg:inline-block"
                            >
                                Products
                            </li>
                            <li
                                className="text-black hover:text-gray-300 px-4 py-2 block lg:inline-block"
                            >
                                About
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-row items-center gap-5'>
                    <div className='flex flex-row items-center justify-end gap-5 w-52'>
                        
                        {/* Button to toggle off-canvas cart */}
                        <button
                            onClick={handleCartToggle}
                            className="text-black focus:outline-none"
                        >
                            <i className='bx bxs-cart text-3xl'></i>
                        </button>
                        <button className=' bg-blue-500 p-2 lg:block hidden rounded-md text-white'>Get Started</button>

                    </div>
                    <button
                        onClick={toggleMenu}
                        className="lg:hidden text-white focus:outline-none"
                    >
                        <svg
                            className="w-8 h-8 text-black"
                            fill="black"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div
                className={`${isOpen ? 'block' : 'hidden'
                    } lg:hidden bg-black justify-center w-[100%] h-[40vh] flex lg:items-center lg:w-auto absolute top-12 left-0 z-50`}
            >
                <div className="text-lg lg:flex-grow">
                    <a
                        href="#"
                        className="text-white hover:text-gray-300 px-4 py-2 block lg:inline-block"
                    >
                        Home
                    </a>
                    <a
                        href="#"
                        className="text-white hover:text-gray-300 px-4 py-2 block lg:inline-block"
                    >
                        Products
                    </a>
                    <a
                        href="#"
                        className="text-white hover:text-gray-300 px-4 py-2 block lg:inline-block"
                    >
                        Get Started
                    </a>
                </div>
            </div>
            <OffCanvasCart isOpen={isCartOpen} onClose={closeCart} />
        </nav>
    );
};

export default Navbar