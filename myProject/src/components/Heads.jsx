import React, { useState } from 'react';
import logo from '../assets/blackCat.png';
import {Link} from 'react-scroll';
import { useDarkMode } from './DarkModeContext';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';
import './heads.css';

const Menu = () =>(
    <>
         <Link className='cursor-pointer' to='hero' spy={true} offset={-100} smooth={true}><h1>Home</h1></Link>
            <Link className='cursor-pointer' to='about' spy={true} offset={-100} smooth={true}><h1>About</h1></Link>
            <Link className='cursor-pointer' to='properties' spy={true} offset={-100} smooth={true}><h1>Properties</h1></Link>
            <Link className='cursor-pointer' to='contact' spy={true} offset={-100} smooth={true}><h1>contact</h1></Link>
    </>
)

const Heads = () => {
    const {darkMode, toggleDarkMode} = useDarkMode();
    const [toggleMenu, setToggleMenu] = useState(false);



  return ( 
    <nav id='head' className={`${darkMode ? 'dark bg-gray-700' : 'light bg-white'} flex justify-between lg:px-10 px-5 py-5 mb-8 fixed w-full  top-0 left-0 z-20`}>
        <div>
            <img src={logo} alt="" className='lg:w-[80px] lg:h-[80px] w-[50px] h-[50px] rounded-full' />
        </div>
        {/* <p className='text-[22px] font-semibold flex items-center'>FlexHome</p> */}
        <p className={`${darkMode ? 'dark text-white' : 'light text-black'} text-[22px] font-semibold flex items-center`}>FlexHome</p>
        <div className=' text-black dark:text-white hidden lg:flex items-center gap-5'>
            <Menu/>
        </div>
        <div id='menuBar' className='lg:hidden flex items-center'>
            {toggleMenu ? <RiCloseLine size={27}  onClick={() => setToggleMenu(false)}/> : <RiMenu3Line size={27}  onClick={() => setToggleMenu(true)}/>}
            {toggleMenu && (
                <div className='scale-up-center absolute top-16 right-0  h-[500px] w-1/2 text-[24px] p-5 bg-blue-600'>
                    <Menu/>
                </div>
            )}
        </div>
    </nav>
  )
}

export default Heads