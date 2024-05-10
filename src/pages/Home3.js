"use client";
/* import { Card } from "flowbite-react"; */
import React from 'react'
import { useEffect,useState} from 'react';
import { BsFillFileMusicFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebaseConfig from "../components/firebase";
import { collection,  getDocs} from "firebase/firestore"; 
import { getStorage, ref, getDownloadURL } from "firebase/storage";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Create a reference from a Google Cloud Storage URI
const storage = getStorage();


var user =sessionStorage.getItem("loggedUser")
const db = getFirestore(app);

// Query a reference to a subcollection

 
export default  function Home()  {
 
  /* const [isMusic, isMusicSet] = useState(false);
  const [playing, setPlaying] = useState("");
const [link, setLink] = useState("");
  const url = "";

  const audioRef = useRef(new Audio(url)); */
 const [dataToShow, setData] = useState([]);
 const [link, setLink] = useState("");
 
  function toggleMusic (sing)  {
    console.log('the data is', dataToShow)
    let i=0;
    if(sing!==0)
    {/* localStorage["employees"] = (json); */

    for( i = 0; i < dataToShow.length; i += 1) {
      if(dataToShow[i].id === sing) {
          sing = i;
      }
  }
      sessionStorage.setItem("tab",JSON.stringify(dataToShow));
    sessionStorage.setItem("ind",sing); 
    return ( 
      window.location.href = '/main/audio_player'
) }} ;
    
   
 function extractlink(x)
 {
 
  getDownloadURL(ref(storage, x))
  .then((url) => {
    
    x=url;
   
    setLink(url);
 //return url
  })
  .catch((error) => {
    // Handle any errors
  });
  
  return x;
  
 }

 
  useEffect(() => {
    let isMounted = true;
  
    const doFetch = async () => {
  let querySnapshot =await  getDocs(collection(db,'currentUser', user,"All")); 
  const data = [];
  console.log("there are",querySnapshot.size,"documents");
  var i=0
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    //console.log(doc.id, " => ", doc.data());
  
   /*  getDownloadURL(ref(storage, (doc.data().song)),doc)
  .then((url) => {
    
    data.push({id: doc.data().id, name: doc.data().name, src: url, date: doc.data().date});
   
    setLink(url);
 //return url
  })
  .catch((error) => {
    // Handle any errors
  }); 
   */
 let m = extractlink(doc.data().src)
 data.push({id: i, name: doc.data().title, src: link});
 i=i+1;
  });
  if (isMounted) setData(data); 
  console.log('the data is', dataToShow)

};
  doFetch() // start the async work
  .catch((err) => {
    if (!isMounted) return; // unmounted, ignore.
    // TODO: Handle errors in your component
    console.error("failed to fetch data", err);
  });

return () => {
  isMounted = false;
};


}, );

/* const play = () => {
    setPlaying(true);
    audioRef.current.play();
  };

  const pause = () => {
    setPlaying(false);
    audioRef.current.pause();
  };
 */
  /* function play(url) {
   // const gsReference = ref(storage, song);
   var audio = new Audio(url);
   audio.play(); */
  /*  if(turn.current===0){
    getDownloadURL(ref(storage, song))
  .then((url) => {
    console.log("the link", url);

    // Or inserted into an <img> element
    /* const img = document.getElementById('myimg');
    img.setAttribute('src', url); *//* var audio = new Audio(url); */
   /*  audio.play();
  })
  .catch((error) => {
    // Handle any errors
  });} */ 

    
  return (
    <div>

            <h5 className=" ml-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                Popular
            </h5>
        <div className="ml-3 mt-2 grid  lg:grid-cols-3 justify-items-center m-auto md:grid-cols-2 md:gap-x-4 grid-col-1 md:px-auto item-stretch ">
        <ol>        
        {dataToShow
        .map((tab,index) =>(
          <li>
            <div id="toast-undo"key={index} className="flex items-center w-full max-w-2xl p-4 ml-3 mt-4 mr-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
                
                <IconContext.Provider value={{ color: '#ff0000', size: '40px', padding:'2px 2px' }}>
                            <a href="kk"><div className="  sm:items-center sm:justify-center  mx-5 mt-5 mb-5">
                            
                            < BsFillFileMusicFill className="sm:items-center sm:justify-center mx-6 my-1"/>
                            </div></a>
                          </IconContext.Provider>
                <div className="mx 3 text-sm font-normal">
                  {tab.name}
                </div>
                <div className="flex items-center ms-auto space-x-2 rtl:space-x-reverse">
                    <a className="text-sm font-medium text-blue-600 p-1.5 hover:bg-blue-100 rounded-lg dark:text-blue-500 dark:hover:bg-gray-700" href="/">Undo</a>
                    <button type="button" onClick={() =>{toggleMusic(tab.id)}} className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-undo" aria-label="Close">
                    <span className="sr-only">Play</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
                      <polygon className="play-btn__svg" points="9.33 6.69 9.33 19.39 19.3 13.04 9.33 6.69"/>
                      <path className="play-btn__svg" d="M26,13A13,13,0,1,1,13,0,13,13,0,0,1,26,13ZM13,2.18A10.89,10.89,0,1,0,23.84,13.06,10.89,10.89,0,0,0,13,2.18Z"/>
                    </svg>
                </button>
                <button type="button" onClick={() =>{toggleMusic(tab.id)}} className="  ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-undo" aria-label="Close">
                    <span className="sr-only">Play</span>
                    <svg className="pause-icon" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M14,19H18V5H14M6,19H10V5H6V19Z" />
                    </svg>
                </button>
             
                </div>   
            </div>
            </li>
        ))}
 </ol>
        </div>
    </div>

  )}

