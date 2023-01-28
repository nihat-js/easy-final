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
import { Link } from 'react-router-dom'
export default function Index() {

  const { wishList, setWishList } = useContext(MainContext)
  const [fullData, setFullData] = useState([])

  const URL = "http://localhost:4000/news"

  async function getAll() {
    let arr = []
    for (let i = 0; i < wishList.length; i++) {
      let response = await axios.get(URL + "/" + wishList[i].id)
      arr.push(response.data)

      console.log(arr)
      setFullData(arr)
    }
  }
    function deleteFromWishList(id) {
      setWishList(wishList.filter(x => x.id != id))
      getAll()
    }


    useEffect(() => {
      getAll()
    }, [])


    return (
      <div className="wishlist-page">
        <Nav />
        <HelmetProvider>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Home Page</title>
            <meta name="description" content="Home page" />
          </Helmet>
        </HelmetProvider>
        <div className="row">

          {fullData.map((item,index ) => <div className='box' key={index}> 
          <div className="img-wrap">
            <img src={item.image} alt="" />
          </div>
          <p className="title"> {item.title} </p>
          <p className="date"> Added Date : {item.date} </p>
          <div className="actions">
            <button className='delete' onClick={ () => deleteFromWishList(item._id)} > Remove from Wish List </button>
            <Link to={"/details/" + item._id} > See more   </Link>
          </div>
        </div>   )}
        </div>

        <Footer />
      </div>
    )
  }
