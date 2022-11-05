import Image from "next/image";
import Link from "next/link";
import NavLogo from '../public/assets/img/zlz tech.png';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState('#f1f7f6');
    const [linkColor, setLinkColor] = useState('#1f2937');
    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener('scroll', handleShadow);
    }, []);
    return (
        <>
            <div
                style={{ backgroundColor: `${navBg}` }}
                className={
                    shadow
                        ? 'fixed w-full h-12 shadow-xl z-[100] ease-in-out duration-300'
                        : 'fixed w-full h-12 z-[100]'
                }
            >
                <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                    <Link href='/'>
                        <Image
                            src={NavLogo}
                            alt='/'
                            width='37'
                            height='37'
                            className='ml-2 rounded-full border-double border-2 border-slate-500 cursor-pointer'
                        />
                    </Link>
                    <div>
                        <ul style={{ color: `${linkColor}` }} className='hidden laptop:flex'>
                            <li className='ml-7 text-sm uppercase'>
                                <Link href='/' className='rounded-full bg-gray-700 text-slate-50 pl-2 pr-2 pt-1 pb-1'>Home</Link>
                            </li>
                            <li className='ml-7 text-sm uppercase'>
                                <Link href='/about' className='rounded-full pl-2 pr-2 pt-1 pb-1 hover:bg-slate-300 group-hover:transition-opacity duration-700'>About</Link>
                            </li>
                            <li className='ml-7 text-sm uppercase'>
                                <Link href='/#skills' className='rounded-full pl-2 pr-2 pt-1 pb-1 hover:bg-slate-300 group-hover:transition-opacity duration-700' >Skills</Link>
                            </li>
                            <li className='ml-7 text-sm uppercase'>
                                <Link href='/#projects' className='rounded-full pl-2 pr-2 pt-1 pb-1 hover:bg-slate-300 group-hover:transition-opacity duration-700'>Projects</Link>
                            </li>
                            <li className='ml-7 text-sm uppercase'>
                                <Link href='/resume' className='rounded-full pl-2 pr-2 pt-1 pb-1 hover:bg-slate-300 group-hover:transition-opacity duration-700'>Resume</Link>
                            </li>
                            <li className='ml-7 text-sm uppercase'>
                                <Link href='/#contact' className='rounded-full pl-2 pr-2 pt-1 pb-1 hover:bg-slate-300 group-hover:transition-opacity duration-700'>Contact</Link>
                            </li>
                        </ul>
                        {/* Hamburger Icon */}
                        <div
                            style={{ color: `${linkColor}` }}
                            onClick={handleNav}
                            className='laptop:hidden'
                        >
                            <AiOutlineMenu size={25} />
                        </div>
                    </div>
                </div>
                {/* Mobile Menu */}
                {/* Overlay */}
                <div
                    className={
                        nav ? 'laptop:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
                    }
                >
                    {/* Side Drawer Menu */}
                    <div
                        className={
                            nav
                                ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                                : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                        }
                    >
                        <div>
                            <div className='flex w-full items-center justify-between'>
                                <Link href='/'>
                                    <Image
                                        src={NavLogo}
                                        width='87'
                                        height='35'
                                        alt='/'
                                    />
                                </Link>
                                <div
                                    onClick={handleNav}
                                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
                                >
                                    <AiOutlineClose />
                                </div>
                            </div>
                            <div className='border-b border-gray-300 my-4'>
                                <p className='w-[85%] md:w-[90%] py-4'>
                                    Zalira Official Website
                                </p>
                            </div>
                        </div>
                        <div className='py-4 flex flex-col'>
                            <ul className='uppercase'>
                                <Link href='/'>
                                    <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                        Home
                                    </li>
                                </Link>
                                <Link href='/about'>
                                    <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                        About
                                    </li>
                                </Link>
                                <Link href='/#skills'>
                                    <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                        Skills
                                    </li>
                                </Link>
                                <Link href='/#projects'>
                                    <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                        Projects
                                    </li>
                                </Link>
                                <Link href='/resume'>
                                    <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                        Resume
                                    </li>
                                </Link>
                                <Link href='/#contact'>
                                    <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                        Contact
                                    </li>
                                </Link>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;