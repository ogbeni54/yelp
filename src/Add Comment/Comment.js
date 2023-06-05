import React, { useState } from 'react'
import Navlogin from '../Navigation/Navlogin'
import { Link } from 'react-router-dom'

export default function Comment() {
    const [descr, setDescr] = useState('')
  return (
      <div>
          <div className='container2'>
              <Navlogin />
              <div className='searchy'>
                <form>
                    <h2>
                        Add New Comment
                    </h2>
                    <label>
                          <span>Description</span>
                          <textarea
                              onChange={(e) => setDescr(e.target.value.trim())}
                              value={descr.toLower}
                              placeholder="This was probably the best camp i've visited this past year
                              definitely recommend visiting anytime soon"
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
