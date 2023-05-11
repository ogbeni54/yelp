import {React, useState, useEffect, Suspense, lazy} from 'react'
import Loading from '../loading/Loading';
// import './Camplogin.css'
import Navi from '../Navigation/Navi';

// import Pages from '../pages/Pages';
import { Link } from 'react-router-dom'
import { campData } from '../firebase/Config';
import { collection, getDocs } from 'firebase/firestore';


const Pages = lazy(() => delayForDemo(import('../pages/Pages')));

    export default function Camplogin() {
    const [data, setData] = useState(null);
    const [ispending, setIspending] = useState(false);
    const [error, setError] = useState(false);

    const [searches, setSearches] = useState('');
    
    
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

    // console.log(data);
    
    
    const handleChange = (e) => {
        e.preventDefault();
        setSearches(e.target.value)
    }
    

    // console.log(data);

    return (
        <div>
            <div className='container2'>
               <Navi/>
                <div className='searchy'>
                    <div className='salz'>
                        <div className='salz-cont'>
                            <div className='maja'>
                                <h1>Welcome to YelpCamp!</h1>
                                <p>View our hand-picked campgrounds
                                    from all over<br/>the world 
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
                    {!searches && (
                        <Suspense fallback={<Loading/>}>
                            <Pages />
                        </Suspense>
                    )}
                    
                    {searches &&  <div className="camps">
                       
                           
                        {
                   data 
                   .filter((i) => i.Title.toLowerCase().includes(searches.toLowerCase()))
                   .map((result, index) => {
                       return (
                           <div className="contA" key={index}>
                                <div className='card'>
                                    <div className='pixcont'>
                                        <img src={result.Image} alt="camping" className='image-camp'/>
                                    </div>
                                    <h4>{result.Title}</h4>
                                    <p>{result.Description}</p>

                                    <Link to='/' className=''>
                                   <button>{result.button}</button>
                                    </Link>

                               {/* <Link to='/camp-page' className='ground-link'
                               onClick={() => {setDirect(items.filter(i => i.Tittle === result.Tittle))}}>
                                   {result.button}
                               </Link> */}
                                </div>
                               
                               
                           </div>
                       )
                   })
               }

                       
               
            </div>}

                </div>
                <Link to='/'><img src='Assets/Logo.svg' alt='site logo' className='sity1' /></Link>
                </div>
        </div>
    )

}


// Add a fixed delay so you can see the loading state
function delayForDemo(promise) {
    return new Promise(resolve => {
      setTimeout(resolve, 2000);
    }).then(() => promise);
    console.log('Dont disturb me i am working ');
  }
