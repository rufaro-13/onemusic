import React from 'react'
/* import {user} from './Home' */
//import { doc, setDoc } from "firebase/firestore"; 
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { IconContext } from "react-icons";
/* import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebaseConfig from "../components/firebase";
import { useState} from 'react'; */


//const app = initializeApp(firebaseConfig);
//const db = getFirestore(app);
function Playlist() {

   // const [link, setLink] = useState("");

    async function createPlaylist()
    {
// Add a new document in collection "cities"
/* await setDoc(doc(db, user, "LA"), {
    name: "Los Angeles",
    state: "CA",
    country: "USA"
  }); */
    }
  return (
    <div className='h-screen w-screen bg-home bg-center bg-no-repeat   bg-blend-multiply bg-cover'>
        
        <div className=' mt-5  grid grid-flow-row-dense  grid-cols-2 justify-items-stretch'> 
        <div className='col-span-1'><h5 className="mt-5 ml-3 text-xl font-bold tracking-tight text-yellow-300 dark:text-white">
              My playlists
          </h5></div>

          <div className='justify-self-end w-fit col-span-1'>
          <IconContext.Provider value={{ color: '#FFEA20', size: '32px', padding:'1px 1px' }}>
                            
                              <div className="  sm:items-center sm:justify-center  ">
                            
                            < MdOutlinePlaylistAdd  className="sm:items-center sm:justify-center mx-6 my-1" onClick={() =>{createPlaylist()}}/>
                            </div>
                          </IconContext.Provider>
          </div>
        </div>
        
        <div className=" mt-2 mx-5 justify-items-center  px-auto  ">
            <div class="max-w-sm  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">favourites</h5>
            
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                
            </div>
        </div>
    </div>
  )
}

export default Playlist