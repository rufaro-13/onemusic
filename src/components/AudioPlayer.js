import { useState,useRef} from 'react';
/* import { tracks } from '../data/tracks'; */
import DisplayTrack from './DisplayTrack';
import Controls from './Controls';
import ProgressBar from './ProgressBar';
/* import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebaseConfig from "./firebase";
import { collection,  getDocs} from "firebase/firestore"; 
import { getStorage, ref, getDownloadURL } from "firebase/storage"; */



// Initialize Firebase
/*const app = initializeApp(firebaseConfig);
// Create a reference from a Google Cloud Storage URI
const storage = getStorage();


var user =sessionStorage.getItem("loggedUser")
const db = getFirestore(app); */

// Query a reference to a subcollection
var list =JSON.parse(sessionStorage.getItem("tab"))
//let arr = list.split({})
var sng =parseInt(sessionStorage.getItem("ind"))
const tracks = list;
    console.log('the data is', tracks) 
const AudioPlayer = () => {
   /*  const [dataToShow, setData] = useState([0]);
    const [link, setLink] = useState(""); */
   
    /* useEffect(() => {
        let isMounted = true;
      
        const doFetch = async () => {
      const querySnapshot =await  getDocs(collection(db, "currentUser", user,"favourites")); 
      const data = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        //console.log(doc.id, " => ", doc.data());
        
        getDownloadURL(ref(storage, (doc.data().song)))
      .then((url) => { */
        /* data.push({ name: doc.data().name, song: url, date: doc.data().date}); */
      /*   setLink(url);
     return url
      })
      .catch((error) => {
        // Handle any errors
      });
      
        data.push({ name: doc.data().name, song: link, date: doc.data().date});
      
      }); 
    // console.log('the data is', dataToShow) 
  if (isMounted) setData(data);
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
    
    
    }, [link]);
    // states
 */
    const tracks = list;
    console.log('the data is', tracks) 

   // let obj = tracks.find(o => o.id ===parseInt(sng-1));
console.log("the id is",sng);
  const [trackIndex, setTrackIndex] = useState(sng);
  const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex] );
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  // reference
 const audioRef = useRef();
  const progressBarRef = useRef();
 
  const handleNext = () => {
    if (trackIndex >=tracks.length - 1) {
      setTrackIndex(0);
      setCurrentTrack(tracks[0]);
    } else {
      setTrackIndex((prev) => prev + 1);
      setCurrentTrack(tracks[trackIndex + 1]);
    }
  };

  return (
    <div className="audio-player">
    <div className="inner">
      <DisplayTrack {...{currentTrack,audioRef,setDuration,progressBarRef,handleNext, }}/>
      <Controls {...{audioRef,progressBarRef,duration,setTimeProgress,tracks,trackIndex,setTrackIndex,setCurrentTrack, handleNext,}} />
      <ProgressBar  {...{ progressBarRef, audioRef, timeProgress, duration }}/>
    </div>
  </div>
  );
};
export default AudioPlayer;