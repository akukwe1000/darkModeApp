import React, {useEffect} from 'react';
import { useDarkMode } from '../components/DarkModeContext';
import programer from "../assets/programmer.jpg";
import './section.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
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
        <div className={`${darkMode ? 'dark bg-black' : 'light bg-white'}`}>
            <section className='h-32 lg:h-48'>

            </section>
            <section id='hero' className='w-[95%] h-[600px] m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-start lg:px-28 px-10 gap-7 z-10  ' style={{ backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${programer})`}}>
                <h1 data-aos='zoom-in' className='text-6xl text-white font-semibold lg:pr-[500px] pr-0   lg:leading-[70px] leading-[60px]'>Find your next home in lagos mariam </h1>
                <p data-aos='zoom-in' className='text-white text-xl lg:pr-[500px] pr-0'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minus dolor nulla magni reiciendis, odit voluptatum nesciunt repellendus ratione sunt.</p>
            </section>
        </div>

        {/* form start from here  */}
        <div className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'} z-10`}>
            <div data-aos="zoom-in" id='form' className={`${darkMode ? 'dark bg-gray-800' : 'light bg-white'}  lg:w-[70%] w-full m-auto grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-6 p-8 rounded-xl -mt-14` }>
                <div className='w-full '>
                    <h1 className='text-black font-semibold dark:text-white'>Location</h1>
                    <input type="text" placeholder='Enter an address, state, city or pincode' className='bg-white p-2 w-full mt-2 border-b-[1px] boder-[#c9c7c1]' />
                </div>

                <div className='w-full '>
                    <h1 className='text-black font-semibold dark:text-white'>Type</h1>
                    <select name="selectOption" id="selectOption" className='bg-white p-2 w-full mt-2     border-b-[1px] boder-[#c9c7c1] text-gray-500 text-xl' >
                        <option value="" disabled selected >Select Property</option>
                        <option value="option1"  >Rentals</option>
                        <option value="option2"  >Sales</option>
                        <option value="option3"  >Commercials</option>
                    </select>
                </div>

                <div className='w-full '>
                    <h1 className='text-black font-semibold dark:text-white'>Category</h1>
                    <select name="selectOption" id="selectOption" className='bg-white p-2 w-full mt-2     border-b-[1px] boder-[#c9c7c1] text-gray-500 text-xl' >
                        <option value="" disabled selected >Select Property</option>
                        <option value="option1"  >Property Category</option>
                        <option value="option2"  >Appartment</option>
                        <option value="option3"  >Duples</option>
                        <option value="option4"  >3Bedroom</option>
                    </select>
                </div>

                <div className="w-full">
                    <button className='bg-red-500 dark:bg-red-700 hover:bg-black dark:hover:bg-white dark:hover:text-black text-lg p-4 w-full text-white font-semibold rounded-xl cursor-pointer transform hover:scale-110 transition-transform duration-300'>Submit</button>
                </div>


            </div>
        </div>

        {/* form ends from here  */}
    </>
  )
}

export default Hero