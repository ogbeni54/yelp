import React from 'react' 
import { Link } from 'react-router-dom'




function Pages () {
    const items = [
        {
            Image: 'http://localhost:3000/Assets/Camp Images/Compressed Images/Mount Ulap.jpg',
            Tittle: 'Mount Ulap',
            Description: "One of the most famous hikes in Benguet Mt Ulap Itogon",
            button: "View Campground"
        },
        {
            Image: 'http://localhost:3000/Assets/Camp Images/Compressed Images/Calaguas Island.jpg',
            Tittle: 'Calagus Islands',
            Description: "A paradise of islands that can rival the white sand beauty of Boracay",
            button: "View Campground"
        },
        {
            Image: 'http://localhost:3000/Assets/Camp Images/Compressed Images/Onay Beach.jpg',
            Tittle: 'Onay Beach',
            Description: "This is one of the best camping sites, beautiful and pristine.",
            button: "View Campground"
        },
        {
            Image: 'http://localhost:3000/Assets/Camp Images/Compressed Images/Latik Riverside.jpg',
            Tittle: 'Latik Riverside',
            Description: "Philippines is one of the most dazzling countries in all Asia.",
            button: "View Campground"
        },
        {
            Image: 'http://localhost:3000/Assets/Camp Images/Compressed Images/Buloy Springs.jpg',
            Tittle: 'Buloy Springs',
            Description: "This is one of the best beach camping sites, beautiful and pristine.",
            button: "View Campground"
        },
        {
            Image: 'http://localhost:3000/Assets/Camp Images/Compressed Images/Seven Sisters Waterfall.jpg',
            Tittle: 'Seven Sisters Waterfall',
            Description: "The Seven Sisters is the 39th tallest waterfall in Norway",
            button: "View Campground"
        }
      ];
    return (
        <>
        <div className="camps">
            
            {
                items
                .map((val, index) => {
                    return (
                        <div className="contA" key={index}>
                            <div className='card'>
                                <div  className='pixcont'>
                                    <img src={val.Image} alt="camping" className='image-camp'/>
                                </div>
                                <h4>{val.Tittle}</h4>
                               <p>{val.Description}</p>

                               <Link to='/' className='ground-link'>
                                   <button>{val.button}</button>
                               </Link>
                            </div>
                               
                              
                           </div>
                    )
                })
            }
        </div>
        </>
    );
}

export default Pages