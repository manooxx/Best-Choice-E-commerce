import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaHome } from "react-icons/fa"
import { ImGithub } from "react-icons/im";
import { BiLogoShopify } from "react-icons/bi";
import { MdLocationOn } from 'react-icons/md';
import { BsPersonFill, BsPaypal } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='py-20 font-job text-[#949494]'>
      <div className='  max-w-screen-xl mx-auto grid   grid-cols-1 md:grid-cols-4'>

        <div className=' items-center md:px-10 flex flex-col justify-center gap-4' >
          <BiLogoShopify className='w-32 text-5xl ' />
          <p className='text-sm tracking-wide'>© ReactBD.com</p>
          <div className='flex flex-cols gap-2'>
            <ImGithub className='hover:text-gray-500 duration-300 cursor-pointer' />
            <FaFacebookF className='hover:text-gray-500 duration-300 cursor-pointer' />
            <FaInstagram className='hover:text-gray-500 duration-300 cursor-pointer' />
            <FaTwitter className='hover:text-gray-500 duration-300 cursor-pointer' />
            <FaYoutube className='hover:text-gray-500 duration-300 cursor-pointer' />
          </div>
        </div>
        <div>
          <h2 className='text-lg md:text-2xl font-semibold mb-4'>Locate us</h2>
          <div className='flex flex-col md:gap-2 text-xs '>
            <p>MBD, aage mt pd</p>
            <p>Mobile: 9892 1 min me kyu du?</p>
            <p>Phone: nahh...!</p>
            <p>e-mail: manoxx07@gmail.com</p>
          </div>
        </div>

        <div>
          <h2 className='text-lg md:text-2xl font-semibold mb-4'>Profile</h2>
          <div className='flex text-xs md:text-md flex-col md:gap-2'>

            <p className='flex items-center gap-3 hover:text-gray-400  duration-300 cursor-pointer'>
              <span>
                <BsPersonFill />
              </span>{' '} my profile
            </p>
            <p className='flex items-center gap-3 hover:text-gray-400  duration-300 cursor-pointer'>
              <span>
                <MdLocationOn />
              </span>{' '} order tracking
            </p>
            <p className='flex items-center gap-3 hover:text-gray-400  duration-300 cursor-pointer'>
              <span>
                <BsPaypal />
              </span>{' '} checkout
            </p>
          </div>

        </div>

        <div className='flex flex-col justify-center pr-3'>
          <input className='bg-transparent border-2 px-4 py-2 text-sm outline-none' type="text" placeholder='e-mail' />
          <button className='text-sm border-2 border-t-0 hover:bg-gray-900 duration-300 '>
            Join
          </button>
        </div>

      </div>

    </div>
  )
}

export default Footer
