import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
    return (
        <div className='font-job flex flex-col justify-center items-center w-full min-h-screen text-white gap-20 '>
            <div className=' flex flex-col justify-center items-center gap-1'>
                <h1 className='text-5xl font-extrabold'>
                    Made from Trees. Designed for sun.
                </h1>
                <p>
                    Shop Jackets made with light & breezy eucalyptus tree fiber.
                </p>
            </div>

            <div className=' flex justify-center items-center gap-5 '>
                <Link to='/Men'>
                    <button className=' rounded-sm  w-36 h-10 bg-white text-black text-sm font-bold'>SHOP MEN</button>
                </Link>
                <Link to='Women'>
                    <button className=' rounded-sm  w-36 h-10 bg-white text-black text-sm font-bold'>SHOP WOMEN</button>
                </Link>
            </div>
        </div>
    )
}

export default HeroSection
