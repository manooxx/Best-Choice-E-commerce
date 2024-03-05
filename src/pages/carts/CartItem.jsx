import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { MdOutlineClose } from 'react-icons/md'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import { decrementQuantity, deleteItem, increamentQuantity, resetCard } from '../../redux/bazaazSlice';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const CartItem = () => {
    const dispatch = useDispatch()
    const [isCartEmpty, setIsCartEmpty] = useState(false)

    const productData = useSelector((state) => state.bazaar.productData);

    const handleResetCart = () => {
        dispatch(resetCard());
        setIsCartEmpty(true);
        toast.error('Your Cart is Empty!')
    }

    return (
        <div className=' md:w-2/3 p-6 md:px-10 font-job '>
            <div className='w-full'>
                <h2 className='text-2xl'>
                    shopping Cart
                </h2>
            </div>
            <div className=' '>
                {productData.map((item) => (
                    <div key={item._id} className=' flex flex-col md:flex-row border items-center justify-between gap-6 mt-6'>
                        <div className='flex items-center p-2 gap-2'>
                            <MdOutlineClose onClick={() => dispatch(deleteItem(item._id)) & toast.error(`${item.title} is removed`)} className='text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300' />
                            <img className='w-32 h-32 object-cover' src={item.image} alt="" />
                        </div>
                        <h2 className='w-52'>{item.title}</h2>
                        <p className='w-10'>${item.price}</p>
                        <div className='w-52 flex items-center justify-between text-gray-5 00 gap-4 border p-3'>
                            <p className='text-sm'>Quantity</p>
                            <div className='flex items-center gap-4 text-sm font-semibold'>
                                <button onClick={() => dispatch(decrementQuantity({
                                    _id: item._id,
                                    title: item.title,
                                    image: item.iamgee,
                                    price: item.price,
                                    quantity: 1,
                                    description: item.description
                                }))} className='border h-5 text-lg flex items-center justify-center px-2 hover:bg-orange-700 hover:text-white cursor-pointer duration-500 active:bg-black'>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => dispatch(increamentQuantity({
                                    _id: item._id,
                                    title: item.title,
                                    image: item.iamgee,
                                    price: item.price,
                                    quantity: 1,
                                    description: item.description
                                }))} className='border h-5 text-lg flex items-center justify-center px-2 hover:bg-orange-700 hover:text-white cursor-pointer duration-500 active:bg-black'>+</button>
                            </div>
                        </div>
                        <p className='w-10 md:w-14'> ${item.quantity * item.price}</p>
                    </div>

                ))

                }
            </div>
           
           <div>
            {isCartEmpty ? (<p className='py-10'>Oops don't have anything in cart...</p>):  <button onClick={handleResetCart } className='bg-red-500 text-white mt-8 ml-7 py-1 px-6 hover:bg-red-800 duration-500'>Reset Cart</button>}
            </div>
            <Link to='/'>
                <button className='mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-gray-500 duration-500'>
                    <span>
                        <HiOutlineArrowLeft />

                    </span>
                    go shopping
                </button>
            </Link>
            <ToastContainer
                position='top-left'
                autoClose={2000}
                hideProgressBar={false}
                newesonTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='dark'
            />

        </div>
    )
}

export default CartItem
