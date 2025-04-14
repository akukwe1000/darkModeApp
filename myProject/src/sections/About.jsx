import React, { useEffect } from 'react';
import chair from "../assets/lampchair.png";
import { useDarkMode } from '../components/DarkModeContext';
import './section.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import Typewriter from "../components/TypeWriter";


const About = () => {
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
    <section id='about' className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'} w-full m-auto  grid lg:grid-col-2 grid-col-1 justify-center items-center gap-10`}>
        
    <div className='flex justify-center sm:flex-row flex-col gap-6 '>
        <div className='flex sm:justify-start justify-center  '>
            
           <img src={chair} data-aos='zoom-in' alt="" className='rounded-2xl w-[70%]   lg:w-[1000px] lg:h-[600px] '/> 
        </div>

        <div className='flex flex-col justify-center items-center gap-8 sm:px-2 px-4  '>
            <h1 data-aos='zoom-in' className='text-red-500 dark:text-white text-4xl'>Who We Are</h1>
            <h1 data-aos='zoom-in' data-aos-delay='200' className='text-black text-[40px] font-semibold leading-10 dark:text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, nihil!</h1>

            <p data-aos="zoom-in" data-aos-delay="200" className='text-gray-500 text-[20px] font-semibold '> Akukwe favour chudubame a full time missionary currently serving in uyo 
            </p>

            <div className="w-full">
                    <button className='bg-red-500 dark:bg-red-700 hover:bg-black dark:hover:bg-white dark:hover:text-black text-lg p-4  text-white font-semibold rounded-xl cursor-pointer transform hover:scale-110 transition-transform duration-300'>Read More</button>
                </div>
            
           
            
        </div>
    </div>
        
    </section>
  )
}

export default About