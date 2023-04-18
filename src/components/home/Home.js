import React from 'react'
import { Link } from 'react-router-dom'
import Icons from './Social'
import Move from './Scroll'
import "./home.css"
import Info from '../info/Info'
import Register from '../register/Register'
import Data from '../data/Data'

const Home = () => {

  return (
    <>
    <section className="home section">
      <div className="home-container container">
    

    <div className="home-content">
    <div className="data">
      <h3>Welcome to health aura</h3>
      <h1>
        Cloud storage of your <br /> Medical Reports
      </h1>
      <div className="button">
          <Link to="/login"><button>Join Us</button></Link>
      </div>
    </div>
    <Icons />
    </div>
    <Move />

    </div>
    </section>

    <Info/>
    <Register/>
    <Data/>

    </>
  )
}

export default Home