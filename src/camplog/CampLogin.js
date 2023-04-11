import React from 'react'
// import './Camplogin.css'
import Navlogin from '../Navigation/Navlogin'
import CampCollage from '../CampCollage';
import { Link } from 'react-router-dom'

export default function CampLog() {
  return (
    <div>
        <div className='container2'>
               <Navlogin/>
                <div className='searchy'>
                    <div className='salz'>
                        <div className='salz-cont'>
                            <div className='maja'>
                                <h1>Welcome to YelpCamp!</h1>
                                <p>View our hand-picked campgrounds
                                    from all over<br/>the world or add your own.
                                </p>
                            </div>

                            <form>
                                <input placeholder='&#128270; Search for camps'></input>
                                <button>Search</button>
                            </form>
                            <Link to=''>Or add your own background </Link>
                        </div>

                    </div>

                    
                    <CampCollage/>
                    

                </div>
                <Link to='/'><img src='Assets/Logo.svg' alt='site logo' className='sity1' /></Link>
            </div>
        
    </div>
  )
}
