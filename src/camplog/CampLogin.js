import {React, useState} from 'react'
// import './Camplogin.css'
import Navlogin from '../Navigation/Navlogin'
// import Navi from '../Navigation/Navi';
// import CampCollage from '../CampCollage';
import Pages from '../pages/Pages';
import { Link } from 'react-router-dom'

export default function CampLogin({items}) {
    const [searches, setSearches] = useState('');
    const handleChange = (e) => {
        e.preventDefault();
        setSearches(e.target.value)
    }
  return (
    <>
    <div>
        <div className='container2'>
               <Navlogin/>
                <div className='searchy'>
                    <div className='salz'>
                        <div className='salz-cont'>
                            <div className='maja'>
                                <h1>Welcome to YelpCamp!</h1>
                                <p>View our hand-picked campgrounds
                                    from all over<br/> the world 
                                </p>
                            </div>

                            <form>
                                <input placeholder='&#128270; Search for camps' onChange={handleChange}></input>
                                <button>Search</button>
                            </form>
                            <Link to='/Addnew'>Or add your own background </Link>
                        </div>

                    </div>

                    
                    {/* <CampCollage/> */}
                    {!searches && <Pages/>}

                    {searches &&  <div className="search-content">
               {
                   items 
                   .filter((i) => i.Tittle.toLowerCase().includes(searches.toLowerCase()))
                   .map((result, index) => {
                       return (
                           <div className="results" key={index}>
                               <img src={result.Image} alt="camping" className='image-camp'/>
                               <h4>{result.Tittle}</h4>
                               <p>{result.Description}</p>

                               {/* <Link to='/camp-page' className='ground-link'
                               onClick={() => {setDirect(items.filter(i => i.Tittle === result.Tittle))}}>
                                   {result.button}
                               </Link> */}
                           </div>
                       )
                   })
               }
            </div>}

                    

                </div>
                <Link to='/'><img src='Assets/Logo.svg' alt='site logo' className='sity1' /></Link>
            </div>
        
    </div>
    </>
  )
}
