import React from 'react'
import './Camplogin.css'
import { Link } from 'react-router-dom'

export default function Camplogin() {
    return (
        <div>
            <div className='container2'>
                <div className='nava'>
                    <div className='nav1'>
                        <Link to='/'><img src='Assets/Logo.svg' alt='site logo' className='sity' /></Link>
                        <Link to='/'>Home</Link>
                    </div>
                    <div className='nav2'>
                        <Link to=''>Login</Link>
                        <Link to=''><button>Create an account</button></Link>
                    </div>
                </div>
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

                    <div className='camps'>
                        <div className='contA'>
                            <div className='card'>
                                <div className='pixcont'>
                                    <img src='http://localhost:3000/Assets/Camp Images/Compressed Images/Mount Ulap.jpg' alt='mountu' />
                                </div>
                                <h4>Mount Ulap</h4>
                                <p>One of the most famous hikes in 
                                    Benguet is Mt Ulap in Itogon
                                </p>
                                <button>View Campground</button>
                            </div>

                        </div>
                        <div className='contA'>
                            <div className='card'>
                                <div className='pixcont'>
                                    <img src='http://localhost:3000/Assets/Camp Images/Compressed Images/Calaguas Island.jpg' alt='mountu' />
                                </div>
                                <h4>Calaguas Islands</h4>
                                <p>A paradise of islands that can rival the
                                    white sand beauty of Boracay
                                </p>
                                <button>View Campground</button>
                            </div>

                        </div>
                        <div className='contA'>
                            <div className='card'>
                                <div className='pixcont'>
                                    <img src='http://localhost:3000/Assets/Camp Images/Compressed Images/Onay Beach.jpg' alt='mountu' />
                                </div>
                                <h4>Onay Beach</h4>
                                <p>This is one of the best beach camping sites,
                                    beautiful and pristine.
                                </p>
                                <button>View Campground</button>
                            </div>

                        </div>
                        <div className='contA'>
                            <div className='card'>
                                <div className='pixcont'>
                                    <img src='http://localhost:3000/Assets/Camp Images/Compressed Images/Seven Sisters Waterfall.jpg' alt='mountu' />
                                </div>
                                <h4>Seven Sisters Waterfall</h4>
                                <p>The Seven Sisters is the 39th tallest
                                    waterfall in Norway.
                                </p>
                                <button>View Campground</button>
                            </div>

                        </div>
                        <div className='contA'>
                            <div className='card'>
                                <div className='pixcont'>
                                    <img src='http://localhost:3000/Assets/Camp Images/Compressed Images/Latik Riverside.jpg' alt='mountu' />
                                </div>
                                <h4>Latik Riverside</h4>
                                <p>Philipines is one of the most dazzling
                                    countries in all of Asia.
                                </p>
                                <button>View Campground</button>
                            </div>

                        </div>
                        <div className='contA'>
                            <div className='card'>
                                <div className='pixcont'>
                                    <img src='http://localhost:3000/Assets/Camp Images/Compressed Images/Buloy Springs.jpg' alt='mountu' />
                                </div>
                                <h4>Buloy Springs</h4>
                                <p>This is one of the best best beach camping
                                    sites, beautiful and pristine.
                                </p>
                                <button>View Campground</button>
                            </div>

                        </div>
                    </div>

                </div>
                <Link to='/'><img src='Assets/Logo.svg' alt='site logo' className='sity1' /></Link>
            </div>
        </div>
    )
}
