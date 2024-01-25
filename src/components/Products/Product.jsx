import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'

const url = 'https://fakestoreapiserver.reactbd.com/products'

const Product = () => {

    const [productData, setProductData] = useState([])

    const fetchData = async () => {
        const { data } = await axios.get(`${url}`)
        setProductData(data);
    }

    useEffect(() => {
        fetchData();

    }, [])


    return (

        <>
            <div className='font-job flex flex-col  justify-center items-center '>

                <div className='p-8 flex flex-col justify-center items-center '>
                    <h1 className='text-4xl font-extrabold' >
                        Shop Everday
                    </h1>
                    <div className='w-20 h-[2px] rounded-full bg-gray-500'>
                    </div>
                </div>

                <div className='p-2 text-center text-sm text-[#949494] w-2/3'>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque eum repudiandae adipisci officiis officia. Tempore eius nisi autem officia nostrum perspiciatis et consectetur, culpa, doloribus libero minima velit quas expedita.</p>
                </div>
            </div>


            <div className='p-4 justify-between items-center border-red-600 w-full mx-auto py-10 grid grid-cols-4 gap-10'>
                {
                    productData.map((item) => (<ProductCard key={item._id} product={item} />))
                }
            </div>
        </>




    )
}

export default Product;