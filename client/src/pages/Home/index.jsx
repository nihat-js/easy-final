import './index.scss'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import News from '../../components/News/index'
import Shipment from '../../components/Shipment/index'
export default function Index() {
  return (
    <div className="add-page">
        <Nav/>
        <News />
        <Shipment/>
        <Footer/>
    </div>
  )
}
