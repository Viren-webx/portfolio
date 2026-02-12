
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Mode from './Mode';
import LogoVR from './LogoVR.jpg';




function Navbar() {

     const [menuOpen, setMenuOpen] = useState(false) 

    const navigate = useNavigate();
    const location =useLocation();

    const handleClickHome = () => {
        navigate('/' )
        
        
    }  
    
    

    const handleClickAbout = () => {


        navigate('/about');


        
    }
    const handleClickProject = () => {
        navigate('/project');
    }
    const handleClickContact = () => {
        navigate('/contact');
    }
    const handleClickBlog = () => {
        navigate('/blog');
    }



  return <>
            <header className="bg-white w-full p-2 flex flex-col md:flex-row border-[5px] shadow-sm shadow-gray-500 rounded-md justify-between items-center">
                <div className="flex items-center w-full md:w-auto justify-between">
                    <div className="h-[40px] ml-7 md:ml-8  w-[40px] rounded-full flex justify-center items-center">
                        <img className="h-[40px] w-[40px] rounded-full" src={LogoVR} alt="Logo" />
                        <span className='ml-1 font-bold text-[18px] text-black'>Portfolio</span>
                    </div>
                    {/* Hamburger Icon */}
                    <button
                        className="md:hidden mr-2"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle Menu"
                    >
                        <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>
                       </div>
                {/* Navigation Links */}
                <div className={`flex-col md:flex-row flex w-full md:w-auto justify-center md:space-x-[90px] items-center font-bold text-lg
                    ${menuOpen ? "flex" : "hidden"} md:flex mt-2 md:mt-0`}>
                    <a
                        onClick={handleClickHome}
                        className={`text-gray-800 hover:text-yellow-400 cursor-pointer ${location.pathname === "/" ? "underline text-yellow-400" : ""} my-2 md:my-0`}
                    >
                        Home
                    </a>
                    <a
                        onClick={handleClickAbout}
                        className={`text-gray-800 hover:text-yellow-400 cursor-pointer ${location.pathname === "/about" ? "underline text-yellow-400" : ""} my-2 md:my-0`}
                    >
                        About
                    </a>
                    <a
                        onClick={handleClickBlog}
                        className={`text-gray-800 hover:text-yellow-400 cursor-pointer ${location.pathname === "/blog" ? "underline text-yellow-400" : ""} my-2 md:my-0`}
                    >
                        Blog
                    </a>
                    <a
                        onClick={handleClickProject}
                        className={`text-gray-800 hover:text-yellow-400 cursor-pointer ${location.pathname === "/project" ? "underline text-yellow-400" : ""} my-2 md:my-0`}
                    >
                        Achievement
                    </a>
                       <a
                        onClick={handleClickContact}
                        className={`text-gray-800 hover:text-yellow-400 cursor-pointer ${location.pathname === "/contact" ? "underline text-yellow-400" : ""} my-2 md:my-0`}
                    >
                        Contact
                    </a>
                </div>
                <div className="mt-2 md:mt-0">
                    <Mode />
                </div>
            </header>
        </>
}


export default Navbar;  