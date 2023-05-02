import {React, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'



export default function Navi() {

    const [harm, setHarm] = useState(false)

    console.log(harm);
    const handleNav = () => {
        setHarm(!harm)
    }

 
   
  return (
    <div>
         <div className='nava'>
                    <div className='nav1'>
                        <Link to='/'><img src='Assets/Logo.svg' alt='site logo' className='sity' /></Link>
                        <Link to='/' className='hh'>Home</Link>
                    </div>
                    <div className='nav2'>
                        <i className={harm ? "fa-solid fa-times" :"fa-solid fa-bars"} onClick={handleNav}></i>
                        <Link to='/Signpage' className='mia'>Login</Link>
                        <Link to='/Signup' className='mia'><button>Create an account</button></Link>
                    </div>
                    
                    <ul className={`menu-nav ${harm ? ' show-menu' : ''}`}>
                        {/* <i className={harm ? "fa-solid fa-bars" : "fa-solid fa-times"}></i> */}
                        <li><Link to='/'>Home</Link></li>
                        <li> <Link to='/Signpage' >Login</Link></li>
                        <li><Link to=''><button className='toggle'>Create an account</button></Link></li>
                    </ul>
                    
                </div>
    </div>
  )
}
