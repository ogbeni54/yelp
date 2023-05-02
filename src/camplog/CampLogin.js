import {React, useState, useEffect} from 'react'
import Navlogin from '../Navigation/Navlogin'
import Pages from '../pages/Pages';
import { Link } from 'react-router-dom'
import {campData} from '../firebase/Config'
import { collection, getDocs } from 'firebase/firestore';
import { auth } from '../firebase/Config';


export default function CampLogin({items}) {
    const [searches, setSearches] = useState('');
    const handleChange = (e) => {
        e.preventDefault();
        setSearches(e.target.value)
    }

    const [data, setData] = useState(null);
    const [ispending, setIspending] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const dataz = async () => {
            await getDocs(collection(campData, "Camp"))
                .then((querySnapshot) => {
                    const newData = querySnapshot.docs
                        .map((doc) => ({ ...doc.data(), id: doc.id }));
                        // console.log(newData);
                        setData(newData);                
                    // console.log(todos, newData);
                })

            }
            dataz()
 
        }, []);

// console.log(auth.currentUser);
        

    
    
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
                   data 
                   .filter((i) => i.Tittle.toLowerCase().includes(searches.toLowerCase()))
                   .map((result, index) => {
                       return (
                           <div className="results" key={index}>
                               <img src={result.Image} alt="camping" className='image-camp'/>
                               <h4>{result.Title}</h4>
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
