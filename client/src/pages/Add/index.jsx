import './index.scss'
import { Helmet, HelmetProvider } from 'react-helmet-async';


import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import AddForm from '../../components/AddForm'

export default function Index() {
  return (
    <div className="add-page">
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Add Page</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>

      </HelmetProvider>


      <Nav />
      <AddForm />
      <Footer />
    </div>
  )
}
