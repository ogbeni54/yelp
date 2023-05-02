import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { campData } from '../firebase/Config';
import { collection, getDocs } from 'firebase/firestore';



function Pages() {
    const [data, setData] = useState(null);
    const [ispending, setIspending] = useState(false);
    const [error, setError] = useState(false);


    


    useEffect(() => {
        setIspending(true)
        console.log(campData);

        const data = async () => {
            await getDocs(collection(campData, "Camp"))
                .then((querySnapshot) => {
                    const newData = querySnapshot.docs
                        .map((doc) => ({ ...doc.data(), id: doc.id }));
                    // console.log(newData);
                    setData(newData);                
                    // console.log(todos, newData);
                })

            }
            data()

       

    }, []);

    // console.log(data);


    return (
        <>
            {data && <div className="camps">

                {
                    data.map((val, index) => {
                        // console.log(val.Image);
                        return (
                            <div className="contA" key={index}>
                                <div className='card'>
                                    <div className='pixcont'>
                                        <img src={val.Image} alt="camping" className='image-camp' />
                                    </div>
                                    <h4>{val.Title}</h4>
                                    <p>{val.Description}</p>

                                    <Link to='/' className='ground-link'>
                                        <button>{val.button}</button>
                                    </Link>
                                </div>


                            </div>
                        )
                    })
                }
            </div>}
        </>
    );
}

export default Pages