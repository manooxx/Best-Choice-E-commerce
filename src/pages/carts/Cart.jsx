import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import img from '../../assets/cart.jpg'
import CartItem from './CartItem';
import { ToastContainer, toast } from 'react-toastify';
import StripeCheckout from 'react-stripe-checkout';

const Cart = () => {
  const userInfo = useSelector((state) => state.bazaar.userInfo);
  const productData = useSelector((state) => state.bazaar.productData);
  const [totalAmt, setTotalAmt] = useState('')
  const [payNow, setPayNow] = useState(false)

  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price
    })
    setTotalAmt(price.toFixed(2))

  }, [productData])

  const handleCheckout = () => {
    if (userInfo) {
      setPayNow(true);
    }
    else {
      toast.error('Please sign in to Checkout')
    }
  }
  let checkoutPayment = (totalAmt * 1.1).toFixed(2);
  return (

    <div className='font-job '>
      <img className='object-cover h-96 w-full' src={img} alt="" />
      <div className='max-w-screen-xl mx-auto py-20 flex p-4 border'>


        <CartItem />



        <div className='w-1/3  py-6 px-4 border'>
          <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6'>
            <h2 className='text-2xl font-medium'>
              cart totals
            </h2>
            <p className='flex items-center gap-4 text-base'>
              Subtotal{" "}
              <span className='font-bold text-lg'>
                $ {totalAmt}
              </span>
            </p>
            <p className='flex items-start gap-4 '>
              Shipping{" "}
              <span >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </span>
            </p>
          </div>
          <p className='font-semibold flex justify-between mt-6'>

            <span>Total <span className='text-sm text-gray-600'>(+tax)</span> </span>  <span className='text-xl font-bold'>$ {checkoutPayment}</span>
          </p>
          <button onClick={handleCheckout} className='bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-500 hover:text-orange-500'>proceed to checkout  </button>
          {
            payNow && <div className='w-full mt-6 flex items-center justify-center'>
              <StripeCheckout
                stripeKey='pk_test_51BTUDGJAJfZb9HEBwDg86TN1KNprHjkfipXmEDMb0gSCassK5T3ZfxsAbcgKVmAIXF7oZ6ItlZZbXO6idTHE67IM007EwQ4uN3'
                name='Best Choice online shopping'
                amount={checkoutPayment * 100}
                label='pay to cart'
                description={`Your Payment is $${checkoutPayment}`}
                // token={payment}
                email={userInfo.email}
              />
            </div>
          }
        </div>

      </div>
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

export default Cart
