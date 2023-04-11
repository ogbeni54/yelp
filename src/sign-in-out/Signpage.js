import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './Signpage.css';
export default function Signpage() {
    const [uname, setUname] = useState('');
    const [pword, setPword] = useState('');

    const handleSubmit = () => {
        
    }


  return (
    <div>
        <div className='container1'>
        <div className='contA'>
            <div className='jar'>
            <div className='navcont'>
                <Link to='/'><img src='Assets/Logo.svg' alt='site logo' className='sitelogs'/></Link>
            
            <div className='nav'>
                <Link to="/"><span className='bck'>&#8592; &nbsp; Back to campgrounds</span></Link>
            </div>
            </div>
            <div className='hand'>
            <h2>Start exploring camps from all around the world</h2>
            <form onSubmit={handleSubmit}>
                 
                      <label>
                          <span>Username:</span>
                          <input
                              type="text"
                              onChange={(e) => setUname(e.target.value.trim())}
                              value={uname.toLower}
                              placeholder="johndoe_91"
                              required
                          />
                      </label>

                      <label>
                          <span>Password:</span>
                          <input
                              type="text"
                              onChange={(e) => setPword(e.target.value.trim())}
                              value={pword.toLower}
                              placeholder="Enter Your Password"
                              required
                          />
                      </label>
                      <button>Login</button>
                      <p>Not a user yet? <Link to={'/Signup'}>Create an account</Link></p>
            </form>
            </div>
            
            </div>
            
          

          </div>
          <div className='contB'>
                <div className='textyb'>
                    <h2>"YelpCamp has honestly saved me hours of research
                        time and the camps on here are definitely well picked
                        and added"
                    </h2>
                    <div className='userT'>
                        <img src='./Assets/User Testimonial.svg' alt='testim'/>
                        <div className='userTn'>
                            <h5>May Andrews</h5>
                            <p>Proffesional Hiker</p>
                        </div>
                    </div>
                </div>
          </div>
        </div>

    </div>
  )
}
