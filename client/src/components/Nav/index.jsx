import './index.scss'

import { Link } from 'react-router-dom'

export default function Index() {
  return (
    <nav>
      <div className="row">
        <div className="left-column">
          <div className="brand">
            {/* <img src="https://preview.colorlib.com/theme/thelogistico/assets/img/logo/logo.png" alt="" width={"25px"} /> */}
            <h3 className="text">  <Link to ='/'> Logistico </Link>   </h3>
          </div>
          <div className="links">
            <ul>
              <li> <Link to='/'> Home </Link> </li>
              <li> <Link to='/add'> Add </Link> </li>
              <li> <Link to='/wishlist'> Wishlist </Link> </li>
              <li> <Link to='/'> About </Link> </li>
              <li> <Link to='/'> Service </Link> </li>
              <li> <Link to='/'> Blog </Link> </li>
              <li> <Link to='/'> Contact </Link> </li>
            </ul>
          </div>
        </div>
        <div className="right-column">
          <div className="social">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-linkedin"></i>
          </div>
          <div className="phone">
            <p className="text"> 10 (87) 237  3784  </p>
          </div>
        </div>
      </div>
    </nav>
  )
}
