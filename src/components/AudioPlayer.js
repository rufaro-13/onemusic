import { useState,useRef} from 'react';
//import { tracks } from '../data/tracks'; 
import DisplayTrack from './DisplayTrack';
//import Dropdown from "react-bootstrap/Dropdown";
import Controls from './Controls';
import ProgressBar from './ProgressBar';
import { FaHeart } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import { BsFillFileMusicFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../components/firebase";
//import { IoMdMore } from "react-icons/io";
//import { getStorage, ref, uploadBytes } from "firebase/storage";
import { doc, setDoc,getFirestore,deleteDoc,  getDocFromServer} from "firebase/firestore"; 
import { getStorage, ref, deleteObject } from "firebase/storage";
import 'firebase/firestore';
// Create a reference from a Google Cloud Storage URI
const app = initializeApp(firebaseConfig);
// Create a reference from a Google Cloud Storage URI

const user = sessionStorage.getItem("loggedUser");
const db = getFirestore(app);
const storage = getStorage(app);

var list =JSON.parse(sessionStorage.getItem("tab"))
var sng =parseInt(sessionStorage.getItem("ind")) 
      const tracks = list
  //    const favourites = []
const AudioPlayer = () => {
 // const tracks = list;
// console.log('the data is', tracks)
  const [trackIndex, setTrackIndex] = useState(sng);
  const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  //const [available, setAvailable] = useState(0);
 /*  console.log('the id is', trackIndex)
  console.log('the song is', tracks[trackIndex].src) */
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

  
/* const colourChange = async () => {
   for(let i = 0;i<tracks.length;i++) {
let color = doc(db,'currentUser', user, 'Favourites',tracks[i].title);
let docSnap = await getDoc(color);

 
    if (docSnap.exists()) {
    tracks[i].fav ='#EB1D36';
    favourites[i] = '#EB1D36';
   
  }else
  {
    tracks[i].fav = '#CFD2CF';
    favourites[i] = '#CFD2CF';
    }
}};  */

const tab = []
const colourChange =  async  (x) => {
 
let color = doc(db,'currentUser', user, 'Favourites',x);
//var color = db.collection('currentUser').doc(user).collection('Favourites').doc(x);
 let docSnap = await getDocFromServer(color);

   if (!docSnap.exists()) 
    {
      //console.log(x,'the song is absent');
     // const val = 0
     tab.push(0)}
  
 else
 
  {// console.log(x,'the song is there');
    //console.log("Document data:", docSnap.data());
    tab.push(1)}
//return available;
} 
//const tab = [1]
const col=  (x,id)=>{
 colourChange(x)
  //let y= colourChange(x).then(function(result)  {return result});
  //console.log(y)*/
   /* let y = tab[0] ;
  console.log('y is',tab[0])*/
  return tab[id];  
}



/* async function createPlaylist(song,source)
    {

      let foo = prompt('Type here');

      const plist = doc(db,'currentUser', user, foo,song);
      setDoc(plist, { src: source,title: song }, { merge: true });

       document.getElementById("playlist")
                .innerHTML +=
                "<Dropdown.Item>"+foo+"</Dropdown.Item><br/>"; 


    } */
  const addToFavourites = async (x,y) => {

    var song =x;
    
    console.log('the x is', x);
    
    const cityRef = doc(db,'currentUser', user, 'Favourites',song);
      setDoc(cityRef, { src: y,title: x }, { merge: true });
      alert("added successfully!");
  
  }

  const deletefromAll = async (x,y) => {

    //var song =x;
    
    console.log('the x is', x);
    

    await deleteDoc(doc(db,'currentUser', user, 'Favourites',x));

      
    // Create a reference to the file to delete
    const song = ref(storage, user+'/'+x);

    // Delete the file
    deleteObject(song).then(() => {
       alert("File deleted successfully");
    }).catch((error) => {
      // Uh-oh, an error occurred!
    });

     
  
  }

  //colourChange();
 /*  console.log('the x is',tracks);
  console.log('the y is', favourites); */
     
  

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
                
              
                <IconContext.Provider value={{ color: '#FF0000', size: '40px', padding:'1px 1px' }}>
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

                  
                    {/* <IconContext.Provider  value={{ color: tab.fav, size: '20px', padding:'2px 2px', className: 'heart' }}>
                            <div className="  sm:items-center sm:justify-center  mx-5 mt-5 mb-5">
                            
                            < FaHeart  className="sm:items-center sm:justify-center mx-6 my-1" onClick={() =>{addToFavourites(tab.title,tab.src)}}/>
                            </div>
                          </IconContext.Provider> */}
                         
                   {/* {  console.log(col(tab.title),'the song is',tab.title)} */}
                     

                     {col(tab.title,tab.id) === 1 ? <IconContext.Provider  value={{ color: '#EB1D36', size: '20px', padding:'2px 2px', className: 'heart' }}>
                            <div className="  sm:items-center sm:justify-center  mx-5 mt-5 mb-5">
                            
                            < FaHeart  className="sm:items-center sm:justify-center mx-6 my-1" onClick={() =>{addToFavourites(tab.title,tab.src)}}/>
                            </div>
                          </IconContext.Provider>
                    
                   
                    :
                    <IconContext.Provider  value={{ color:'#CFD2CF' , size: '20px', padding:'2px 2px', className: 'heart' }}>
                            <div className="  sm:items-center sm:justify-center  mx-3 mt-5 mb-5">
                            
                            < FaHeart  className="sm:items-center sm:justify-center mx-6 my-1" onClick={() =>{addToFavourites(tab.title,tab.src)}}/>
                            </div>
                          </IconContext.Provider>
                    
                    } 
                    <IconContext.Provider  value={{ color:'black' , size: '20px', padding:'2px 2px', className: 'heart' }}>
                    <div className="  sm:items-center sm:justify-center  mx-5 mt-5 mb-5">
                    
                    <  FaTrashCan  className="sm:items-center sm:justify-center mx-6 my-1" onClick={() =>{deletefromAll(tab.title,tab.src)}}/>
                    </div>
                  </IconContext.Provider>


     {/*  {(() => {
        if (colourChange(tab.title) !== 1) { return (
          
            <IconContext.Provider  value={{ color: '#CFD2CF', size: '20px', padding:'2px 2px', className: 'heart' }}>
                            <div className="  sm:items-center sm:justify-center  mx-5 mt-5 mb-5">
                            
                            < FaHeart  className="sm:items-center sm:justify-center mx-6 my-1" onClick={() =>{addToFavourites(tab.title,tab.src)}}/>
                            </div>
                          </IconContext.Provider>)
          
        }
        
        else 
        { return  (
              <IconContext.Provider  value={{ color:'#EB1D36' , size: '20px', padding:'2px 2px', className: 'heart' }}>
                <div className="  sm:items-center sm:justify-center  mx-5 mt-5 mb-5">
                
                < FaHeart  className="sm:items-center sm:justify-center mx-6 my-1" onClick={() =>{addToFavourites(tab.title,tab.src)}}/>
                </div>
              </IconContext.Provider>)

        }
        
        })()} */}





                
             
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