
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Home from './pages/Home/Home.jsx'
import Footer from './components/Footer/Footer.jsx'
import Login from './pages/login/Login.jsx'
import Men from './components/category/Men.jsx'

import Cart from './pages/carts/Cart.jsx'

import ProductModal from './components/Products/ProductModal'
import Women from './components/category/Women'
import NewArrivel from './components/category/NewArrivel'


function App() {


  return (
    <>

      <BrowserRouter>
        <Header />

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/Men" element={<Men />} />

          <Route path="/NewArrivel" element={<NewArrivel/>} />
          <Route path="/Women" element={<Women />} />
          <Route path="/Cart" element={<Cart />} />
          
          <Route path="/Login" element={<Login />} />

          <Route path="/ProductModal/:id" element={<ProductModal/>}/>

        </Routes>

        <Footer />

      </BrowserRouter>


    </>
  )
}

export default App
