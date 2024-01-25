import React, {useContext} from 'react'
import MyContext from '../../context/data/MyContext'
import HeroSection from '../../components/HeroSection/HeroSection'
import Product from '../../components/Products/Product'
import bg1 from './banner/bg1.jpg'



const Home = () => {




 return (
  <>
    <div className='font-rob w-full min-h-screen bg-cover  bg-no-repeat bg-fixed' style={{backgroundImage: `url(${bg1})`}}>
    <HeroSection/>
    
    </div>
    <div className='border-b p-10'>
      <Product/>
    </div>
    </>
  )
}

export default Home
