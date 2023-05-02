import {React, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {  signOut } from "firebase/auth";
import { auth } from '../firebase/Config';
// import { getAuth, onAuthStateChanged } from "firebase/auth";


export default function Navlogin() {
    const [harm, setHarm] = useState(false)

    console.log(harm);
    const handleNav = () => {
        setHarm(!harm)
    }



    const navigate = useNavigate();
 
    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/");
            console.log("Signed out successfully")
        }).catch((error) => {
        // An error happened.
        });
    }

    // const auth = getAuth();
    // onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //         // User is signed in, see docs for a list of available properties
    //         // https://firebase.google.com/docs/reference/js/firebase.User
    //         const uid = user.uid;
    //         // ...
    //     } else {
    //         // User is signed out
    //         // ...
            
    //     }
    // });
// console.log(auth.currentUser);
  return (
    <div>
         <div className='nava'>
                    <div className='nav1'>
                        <Link to='/'><img src='Assets/Logo.svg' alt='site logo' className='sity' /></Link>
                        <Link to='/' className='hh'>Home</Link>
                    </div>
                    <div className='nav2'>
                        <i className={harm ? "fa-solid fa-times" :"fa-solid fa-bars"} onClick={handleNav}></i>
                        <Link to='' className='mia'>{auth.currentUser}</Link>
                        <Link to='/Camplogout' className='mia' onClick={handleLogout}>Logout</Link>
                    </div>
                    
                    <ul className={`menu-nav ${harm ? ' show-menu' : ''}`}>
                        {/* <i className={harm ? "fa-solid fa-bars" : "fa-solid fa-times"}></i> */}
                        <li><Link to='/'>Home</Link></li>
                        <li> <Link to='' ></Link></li>
                        <li><Link to='/Camplogout'>Logout</Link></li>
                    </ul>
                    
                </div>
    </div>
  )
}
