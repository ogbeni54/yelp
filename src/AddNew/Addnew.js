import { React, useState } from "react";
// import { firebase } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import campData from "../firebase/Config";
import { collection, addDoc } from "firebase/firestore";
import "firebase/storage";
// import { getStorage, ref } from "firebase/storage";
import "./Addnew.css";
// import Navi from './Navigation/Navi'
// import './Camplogin.css'

import { Link, Navigate } from "react-router-dom";
import Navlogin from "../Navigation/Navlogin";

export default function Addnew() {
  const [campname, setCampname] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [descr, setdescr] = useState("");

  // Initialize Firestore
  //   const firestore = firebase.firestore();

  //   const db = firebase.firestore();

  //   const id =firebase.firestore().collection('camp').doc().id

  // Create a reference to the collection
  //   const myCollection = firestore.collection("Camp");

  // Create a new document with auto-generated ID
  //     const addNewDocument = async () => {
  //     try {
  //       const newDocRef = await db.collection('Camp').doc(id); // Use doc() to generate auto ID
  //       await newDocRef.set({
  //         Description: descr
  //       }); // Set data to the new document
  //       console.log('Document added with ID:', newDocRef.id);
  //     } catch (error) {
  //       console.error('Error adding document:', error);
  //     }
  // }

  const addDok = async () => {
    // Assuming you have initialized Firebase and Firestore
    const db = "yelp-camp-a7280";
    // Get a reference to the collection where you want to add a new document
    const myCollectionRef = collection(db, "Camp");


    console.log(myCollectionRef);

    // Create a new document with an auto-generated ID
    const newDocRef = await addDoc(myCollectionRef, {
      // Add your document data here
      // For example:
      Description: descr,
      Image: image,
      Title: campname,
      button: "View Campground",
    });

    // The newDocRef variable now contains a reference to the newly created document,
    // including its auto-generated ID
    console.log("New document created with ID:", newDocRef.id);
  };

  const onsubmit = (e) => {
    e.preventDefault();
    if (!campname && !image && !price && !descr) {
      alert("Please enter all fields correctly");
    } else {
      // addNewDocument();
      addDok();
      Navigate("/CampLogin");
    }
  };

  //  // Add data to an existing document
  //     const addDataToDocument = async (documentId, data) => {
  //     try {
  //       const documentRef = db.collection('Camp').doc(documentId); // Get reference to the document
  //       await documentRef.set(data); // Set data to the document
  //       console.log('Data added to document with ID:', documentId);
  //     } catch (error) {
  //       console.error('Error adding data to document:', error);
  //     }
  //   };

  return (
    <div>
      <div className="container2">
        <Navlogin />
        <div className="searchy">
          <form className="ada" >
            <h2>Add New Campground</h2>
            <label>
              <span>Campground Name</span>
              <input
                type="text"
                onChange={(e) => setCampname(e.target.value.trim())}
                value={campname.toLower}
                placeholder="Seven Sisiters Waterfall"
                required
              />
            </label>

            <label>
              <span>Price</span>
              <input
                type="text"
                onChange={(e) => setPrice(e.target.value.trim())}
                value={price.toLower}
                placeholder="$149"
                required
              />
            </label>

            <label>
              <span>Image</span>
              <input
                type="text"
                onChange={(e) => setImage(e.target.value.trim())}
                value={image.toLower}
                placeholder="www.thepinoytraveler.com/2018/01/mt-ulap-diy-dayhike.html"
                required
              />
            </label>
            <label>
              <span>Description</span>
              <textarea
                onChange={(e) => setdescr(e.target.value.trim())}
                value={descr.toLower}
                placeholder="The Seven Sisters is the 39th tallest Waterfall
                              in Norway. The 410-meter tall waterfall consists of seven seperate
                              streams and the tallest of the seven has a free fall that measures 250 meters.
                              The waterfall is located along the Geirangafjorden in Stranda Municipality
                              in More og Romsdale county, Norway."
                required
              />
            </label>

            <button onSubmit={onsubmit}>Add Campground</button>
          </form>

          <Link to="/">
            <img src="Assets/Logo.svg" alt="site logo" className="sity1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
