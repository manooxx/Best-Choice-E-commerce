
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Login from './pages/login/Login'
import Men from './components/category/men'

import Cart from './pages/carts/Cart'

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

          <Route path="/Women" element={<Women />} />
          <Route path="/NewArrivel" element={<NewArrivel/>} />
          <Route path="/Login" element={<Login />} />
          <Route path="/ProductModal/:id" element={<ProductModal/>}/>

        </Routes>

        <Footer />

      </BrowserRouter>


    </>
  )
}

export default App
