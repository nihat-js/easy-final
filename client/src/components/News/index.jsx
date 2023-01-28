import './index.scss'

import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

export default function Index() {

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [searchValue,setSearchValue] = useState("")
  const [sortByTitle,setSortByTitle] = useState(0)


  const URL = "http://localhost:4000/news"

  useEffect(() => {
    get()
  }, [])


  async function get() {
    setIsLoading(true)
    let response = await axios.get(URL)
    setData(response.data)
    setIsLoading(false)
  }

  async function deleteById(id) {
    setIsLoading(true)
    let response = await axios.delete(URL, { id, })
    get()
  }

  function handleSortByTitle(val){

    if (val == 1 && sortByTitle != 1 ){
      setData([...data.sort((a,b) => a.title !== b.title ? a.title < b.title ? -1 : 1 : 0 )])
      console.log('eee')
      setSortByTitle(1)
    } else if (val == -1 && sortByTitle != -1 ) {
      setData([...data.sort( (a,b) => a.title !== b.title ? a.title < b.title ? 1 : -1 : 0     )])
      setSortByTitle(-1)
    }

  }



  return (
    <section className="news">

      <div className="filter">
        <div className="search">
          <input type="text"  value={searchValue} onChange={ (e) => setSearchValue(e.target.value)} />
        </div>
        <div className="sort">
          <div className="title">
            <div className="title"> Sort By Title </div>
            <div className="content">
              <h4 className='' onClick={ () => handleSortByTitle(1)  } > A-Z   </h4>
              <h4 onClick={() => handleSortByTitle(-1) } > Z-A  </h4>
            </div>
          </div>
        </div>
      </div>

      {isLoading ? <div className='spinner'>  </div> :
        <div className='row'>
          {data.filter(x =>  x.title.toLowerCase().includes(searchValue.toLowerCase()) ).map( (item,index) => <div key={index}   className='box'>
            <div className="img-wrap">
              <img src={item.image} alt="" />
            </div>
            <p className="date"> {item.date} </p>
            <h3 className="title"> {item.title} </h3>

          </div>)}
        </div>
      }
    </section>
  )
}
