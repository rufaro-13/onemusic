import { useState,useRef} from 'react';
//import { tracks } from '../data/tracks'; 
import DisplayTrack from './DisplayTrack';
import Controls from './Controls';
import ProgressBar from './ProgressBar';

// Create a reference from a Google Cloud Storage URI
/* const storage = getStorage();



const db = getFirestore(app);  */

// Query a reference to a subcollection
/* 
let arr = list.split({})
var user =sessionStorage.getItem("loggedUser")
//const tracks = list;*/
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

  return (
    <div className="audio-player">
    <div className="inner">
    <DisplayTrack
            {...{
              currentTrack,
              audioRef,
              setDuration,
              progressBarRef,
              handleNext,
            }}
          />
          <Controls
            {...{
              audioRef,
              progressBarRef,
              duration,
              setTimeProgress,
              tracks,
              trackIndex,
              setTrackIndex,
              setCurrentTrack,
              handleNext,
            }}
          />
          <ProgressBar
            {...{ progressBarRef, audioRef, timeProgress, duration }}
          />
    </div>
  </div>
  );
};
export default AudioPlayer;