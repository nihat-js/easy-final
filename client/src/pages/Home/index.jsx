import './index.scss'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import News from '../../components/News/index'
import Shipment from '../../components/Shipment/index'
import HomeHero from '../../components/HomeHero/index'
import Commercial from '../../components/Commercial/index'
import Mission from '../../components/Mission/index'

import { Helmet, HelmetProvider } from 'react-helmet-async';


export default function Index() {
  return (
    <div className="add-page">
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home Page</title>
          <meta name="description" content="Home page" />

        </Helmet>
      </HelmetProvider>


      <Nav />
      <HomeHero />
      <Commercial />
      <Mission />
      <Shipment />
      <News />
      <Footer />
    </div>
  )
}
