import {React, useState} from 'react'
import Navi from './Navigation/Navi'
// import './Camplogin.css'


import { Link } from 'react-router-dom'

export default function Addnew() {
    const [campname, setCampname] =useState('');
  return (
    <div>
        <div className='container2'>
        <Navi/>
                <div className='searchy'>
                    <form className='ada'>
                        <h2>
                            Add New Campground
                        </h2>
                        <label>
                          <span>Campground Name</span>
                          <input
                              type="text"
                              onChange={(e) => setCampname(e.target.value.trim())}
                              value={campname.toLower}
                              placeholder="Seven Sisiters Waterfall"
                              required
                          />
                      </label>

                      <label>
                          <span>Price</span>
                          <input
                              type="text"
                              onChange={(e) => setPrice(e.target.value.trim())}
                              value={price.toLower}
                              placeholder="$149"
                              required
                          />
                      </label>

                      <label>
                          <span>Image</span>
                          <input
                              type="text"
                              onChange={(e) => setImage(e.target.value.trim())}
                              value={image.toLower}
                              placeholder="www.thepinoytraveler.com/2018/01/mt-ulap-diy-dayhike.html"
                              required
                          />
                      </label>
                      <label>
                          <span>Description</span>
                          <input
                              type="text"
                              onChange={(e) => setdescr(e.target.value.trim())}
                              value={descr.toLower}
                              placeholder="The Seven Sisters is the 39th tallest Waterfall
                              in Norway. The 410-meter tall waterfall consists of seven seperate
                              streams and the tallest of the seven has a free fall that measures 250 meters.
                              The waterfall is located along the Geirangafjorden in Stranda Municipality
                              in More og Romsdale county, Norway."
                              required
                          />
                      </label>

                      <button>Add Campground</button>
                    </form>

                    <Link to='/'><img src='Assets/Logo.svg' alt='site logo' className='sity1' /></Link>
                </div>
        </div>
    </div>
  )
}
