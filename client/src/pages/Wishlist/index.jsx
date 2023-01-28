import './index.scss'


import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import AddForm from '../../components/AddForm'

import { Helmet, HelmetProvider } from 'react-helmet-async';


import { MainContext } from '../../context/mainContext';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
export default function Index() {

  const {wishList,setWishList}  = useContext(MainContext)
  const [fullData , setFullData ] = useState([])

  const URL = "http://localhost:4000/news"

   function getAll(){
    let arr = []
    wishList.forEach(x => {
      axios.get(URL+ "/" + x.id).then((response)=>{
        arr.push(response.data)
      })
    })
    setFullData(arr)
  }

  function deleteFromWishList(id){
    setWishList(  wishList.filter(x => x.id != id ))
    getAll()
  }


  useEffect(()=>{
    getAll()
    console.log(wishList)
  },[])


  return (
    <div className="wishlist-page">
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home Page</title>
          <meta name="description" content="Home page" />
        </Helmet>
      </HelmetProvider>
      <Nav />
      <div className="row">
        {fullData.map(x => <div className='box'> 
          <div className="img-wrap">
            <img src={x.image} alt="" />
          </div>
          <p className="title"> {x.title} </p>
          <p className="date">  {x.date} </p>
          <div className="actions">
            <button className='' onClick={ () => deleteFromWishList(x._id)} > Delete </button>
            <Link to={"/details/" + x._id} > See more   </Link>
          </div>
        </div>   )}
      </div>

      <Footer />
    </div>
  )
}
