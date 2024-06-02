import { useState,useRef} from 'react';
//import { tracks } from '../data/tracks'; 
import DisplayTrack from './DisplayTrack';
import Controls from './Controls';
import ProgressBar from './ProgressBar';
import { FaHeart } from "react-icons/fa";
import { BsFillFileMusicFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../components/firebase";
//import { getStorage, ref, uploadBytes } from "firebase/storage";
import { doc, setDoc,getFirestore,updateDoc } from "firebase/firestore"; 

// Create a reference from a Google Cloud Storage URI
const app = initializeApp(firebaseConfig);
// Create a reference from a Google Cloud Storage URI

const user = sessionStorage.getItem("user");
const db = getFirestore(app);
var list =JSON.parse(sessionStorage.getItem("tab"))
var sng =parseInt(sessionStorage.getItem("ind")) 
      const tracks = list
const AudioPlayer = () => {
  //const tracks = list;
 console.log('the data is', tracks)
  const [trackIndex, setTrackIndex] = useState(sng);
  const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  console.log('the id is', trackIndex)
  console.log('the song is', tracks[trackIndex].src)
  // reference
  const audioRef = useRef();
  const progressBarRef = useRef();

  const handleNext = () => {
    if (trackIndex >= tracks.length - 1) {
      setTrackIndex(0);
      setCurrentTrack(tracks[0]);
    } else {
      setTrackIndex((prev) => prev + 1);
      setCurrentTrack(tracks[trackIndex + 1]);
    }
  };

  const toggleMusic = (x) => {
    
      setTrackIndex(x);
      setCurrentTrack(tracks[trackIndex]);
    
  };


  /* for(let i = 0;i<tracks.length;i++) {
const color = doc(db,'currentUser', user, 'Favourites',i.title);

color.get().then((docSnapshot) => {
    if (docSnapshot.exists) {
    tracks[i].fav = "red";
   
  }else
  {
    tracks[i].fav = "grey";

  }
})}; */
  

  const addToFavourites = async (x,y) => {
    
    console.log('the x is', x)
    const cityRef = doc(db,'currentUser', user, 'Favourites',x);
      setDoc(cityRef, { src: y,title:x }, { merge: true });
      const colourset = doc(db,'currentUser', user, 'All',x);
      await updateDoc(colourset, { fav: true });
    // .heart {  
     // color: #ff0000;
     //}
  
};

  return (
    <div className="audio-player">
    <div className="inner">
    <DisplayTrack
            {...{currentTrack, audioRef,setDuration,progressBarRef, handleNext,
            }}
          />
          <Controls {...{ audioRef, progressBarRef, duration,setTimeProgress,tracks,trackIndex,setTrackIndex, setCurrentTrack,handleNext, }}/>
          <ProgressBar {...{ progressBarRef, audioRef, timeProgress, duration }}/>

<div className="ml-3 mt-2 grid  lg:grid-cols-1 justify-items-center m-auto md:grid-cols-2 md:gap-x-4 grid-col-1 md:px-auto item-stretch ">
        <ol>        
        {tracks
        .map((tab,index) =>(
          <li>
            <div id="toast-undo"key={index} className="flex items-center w-full max-w-2xl p-2 ml-2 mt-4 mr-3 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
                
                <IconContext.Provider value={{ color: '#ff0000', size: '40px', padding:'1px 1px' }}>
                           <div className="  sm:items-center sm:justify-center  mx-5 mt-2 mb-2">
                            
                            < BsFillFileMusicFill className="sm:items-center sm:justify-center mx-6 my-1"/>
                            </div>
                          </IconContext.Provider>
                <div className="mx 3 text-sm font-normal">
                  {tab.title}
                </div>
                <div className="flex items-center ms-auto space-x-2 rtl:space-x-reverse">
                    
                    <button type="button" onClick={() =>{toggleMusic(tab.id)}} className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-undo" aria-label="Close">
                    <span className="sr-only">Play</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
                      <polygon className="play-btn__svg" points="9.33 6.69 9.33 19.39 19.3 13.04 9.33 6.69"/>
                      <path className="play-btn__svg" d="M26,13A13,13,0,1,1,13,0,13,13,0,0,1,26,13ZM13,2.18A10.89,10.89,0,1,0,23.84,13.06,10.89,10.89,0,0,0,13,2.18Z"/>
                    </svg>
                </button>
                <button type="button" onClick={() =>{setTrackIndex(tab.id)}} className="  ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-undo" aria-label="Close">
                    <span className="sr-only">Play</span>
                    <svg className="pause-icon" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M14,19H18V5H14M6,19H10V5H6V19Z" />
                    </svg>
                </button>

                
                

                <IconContext.Provider  value={{ color: tab.fav, size: '20px', padding:'2px 2px', className: 'heart' }}>
                            <div className="  sm:items-center sm:justify-center  mx-5 mt-5 mb-5">
                            
                            < FaHeart className="sm:items-center sm:justify-center mx-6 my-1" onClick={() =>{addToFavourites(tab.title,tab.src)}}/>
                            </div>
                          </IconContext.Provider>
             
                </div>   
            </div>
            </li>
        ))}
 </ol>
        </div>


    </div>
  </div>
  );
};
export default AudioPlayer;