import React, { useEffect } from 'react'
import { useDarkMode } from '../components/DarkModeContext';
import { property } from '../assets/all';
import {FaBath,FaShareAlt,FaBed,FaUserCircle,FaPlus,FaMapMarkerAlt,FaVideo, FaCamera} from 'react-icons/fa'
import { MdSpaceDashboard } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css';






const Properties = () => {
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
    <div className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'}`}>
      <section id='properties' className='lg:w-[90%] m-auto lg:px-28 px-6 py-20 w-full flex flex-col justify-center items-start gap-10'>
        <div className='flex flex-col justify-center items-start gap-4'>
          <h1>PROPERTIES</h1>
          <h1 className='text-4xl'> EXPLORE MORE </h1>
        </div>
        {/* property grid starts from here  */}
        <div id='grid-box' data-aos="zoom-in"  className='w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8'> 
        {property.map((item,index) => (<div key={index} className='w-full '> <div id='image-box' className='bg-cover bg-center h-[250px] rounded-xl p-4 flex flex-col justify-between items-end ' style={{backgroundImage: `url(${item.image})`}}>
            <div id='top' className='flex justify-between items-end w-full'> <div><button className='px-3 py-1 bg-red-600 text-white rounded-full text-[13px] hover:bg-white hover:text-black'>Featured</button></div>
              <div className='flex items-centerjustify-between gap-3'> 
                <button className='px-3 py-1 bg-red-600 text-white rounded-full text-[13px] hover:bg-white hover:text-black'>Sales</button>
                <button className='px-3 py-1 bg-red-600 text-white rounded-full text-[13px] hover:bg-white hover:text-black'>Active</button>
              </div>
             </div>
            <div id='bottom' className='flex justify-between items-end w-full'>
              <div className='flex justify-start items-center gap-2'>
                <FaMapMarkerAlt className='size-4 text-white ' />
                <h1 className='text-white'>{item.address}</h1>
              </div>
              <div className='flex justify-center items-center gap-4'>
                <FaVideo className='size-4 text-white ' />
                <FaCamera className='size-4 text-white ' />
              </div>
            </div>
          </div>
          <div className='px-6 py-3 flex flex-col justify-center items-startgap-2 w-full'>
            <h1 className='text-xl text-black font-semibold dark:'>{item.name}</h1>
            <h1 className='text-xl text-black font-semibold dark:'>{item.price}</h1>
            <FaBath className='size-4 text-red-400 ' />

          </div>
           </div>))}
        </div>
      </section>
    </div>
  )
}

export default Properties