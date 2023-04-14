import React from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'
export default function Landing() {
  return (
    <div className='App'>
        <Link to={'/'}><img src='Assets/Logo.svg' alt='site logo' className='sitelogo1' /></Link>
        <div className='container'>
        <div className='contA'>
          <Link to={'/'}><img src='Assets/Logo.svg' alt='site logo' className='sitelogo' /></Link>
          <div className='textyA'>
            <h1 className='first'>Explore the best camps on Earth</h1>
            <p className='decrp'>Yelp camp is a curated list of the best camping spots on Earth.
              Unfiltered and unbiased reviews
            </p>
            <div className='text-cont'>
              <div className='t1'>
                <img src='Assets/Checkmark.svg' alt='checky' />
                <p>Add your own Camp suggestions.</p>
              </div>
              <div className='t1'>
                <img src='Assets/Checkmark.svg' alt='checky' />
                <p>Leave review and experiences.</p>
              </div>
              <div className='t1'>
                <img src='Assets/Checkmark.svg' alt='checky' />
                <p>See locations of all camps.</p>
              </div>
              <Link to="/Camplogout" className='f_but'>
                <button>View Campgrounds</button>
              </Link>

              <p className='pat'>Partnerd with:</p>
              <div className='sponsor'>
                <img src='Assets/Airbnb.svg' alt='airbnb' />
                <img src='Assets/Booking.svg' alt='booking' />
                <img src='Assets/Plum Guide.svg' alt='plum' />
              </div>
            </div>
          </div>



        </div>
        <div className='contB'>
          {/* <div className='contI'>
            <img src='Assets/Hero image.jpg' alt='Hero1'/>
          </div> */}

        </div>
      </div>

    </div>
  )
}
