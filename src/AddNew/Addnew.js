import { useState } from "react";
import {auth, campData, storage} from "../firebase/Config"
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { Link, Navigate } from "react-router-dom";
import Navlogin from "../Navigation/Navlogin";

import "./Addnew.css";

export default function Addnew() {
  const [campname, setCampname] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [descr, setDescr] = useState("");

  const sendMessageHandler = (e) => {
    e.preventDefault();

    if (campname.trim() === "" || image.trim() === "" || descr.trim() === "" || price.trim() === "") {
      alert("Enter valid information");
      return;
    }
    try {
         // const { uid, displayName, photoURL } = auth.currentUser;
      addDoc(collection(campData, 'Camp'), {
        Description: descr,
        Image: image,
        Title: campname,
        Price: price,
        button: "View Campground"
      });
  
      Navigate("/CampLogin");
      console.log('Working Now and Stored');
    } catch (error) {
      console.log(error.message + "Item cannot be added");
      
    }
   
    
  }

  return (
    <div>
      <div className="container2">
        <Navlogin />
        <div className="searchy">
          <form className="ada" onSubmit={sendMessageHandler}>
            <h2>Add New Campground</h2>
            <label>
              <span>Campground Name</span>
              <input
                type="text"
                onChange={(e) => setCampname(e.target.value.trim())}
                value={campname.toLowerCase()}
                placeholder="Seven Sisiters Waterfall"
                required
              />
            </label>

            <label>
              <span>Price</span>
              <input
                type="text"
                onChange={(e) => setPrice(e.target.value.trim())}
                value={price.toLowerCase()}
                placeholder="$149"
                required
              />
            </label>

            <label>
              <span>Image</span>
              <input
                type="file"
                onChange={(e) => setImage(e.target.value.trim())}
                value={image}
                placeholder="www.thepinoytraveler.com/2018/01/mt-ulap-diy-dayhike.html"
                required
              />
            </label>
            <label>
              <span>Description</span>
              <textarea
                onChange={(e) => setDescr(e.target.value.trim())}
                value={descr.toLowerCase()}
                placeholder="The Seven Sisters is the 39th tallest Waterfall
                              in Norway. The 410-meter tall waterfall consists of seven seperate
                              streams and the tallest of the seven has a free fall that measures 250 meters.
                              The waterfall is located along the Geirangafjorden in Stranda Municipality
                              in More og Romsdale county, Norway."
                required
              />
            </label>

            <button>Add Campground</button>
          </form>

          <Link to="/">
            <img src="Assets/Logo.svg" alt="site logo" className="sity1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
