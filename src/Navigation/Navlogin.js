import {React, useState} from 'react'
import { Link } from 'react-router-dom'


export default function Navlogin() {
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
                        <Link to='' className='mia'>John Doe</Link>
                        <Link to='/Camplogout' className='mia'>Logout</Link>
                    </div>
                    
                    <ul className={`menu-nav ${harm ? ' show-menu' : ''}`}>
                        {/* <i className={harm ? "fa-solid fa-bars" : "fa-solid fa-times"}></i> */}
                        <li><Link to='/'>Home</Link></li>
                        <li> <Link to='' >John Doe</Link></li>
                        <li><Link to='/Camplogout'>Logout</Link></li>
                    </ul>
                    
                </div>
    </div>
  )
}
