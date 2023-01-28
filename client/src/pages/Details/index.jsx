import './index.scss'

import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './index.scss'

export default function Index() {

  const params = useParams()
  const [data, setData] = useState({})
  const URL = "http://localhost:4000/news/" + params.id

  async function getById(req, res) {
    let response = await axios.get(URL)

    setData(response.data)

  }

  useEffect(() => {
    getById()
  })


  return (
    <div className="details-page">

      <Helmet>
        <meta charSet="utf-8" />
        <title>Details Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <Nav />

      <section className="detail">
        <div className="container">
          <h3 className="title"> <Link to='/'> 	&#60;&#60; Back  </Link> </h3>
          <div className="row">
            <div className="left-column">
              <img src={data.image} alt="" />
            </div>
            <div className="right-column">
              <h3 className="title"> {data.title} </h3>
              <p className="date"> {data.date} </p>

            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}
