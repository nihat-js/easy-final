import './index.scss'

import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { MainContext } from '../../context/mainContext'
import { useContext } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Index() {

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const [sortByTitle, setSortByTitle] = useState(0)
  const [toggleSortTitle, setToggleSortTitle] = useState(false)

  const URL = "http://localhost:4000/news"

  const { wishList, setWishList } = useContext(MainContext)


  useEffect(() => {
    get()
  }, [])


  function toggleToWishList(id) {
    toast.dismiss()
    if (wishList.findIndex(x => x.id == id) > -1) {
      toast("Removed from wishlist successfully")
      setWishList([...wishList.filter(x => x.id != id),])
    } else {
      toast("Added to wishlist  successfully")
      setWishList([...wishList, { id: id, date: Date.now() }])
    }

  }





  async function get() {
    setIsLoading(true)
    let response = await axios.get(URL)
    setData(response.data)
    setIsLoading(false)
  }

  async function deleteById(id) {
    let result = window.confirm("Are you sure you wanna delete it ?")
    if (!result) return false
    setIsLoading(true)
    let response = await axios.delete(URL + "/" + id)
    get()
  }

  function handleSortByTitle(val) {

    if (val == 1 && sortByTitle != 1) {
      setData([...data.sort((a, b) => a.title !== b.title ? a.title < b.title ? -1 : 1 : 0)])
      console.log('eee')
      setSortByTitle(1)
    } else if (val == -1 && sortByTitle != -1) {
      setData([...data.sort((a, b) => a.title !== b.title ? a.title < b.title ? 1 : -1 : 0)])
      setSortByTitle(-1)
    }

  }



  return (

    <section className="news">
      <ToastContainer autoClose={1500} />
      <div className="filter">
        <div className="search">
          <input type="text" placeholder='Search By Name' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
        </div>
        <div className="sort">
          <div className="title">
            <p className="text" onClick={() => setToggleSortTitle(!toggleSortTitle)}> Sort By Title </p>
            <div className={`content  ${toggleSortTitle ? '' : 'd-none'}  `}>
              <h4 className={sortByTitle == 1 ? 'active' : ''} onClick={() => { handleSortByTitle(1); setToggleSortTitle(false) }} > A-Z   </h4>
              <h4 className={sortByTitle == -1 ? 'active' : ''} onClick={() => { handleSortByTitle(-1); setToggleSortTitle(false) }} > Z-A  </h4>
            </div>
          </div>
        </div>
      </div>

      {
        isLoading ? <div className='spinner'>  <span></span> </div> :
          <div className='row'>
            {data.filter(x => x.title.toLowerCase().includes(searchValue.toLowerCase())).map((item, index) => <div key={index} className='box'>
              <div className="img-wrap">
                <img src={item.image} alt="" />
              </div>
              <p className="date"> {item.date} </p>
              <h3 className="title"> {item.title} </h3>
              <div className="actions">
                <Link to={"/details/" + item._id} > Details </Link>
                <button className='delete' onClick={() => deleteById(item._id)} > Delete </button>
                <i onClick={() => toggleToWishList(item._id)} className={wishList.findIndex(x => x.id == item._id) > -1 ? "fa-solid fa-heart" : "fa-regular fa-heart"} ></i>
              </div>
            </div>)}
          </div>
      }
    </section >
  )
}
