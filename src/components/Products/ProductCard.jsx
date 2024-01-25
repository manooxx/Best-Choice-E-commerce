import React from 'react'
import { useNavigate } from 'react-router-dom';
import {BsArrowRight} from 'react-icons/bs'
import ProductModal from './ProductModal';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/bazaazSlice';
import { ToastContainer, toast } from 'react-toastify';

const ProductCard = ({ product }) => {


    const dispatch = useDispatch();
    const navigate = useNavigate();


// converting title into id in lowerCase

    const id = product.title;
    const idString=(id)=>{
        return String(id).toLowerCase().split(" ").join("");
    };
    const rootID= idString(id)
  

    const handleDetails =()=>{

        navigate(`/ProductModal/${rootID}`, {
            state:{
                item: product,
            },
        })
       
    }
    return (
        <div  className='group font-job border-[1px] relative'>

            <div onClick={handleDetails} className='w-full h-80 cursor-pointer overflow-hidden'>
                <img className='w-full h-full object-cover group-hover:scale-110 duration-500' src={product.image} alt="" />
            </div>
            <div className='w-full  px-2 py-4'>
                <div className='flex justify-between items-center '>
                    <div className=''>
                        <h2 className='font-semibold text-[13px]'>{product.title.substring(0,15)}</h2>
                    </div>
                    <div className='flex justify-end   gap-2 relative overflow-hidden w-28 '>
                        <div className='flex gap-2 transform group-hover:translate-x-24 transition-transform duration-500'>
                            <p className='line-through text-gray-500'>${product.oldPrice}</p>
                            <p className='font-semibold'>${product.price}</p>
                        </div>
                        <p onClick={()=>dispatch(addToCart({
                            _id: product._id,
                            title: product.title,
                            image: product.image,
                            price: product.price,
                            quantity: 1,
                            description: product.description,
                        })
                        ) & toast.success(`${product.title} is added`)
                    }
                         className='absolute z-20 w-[100px] text-gray-400  hover:text-gray-500 flex items-center gap-1 top-0 transform -translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-500 text-sm '>add to cart <span><BsArrowRight/></span></p>
                    </div>
                </div>

                <div className='flex justify-between'>
                    <p>{product.category}</p>
                    <p>{product.rating}★</p>
                </div>
                <div className='absolute top-4 right-0 '>
                    {product.isNew &&( 
                        <p className='bg-black text-white font-semibold px-4 py-1 text-sm'>Sale</p>
                        )}
                </div>

            </div>
            <ToastContainer
      position = 'top-left'
      autoClose={2000}
      hideProgressBar={false}
      newesonTop ={false}
      closeOnClick
      rtl = {false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme ='dark'
      />
        </div>
    )
}

export default ProductCard
