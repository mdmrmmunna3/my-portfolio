import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='sticky top-0 z-10 w-full'
            style={{
                backgroundColor: '#181123',

            }}
        >

            <div className="navbar text-white homepart lg:p-8 ">
                <div className="lg:navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow homepart rounded-box w-52">
                        <li className='font-bold'><Link to="/home">Home</Link></li>
                            <li className='font-bold' tabIndex={0}>
                                <Link to="/aboutme">About</Link>
                            </li>
                            <li className='font-bold'><Link to="/projects">Projects</Link></li>
                            <li className='font-bold'><Link to="/skills">Skills</Link></li>
                            <li className='font-bold'><Link to='/contact'>Contact</Link></li>
                            <li className='font-bold'><Link to='/blogs'>Blogs</Link></li>
                        </ul>
                    </div>
                    <Link to='/' className='nameTitle text-xl lg:text-3xl ml-1'>Md <span className='text-violet-500'>Mustafijur</span> Rahman <span className='text-violet-500'>Munna</span></Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    <li className='font-bold'><Link to="/home">Home</Link></li>
                        <li className='font-bold' tabIndex={0}>
                            <Link to="/aboutme">About</Link>
                        </li>
                        <li className='font-bold'><Link to="/projects">Projects</Link></li>
                        <li className='font-bold'><Link to="/skills">Skills</Link></li>
                        <li className='font-bold'><Link to='/contact'>Contact</Link></li>
                        <li className='font-bold'><Link to='/blogs'>Blogs</Link></li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;