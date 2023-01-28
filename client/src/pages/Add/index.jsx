import './index.scss'


import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import AddForm from '../../components/AddForm'

export default function Index() {
  return (
    <div className="add-page">
      <Nav />
      <AddForm />
      <Footer />
    </div>
  )
}
