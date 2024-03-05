import React, { useState, useContext } from 'react'
import MyContext from '../../context/data/MyContext';
import { Link } from 'react-router-dom'
import { BiLogoShopify } from "react-icons/bi";
import { MdLightMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { FaOpencart } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import Women from '../category/Women.jsx';
// import { ToastContainer, toast } from 'react-toastify';

const Header = () => {
  // const [light, setLight] = useState(false)
  const context = useContext(MyContext);
  const { mode, toggleMode } = context;
  
  const productData = useSelector((state)=> state.bazaar.productData);
  const userInfo = useSelector((state)=> state.bazaar.userInfo);
  
 

  


  return (
    <div className=' border-b flex px-5 font-job justify-between items-center p-2  ' >

      <div className=' hidden   md:flex justify-between items-center '>
        <ul className=' pt-3 p-2 gap-5 justify-between items-center flex  text-sm font-semibold '>
          <li className=' hover:text-orange-500 hover:underline underline-offset-2 decoration-[1px] duration-300'>

            <Link to='/Men'>MEN</Link>
          </li>
          <li className=' hover:text-orange-500 hover:underline underline-offset-2 decoration-[1px] duration-300'>

            <Link to='/Women'>WOMEN</Link>
          </li>
          <li className=' hover:text-orange-500 hover:underline underline-offset-2 decoration-[1px] duration-300'>

            <Link to='/NewArrivel'>NEW ARRIVELS</Link>
          </li>


        </ul>
        
      </div>



      <div className=' hover:text-orange-500 hover:underline underline-offset-2 decoration-[1px] duration-300' >
        <Link to='/'>
        <BiLogoShopify className='text-5xl ' /></Link>
      </div>

      <div className=' w-60 flex px-3  gap-5 justify-end items-center  cursor-pointer text-xl   ' >

        <ul className='pt-3 p-2 flex items-center justify-center  text-sm font-semibold '>
          <li className=' hover:text-orange-500 hover:underline underline-offset-2 decoration-[1px] duration-300' >

            <Link to='/Login'>
              {
                userInfo? <img className='w-8 h-8 rounded-full' src={userInfo.image} alt="" /> : "Login"
              }
            </Link>
          </li>
        </ul>

        <div className=' hover:text-orange-500 hover:underline underline-offset-2 decoration-[1px] duration-300' onClick={toggleMode}>
          {
            mode ? <MdLightMode /> : <MdOutlineLightMode />
          }
        </div>
        <div className='relative h-8 w-8'>
          <div className='absolute top-1 hover:text-orange-500 hover:underline underline-offset-2 decoration-[1px] duration-300'>
            <Link to='/Cart'><FaOpencart className='text-2xl  ' /></Link>


          </div>
          <div className='absolute top-0 text-xs right-0 '>
            {productData.length}
          </div>

        </div>
      </div >

    </div>
  )
}

export default Header












