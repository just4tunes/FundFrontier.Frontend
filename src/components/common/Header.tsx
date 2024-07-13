import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mantine/core';
import { FiMenu, FiX } from 'react-icons/fi';

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleOutsideClick = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        if (menuOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
        } else {
            document.removeEventListener('mousedown', handleOutsideClick);
        }
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [menuOpen]);

    return (
        <>
            <nav className='custom-bg-blue max-h-screen py-3 items-center rounded-t-xl relative z-20'>
                <div className='auto-container flex justify-between items-center'>
                    <Link to="/" className='flex-none w-10'>
                        <h1 className='text-white text-3xl font-bold'>BitWealth</h1>
                    </Link>

                    <div className="hidden md:flex space-x-4 items-center">
                        <Link to="/" className="hover:text-white text-gray-300 z-20 relative">
                            Home
                        </Link>
                        <a href="/#markets" className="hover:text-white text-gray-300 z-20 relative">
                            Markets
                        </a>
                        <a href="/#whychooseus" className="hover:text-white text-gray-300 z-20 relative">
                            About Us
                        </a>
                        <a href="/#plans" className="hover:text-white text-gray-300 z-20 relative">
                            Plans
                        </a>
                        <Link to="/auth/register" className='z-20 relative'>
                            <Button variant='light' color='rgba(255, 255, 255, 0.2)' c={'white'} size='compact-xl'>Register</Button>
                        </Link>
                    </div>

                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-white'>
                            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    ref={menuRef}
                    className={`fixed top-0 left-0 w-[250px] h-full bg-blue-700 p-4 transition-transform duration-300 ease-in-out transform ${
                        menuOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
                    style={{ zIndex: 1000 }}
                >
                    <Link to="/" className="block text-white py-2" onClick={toggleMenu}>
                        Home
                    </Link>
                    <a href="/#markets" className="block text-white py-2" onClick={toggleMenu}>
                        Markets
                    </a>
                    <a href="/#whychooseus" className="block text-white py-2" onClick={toggleMenu}>
                        About us
                    </a>
                    <a href="/#plans" className="block text-white py-2" onClick={toggleMenu}>
                        Plans
                    </a>
                    <Link to="/auth/register" className="block py-2" onClick={toggleMenu}>
                        <Button variant='light' color='rgba(255, 255, 255, 0.2)' c={'white'} size='compact-xl' fullWidth>Register</Button>
                    </Link>
                </div>
            </nav>
        </>
    );
}

export default Header;
