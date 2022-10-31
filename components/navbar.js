import Image from "next/image";
import Link from "next/link";
import NavLogo from '../public/assets/img/zlz tech.png';
import React, { useState, useEffect } from 'react';
const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState('#ecf0f3');
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
        // <div className='flex justify-between bg-[#f1f7f6]'>
        //     <div className="logo m-5">
        //         <Image
        //             src={NavLogo}
        //             alt='/'
        //             width='45'
        //             height='45'
        //             className='cursor-pointer'
        //         />
        //     </div>
        //     <div className='nav self-center'>
        //         <ul className="flex list-none m-3">
        //             <li className="text-sm uppercase hover:border-b ml-5">
        //                 <Link href="/">
        //                     Home
        //                 </Link>
        //             </li>
        //             <li className="text-sm uppercase hover:border-b ml-5">
        //                 <Link href="/about">
        //                     About
        //                 </Link>
        //             </li>
        //         </ul>
        //     </div>
        <>
            <div
                style={{ backgroundColor: `${navBg}` }}
                className={
                    shadow
                        ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
                        : 'fixed w-full h-20 z-[100]'
                }
            >
                <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                    <Link href='/'>
                        <Image
                            src={NavLogo}
                            alt='/'
                            width='50'
                            height='50'
                            className='cursor-pointer'
                        />
                    </Link>
                    <div>
                        <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>
                                <Link href='/'>Home</Link>
                            </li>
                            <li className='ml-10 text-sm uppercase hover:border-b'>
                                <Link href='/about'>About</Link>
                            </li>
                            <li className='ml-10 text-sm uppercase hover:border-b'>
                                <Link href='/#skills'>Skills</Link>
                            </li>
                            <li className='ml-10 text-sm uppercase hover:border-b'>
                                <Link href='/#projects'>Projects</Link>
                            </li>
                            <li className='ml-10 text-sm uppercase hover:border-b'>
                                <Link href='/resume'>Resume</Link>
                            </li>
                            <li className='ml-10 text-sm uppercase hover:border-b'>
                                <Link href='/#contact'>Contact</Link>
                            </li>
                        </ul>
                        {/* Hamburger Icon */}
                        <div
                            style={{ color: `${linkColor}` }}
                            onClick={handleNav}
                            className='md:hidden'
                        >
                            OKey
                        </div>
                    </div>
                </div>
                {/* Mobile Menu */}
                {/* Overlay */}
                <div
                    className={
                        nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
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
                                    Oke
                                </div>
                            </div>
                            <div className='border-b border-gray-300 my-4'>
                                <p className='w-[85%] md:w-[90%] py-4'>
                                    Let&#39;s build something legendary together
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
                                <Link href='/#about'>
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
                            <div className='pt-40'>
                                <p className='uppercase tracking-widest text-[#5651e5]'>
                                    Let&#39;s Connect
                                </p>
                                <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                    <Link
                                        href='https://www.linkedin.com/in/clint-briley-50056920a/'
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                            Oke2
                                        </div>
                                    </Link>
                                    <Link
                                        href='https://github.com/fireclint'
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                            Oke3
                                        </div>
                                    </Link>
                                    <Link href='/#contact'>
                                        <div
                                            onClick={() => setNav(!nav)}
                                            className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                                        >
                                            Oke4
                                        </div>
                                    </Link>
                                    <Link href='/resume'>
                                        <div
                                            onClick={() => setNav(!nav)}
                                            className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                                        >
                                            Oke5
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;