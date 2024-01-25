import React, { useEffect, useState } from 'react'
import img from '../../assets/womens.jpg'
import axios from 'axios'
import ProductCard from '../Products/ProductCard'

const url = 'https://fakestoreapiserver.reactbd.com/products'

const Women = () => {
    const [womenData, setWomenData] = useState([])



    const fetchData = async ()=>{
        const {data} = await axios.get(`${url}`)
   
        const womensItems = data.filter(item => item.category === 'women')
        
        setWomenData(womensItems);
    }

    useEffect(()=>{
        fetchData();
    },[])
    
    

    return (
        <div className='font-job border'>
            <div className='flex justify-center items-center w-full min-h-screen bg-cover  bg-no-repeat bg-fixed' style={{ backgroundImage: `url(${img})` }}>
                <h1 className='text-white text-6xl font-bold'>
                    For Womens...
                </h1>
            </div>
            <div className='p-4 justify-between items-center border-red-600 w-full mx-auto py-10 grid grid-cols-4 gap-10'>
                {
                    womenData.map((item) => (<ProductCard key={item._id} product={item} />))
                }
            </div>

        </div>
    )
}

export default Women
