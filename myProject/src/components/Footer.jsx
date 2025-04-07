import React, { useEffect } from 'react';
import { useDarkMode } from './DarkModeContext';
import { FaFacebookF,FaInstagram,FaTwitter,FaYoutube,FaBuilding,FaMobile,FaFax,FaArrowUp,FaMoon,FaSun } from 'react-icons/fa';
import {Link} from 'react-scroll'
import { IoMdMail } from 'react-icons/io';
import me from '../assets/me.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';


const Footer = () => {
  useEffect(()=>{
    AOS.init({
        offset:200,
        duration:800,
        easing:'ease-in-sine',
        delay:100,
    });
}, [])

const {darkMode, toggleDarkMode} = useDarkMode();

  return (
    <>
    <footer className={`${darkMode ? 'dark bg-black' : 'light bg-gray-800'} w-full m-auto lg:px-20 px-10 py-20 grid lg:grid-cols-3 grid-cols-1 justify-center items-start lg:gap-20 gap-10`}>
      <div className='flex flex-col justify-center items-start gap-5 '>
        <h1 className='text-white text-2xl font-semibold'>About Us</h1>
        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis laboriosam, magni dolor cum ullam, deserunt ea nulla aliquam qui natus in. Quisquam maxime assumenda odit dolorem tempore temporibus cupiditate distinctio.</p>
        <div id='social-icon' className='flex justify-start items-center gap-4 mt-4'>
          <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform'>
            <FaFacebookF className='size-5'/>
          </div>
          <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform'>
            <FaInstagram className='size-5'/>
          </div>
          <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform'>
            <FaTwitter className='size-5'/>
          </div>
          <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform'>
            <FaYoutube className='size-5'/>
          </div>
        </div>
        <h1 className='text-white'>copyright Real Estate, All Rights Reserved</h1>
      </div>
    </footer>

    {/* slide to top button starts here  */}
      <Link to='hero' spy={true} offset={-100} smooth={true}>
        <div id='icon-box' className='bg-red-700 p-4 rounded-full hover:bg-black cursor-pointer fixed lg:bottom-12 bottom-6 right-6 '>
          <FaArrowUp className='size-6 text-white'/> 
        </div>

      </Link>

      {/* dark mode toggle button section  */}
      <div>
        <button onClick={toggleDarkMode} className='flex items-center p-4 rounded-full bg-orange-500 fixed lg:top-52 top-48 right-6'>
          {darkMode ? <FaMoon size={25} className='text-black'/> : <FaSun size={25} className='text-black'/>}
        </button>
      </div>

    </>
  
  )
}

export default Footer