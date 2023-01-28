import './index.scss'
export default function Index() {
  return (
    <section className="home-hero">
      <div className="container">
        <div className="row">
          <div className="left-column">
            <h3 className="subtitle"> Welcome to logistico </h3>
            <h1 className="title"> A Truly Global Service Provider </h1>
            <p className="text"> We make you cargo transport simple </p>
            <button> Explore us  </button>
          </div>
          <div className="right-column">
            <h3 className="title"> Get a quick offer </h3>
            <p className="text"> We make you cargo transport simple  </p>
            <form action="">
              <div className="select-group">
                <p className="text"> TruckLoad </p>
                <select name="" id="">
                  <option value=""> Category 1 </option>
                  <option value=""> Category 2 </option>
                  <option value=""> Category 3 </option>
                </select>
              </div>
              <div className="select-group">
                <p className="text"> Commodity </p>
                <select name="" id="">
                  <option value=""> Year </option>
                  <option value=""> Weak  </option>
                  <option value=""> Days 3 </option>
                </select>
              </div>
              <div className="input-group">
                <p className="text"> Distance(MILES) </p>
                <input type="text" />
              </div>
              <p className="text"> Estimate Cost :  <span className='text-orange'>$10,400.00  </span>   </p>
            </form>
          </div>
        </div>

      </div>
    </section>
  )
}
