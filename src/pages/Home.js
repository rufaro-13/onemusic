"use client";
/* import { Card } from "flowbite-react"; */
import React from 'react'
import { BsFillFileMusicFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebaseConfig from "../components/firebase";
import { collection,  getDocs} from "firebase/firestore"; 

// Initialize Firebase
const app = initializeApp(firebaseConfig);


var user =sessionStorage.getItem("loggedUser")
const db = getFirestore(app);
let querySnapshot = await getDocs(collection(db, "currentUser", user,"favourites")); 
// Query a reference to a subcollection
 
 function Home() {
 
  
  const data = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    //console.log(doc.id, " => ", doc.data());

    data.push({ name: doc.data().name, song: doc.data().song, date: doc.data().date})
  }); 
  //setData(data);

  function play(song) {
    var audio = new Audio(song);
    audio.play();
  }
   
  return (
    <div>

            <h5 className=" ml-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                Popular
            </h5>
        <div className="ml-3 mt-2 grid  lg:grid-cols-3 justify-items-center m-auto md:grid-cols-2 md:gap-x-4 grid-col-1 md:px-auto item-stretch ">
                  
        {data
        .map((tab,index) =>(
        
            <div id="toast-undo" class="flex items-center w-full max-w-2xl p-4 ml-3 mt-4 mr-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
                
                <IconContext.Provider value={{ color: '#ff0000', size: '40px', padding:'2px 2px' }}>
                            <a href="kk"><div class="  sm:items-center sm:justify-center  mx-5 mt-5 mb-5">
                            
                            < BsFillFileMusicFill class="sm:items-center sm:justify-center mx-6 my-1"/>
                            </div></a>
                          </IconContext.Provider>
                <div class="mx 3 text-sm font-normal">
                  {tab.name}
                </div>
                <div class="flex items-center ms-auto space-x-2 rtl:space-x-reverse">
                    <a class="text-sm font-medium text-blue-600 p-1.5 hover:bg-blue-100 rounded-lg dark:text-blue-500 dark:hover:bg-gray-700" href="/">Undo</a>
                    <button type="button"onClick={() =>{play(tab.song)}} class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-undo" aria-label="Close">
                    <span class="sr-only">Play</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
                          <polygon class="play-btn__svg" points="9.33 6.69 9.33 19.39 19.3 13.04 9.33 6.69"/>
                          <path class="play-btn__svg" d="M26,13A13,13,0,1,1,13,0,13,13,0,0,1,26,13ZM13,2.18A10.89,10.89,0,1,0,23.84,13.06,10.89,10.89,0,0,0,13,2.18Z"/>
                        </svg>
                </button>
                </div>
            </div>

        ))}

        </div>
    </div>


  )
}

export default Home