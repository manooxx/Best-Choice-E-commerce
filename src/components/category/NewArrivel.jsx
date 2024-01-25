import React, { useEffect, useState } from 'react'
import img from '../../assets/cart.jpg'
import axios from 'axios'
import ProductCard from '../Products/ProductCard'


const url = 'https://fakestoreapiserver.reactbd.com/products'

const NewArrivel = () => {
    const [newData, setNewData] = useState([]);
 



    const fetchData = async ()=>{
        const {data} = await axios.get(`${url}`)
   
        const newItems = data.filter(item => item.isNew === true)
        
        setNewData(newItems);
    }

    useEffect(()=>{
        fetchData();
    },[])
    
    

    return (
        <div className='font-job border'>
            <div className='flex justify-center items-center w-full min-h-screen bg-cover  bg-no-repeat bg-fixed' style={{ backgroundImage: `url(${img})` }}>
                <h1 className='text-white text-6xl font-bold'>
                    What's New....
                </h1>
            </div>
            <div className='p-4 justify-between items-center border-red-600 w-full mx-auto py-10 grid grid-cols-4 gap-10'>
                {
                    newData.map((item) => (<ProductCard key={item._id} product={item} />))
                }
            </div>

        </div>
    )
  
}

export default NewArrivel
