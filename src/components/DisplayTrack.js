
import { BsMusicNoteBeamed } from 'react-icons/bs';
import thumbnail from '../pages/bcg.jpeg'

const DisplayTrack = ({ currentTrack, audioRef,setDuration,progressBarRef,handleNext,}) => {
  
  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };

    return (
      <div>
        <audio src={currentTrack.src} ref={audioRef} onLoadedMetadata={onLoadedMetadata}onEnded={handleNext} />
        <div className="audio-info">
        <div className="audio-image">
          {thumbnail ? (
            <img src={thumbnail} alt="audio avatar" />
          ) : (
            <div className="icon-wrapper">
              <span className="audio-icon">
                <BsMusicNoteBeamed />
              </span>
            </div>
          )}
        </div>
        <div className="text">
          <p className="title">{currentTrack.name}</p>
         
        </div>
      </div>
      </div>
    );
  };
  export default DisplayTrack;