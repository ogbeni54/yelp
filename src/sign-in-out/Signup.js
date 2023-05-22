import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';

// Below is imported from the installed firebase module
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../firebase/Config';
import './Signpage.css';


export default function Signpage() {
    const navigate = useNavigate();

    const [uname, setUname] = useState('');
    const [pword, setPword] = useState('');
    const [email, setEmail] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault()
        if(uname.length == 0) {
            alert('Please enter your username')
        } else {
            const {user} = await createUserWithEmailAndPassword(auth, email, pword)
            console.log(`User ${user.uid} created`)
            await updateProfile(user, {
              displayName: uname
            });
            console.log("User profile updated" + user.displayName)
            navigate("/Signpage")
          }
        }

        
       
    //  await createUserWithEmailAndPassword(auth, email, pword)
    //       .then((userCredential) => {
    //           // Signed in
    //           userCredential.updateProfile({
    //             displayName: "John Doe"
    //           }).then(() => {
    //               console.log("Display name added successfully!" );
    //           }).catch((error) => {
    //               console.error("Error adding display name:", error);
    //           });

    //             //    console.log(user);
    //                 navigate("/Signpage")

    //       }).catch((error) => {
    //           const errorCode = error.code;
    //           const errorMessage = error.message;
    //           console.log(errorCode, errorMessage);
    //           // ..
    //       });

        
     
      



  return (
    <div>
        <div className='container1'>
        <div className='contA'>
            <div className='jar'>
            <div className='navcont'>
                <Link to='/'><img src='Assets/Logo.svg' alt='site logo' className='sitelogs'/></Link>
            
            <div className='nav'>
                <Link to="/"><span>&#8592; &nbsp; Back to campgrounds</span></Link>
            </div>
            </div>
            <div className='hand'>
            <h2>Start exploring camps from all around the world</h2>
            <form onSubmit={onSubmit}>
                 
                      <label>
                          <span>Email:</span>
                          <input
                              type="text"
                              onChange={(e) => setEmail(e.target.value.trim())}
                              value={email.toLower}
                              placeholder="johndoe_91@XXXX.com"
                              required
                          />
                      </label>

                      <label>
                          <span>Password:</span>
                          <input
                              type="password"
                              onChange={(e) => setPword(e.target.value.trim())}
                              value={pword.toLower}
                              placeholder="Enter Your Password"
                              required
                          />
                      </label>

                      <label>
                          <span>Username:</span>
                          <input
                              type="text"
                              onChange={(e) => setUname(e.target.value.trim())}
                              value={uname.toLower}
                              placeholder="Enter Your Username"
                              required
                          />
                      </label>

                      <button>Create an account</button>
                      <p>Already a user? <Link to={'/Signpage'}>Sign in</Link></p>
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