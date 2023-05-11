import {React, useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {  signOut } from "firebase/auth";
import { auth } from '../firebase/Config';
// Below is used to access user details using react-firebase-hooks
import {useAuthState} from 'react-firebase-hooks/auth'



export default function Navlogin() {
    const [harm, setHarm] = useState(false)

    console.log(harm);
    const handleNav = () => {
        setHarm(!harm)
    }



    const navigate = useNavigate();
    // grabbing user details 
    const [user] = useAuthState(auth);

    console.log(user);

 
    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/");
            console.log("Signed out successfully")
        }).catch((error) => {
        // An error happened.
        });
    }

  return (
    <div>
         {user && <div className='nava'>
                    <div className='nav1'>
                        <Link to='/'><img src='Assets/Logo.svg' alt='site logo' className='sity' /></Link>
                        <Link to='/' className='hh'>Home</Link>
                    </div>
                    <div className='nav2'>
                        <i className={harm ? "fa-solid fa-times" :"fa-solid fa-bars"} onClick={handleNav}></i>
                        <span className='mia'>{user.displayName}</span>
                        <Link to='/Camplogout' className='mia' onClick={handleLogout}>Logout</Link>
                    </div>
                    
                    <ul className={`menu-nav ${harm ? ' show-menu' : ''}`}>
                        {/* <i className={harm ? "fa-solid fa-bars" : "fa-solid fa-times"}></i> */}
                        <li><Link to='/'>Home</Link></li>
                        <li> <Link to='' ></Link></li>
                        <li><Link to='/Camplogout'>Logout</Link></li>
                    </ul>
                    
                </div>}
    </div>
  )
}
