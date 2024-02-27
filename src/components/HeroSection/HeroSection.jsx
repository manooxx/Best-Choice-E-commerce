import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
    return (
        <div className='font-job flex flex-col justify-center items-center w-full min-h-screen text-white gap-20 '>
            <div className=' flex flex-col justify-center items-center gap-1'>
                <h1 className='text-xl md:text-5xl font-extrabold'>
                 Designed for sun.
                </h1>
                <p className='text-sm  p-3'>
                    Shop Jackets made with breezy eucalyptus tree fiber.
                </p>
            </div>

            <div className=' flex justify-center items-center gap-5 '>
                <Link to='/Men'>
                    <button className=' rounded-sm w-24 h-6 md:w-36 md:h-10 bg-white text-black text-xs md:text-sm font-bold'>SHOP MEN</button>
                </Link>
                <Link to='Women'>
                    <button className=' rounded-sm  w-24 h-6 md:w-36 md:h-10 bg-white text-black text-xs md:text-sm font-bold'>SHOP WOMEN</button>
                </Link>
            </div>
        </div>
    )
}

export default HeroSection
