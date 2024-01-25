import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { MdOutlineStar } from 'react-icons/md'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/bazaazSlice';
import { ToastContainer, toast } from 'react-toastify';

const ProductModal = () => {
    const [details, setDetails] = useState({});
    const dispatch = useDispatch();
    const location = useLocation()

    const [value, setValue] = useState(1)

    useEffect(() => {
        setDetails(location.state.item)
    })

    return (
        <div className='px-6 font-job'>

            <div className='max-w-screen-xl  mx-auto my-10 flex gap-10 border-4 border-red-700'>

                <div className=' w-2/5 relative border-4 border-green-700'>
                    <img className='w-full h-[550px] object-cover' src={details.image} alt="" />
                    <div className='absolute top-4 right-0 '>
                        {details.isNew && (
                            <p className='bg-black text-white font-bold px-4 py-1 text-sm'>Sale</p>
                        )}
                    </div>
                </div>
                <div className='w-3/5 flex flex-col justify-center gap-8'>

                    <div className=''>
                        <h2 className='text-4xl font-semibold'>{details.title}</h2>
                    </div>
                    <div className='flex items-center gap-2 transform group-hover:translate-x-24 transition-transform duration-500'>
                        <p className='line-through text-gray-500 text-sm'>${details.oldPrice}</p>
                        <p className='font-semibold text-lg'>${details.price}</p>
                    </div>

                    <div className='flex items-center gap-2  '>
                        <div className='flex '>
                            <MdOutlineStar />
                            <MdOutlineStar />
                            <MdOutlineStar />
                            <MdOutlineStar />
                            <MdOutlineStar />
                        </div>
                        <p className='text-xs pt-[4px] text-gray-500 '>(1 Custimer review)</p>
                    </div>
                    <p className='text-sm text-gray-500'>{details.description}</p>

                    <div className='flex gap-4'>

                        <div className='w-52 flex items-center justify-between text-gray-5 00 gap-4 border p-3'>
                            <p className='text-sm'>Quantity</p>
                            <div className='flex items-center gap-4 text-sm font-semibold'>
                                <button onClick={()=>setValue(value===1? value=1: value - 1)} className='border h-5 text-lg flex items-center justify-center px-2 hover:bg-orange-700 hover:text-white cursor-pointer duration-500 active:bg-black'>-</button>
                                <span>{value}</span>
                                <button onClick={()=>setValue(value+1)} className='border h-5 text-lg flex items-center justify-center px-2 hover:bg-orange-700 hover:text-white cursor-pointer duration-500 active:bg-black'>+</button>
                            </div>
                        </div>

                        <div>
                            <button onClick={()=>dispatch(addToCart({
                            _id: details._id,
                            title: details.title,
                            image: details.image,
                            price: details.price,
                            quantity: value,
                            description: details.description,
                        }))
                        & toast.success(`${details.title} is added`)} className='bg-black text-white py-3 px-6 active:bg-gray-800 font-semibold hover:text-orange-500 duration-500 hover:underline'>add to cart</button>
                        </div>
                        

                    </div>
                    <p className='text-gray-500'>Category: <span className='font-medium capitalize'> {details.category}</span> </p>

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

export default ProductModal
