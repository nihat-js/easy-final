import { BrowserRouter, Routes, Route } from 'react-router-dom'

import '../assets/css/style.css'

import Home from '../pages/Home/index'
import Add from '../pages/Add/index'
import Details from '../pages/Details/index'
import WishList from '../pages/Wishlist/index'


export default function Index() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<Add />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/wishlist/' element={<WishList />} />
      </Routes>
    </BrowserRouter>
  )
}
