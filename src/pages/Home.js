"use client";
/* import { Card } from "flowbite-react"; */
import React, { useCallback } from 'react'
import { useEffect,useState} from 'react';
import { FaTrashCan } from "react-icons/fa6";
import { FaCloudUploadAlt } from "react-icons/fa";
import { BsFillFileMusicFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebaseConfig from "../components/firebase";
import { deleteDoc,doc} from "firebase/firestore"; 
import { getStorage, ref, getDownloadURL, list,deleteObject} from "firebase/storage";
//import { tracks } from '../data/tracks'; 

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Create a reference from a Google Cloud Storage URI
const storage = getStorage(app);
const user =sessionStorage.getItem("loggedUser")
const listRef = ref(storage, user);
const db = getFirestore(app);

// Query a reference to a subcollection

 
export default  function Home()  {
 
  /* const [isMusic, isMusicSet] = useState(false);
  const [playing, setPlaying] = useState("");

  const url = "";

  const audioRef = useRef(new Audio(url)); */
 //const [dataToShow, setData] = useState([]);

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
 
 const [allSongs, setAllSongs] = useState([]);
 const [link, setLink] = useState([]);
 
  function toggleMusic (sing)  {
    console.log('the data is', allSongs)
   // let i=0;
    if(sing!==null)
    {/* localStorage["employees"] = (json); */

    /* for( i = 0; i <= allSongs.length-1; i += 1) {
      if(allSongs[i].id === sing) {
          sing = i;
      }
  } */
      //sessionStorage.setItem("tab",JSON.stringify(dataToShow));
      sessionStorage.setItem("tab",JSON.stringify(allSongs));
    sessionStorage.setItem("ind",sing); 
    return ( 
 window.location.href = '/main/audio_player'
) }} ;
    
   
 /* async function extractlink(x)
 {
 const result=
   await getDownloadURL(ref(storage,( x)))
  .then((url) =>  {
     
    x=url;
  
    setLink(url);
    return url
 
  })
  .catch((error) => {
    // Handle any errors
  });
  return result
  
 } */

 /*  function downloadlink(x)
 {
 
  const m = getDownloadURL(ref(storage,x))
  .then((url) => {
    
    x= url;
   
    /* setLink(x);
  return x 
  })
  .catch((error) => {
    // Handle any errors
  });

  
  return m;
  
 }*/

  /* const listSongs =  useCallback(async()=>
 {// Find all the prefixes and items.
   
   let isMounted = true;
   const firstPage = await list(listRef);
   const data =[]
   // Use the result.
   // processItems(firstPage.items)
   // processPrefixes(firstPage.prefixes)
  var i=0;

      firstPage.items.forEach(async (itemRef) => {
       
        var link1 = 'gs://onemusic-f0b73.appspot.com/'+user+'/'+itemRef.name;
         
         getDownloadURL(ref(storage,('/'+user+'/'+itemRef.name)))
        .then((url) => {
          
          data[i].push({src: url})
          setLink(url);
        return url
        })
        .catch((error) => {
          // Handle any errors
        }); 
 
        extractlink(link1);
       //
       //let m = downloadlink(link1).finally(x=>x)
         data.push({id: i, title: itemRef.name, src: link ,date: itemRef.date})
       
        i=i+1;
      });
   // Fetch the second page if there are more elements.
   if (firstPage.nextPageToken) {
     const secondPage = await list(listRef, {
       maxResults: 100,
       pageToken: firstPage.nextPageToken,
     });
     // processItems(secondPage.items)
     // processPrefixes(secondPage.prefixes)
   }
   
     
    setAllSongs(data);
   
   console.log('the songs are',allSongs)

 },[allSongs,link]) */

 function onUpload()
 {
  sessionStorage.setItem("user",user); 
  return ( 
window.location.href = '/main/upload'
) }
 
 
const doFetch = useCallback(async () => {

  
  const firstPage = await list(listRef);
const data =[]
const lien = []
// Use the result.
// processItems(firstPage.items)
// processPrefixes(firstPage.prefixes)

  var i=0;
   firstPage.items.forEach( (itemRef) => {
    
      getDownloadURL(ref(storage,('/'+user+'/'+itemRef.name)))
     .then((url) => {
       
       lien.push(url);
     setLink(lien)
     return url
     })
     .catch((error) => {
       // Handle any errors
     }); 
      
      data.push({id: i, title: itemRef.name,src: link[i],date: itemRef.date});
    
     i=i+1;
   });
// Fetch the second page if there are more elements.
/* if (firstPage.nextPageToken) {
  const secondPage = await list(listRef, {
    maxResults: 100,
    pageToken: firstPage.nextPageToken,
  }); */
  // processItems(secondPage.items)
  // processPrefixes(secondPage.prefixes)
//}
/* return [lien,data]*/
   ;
console.log('the link 2 are',link);
/*  for (i=0;i<data.length;i++)
{  console.log('the link',i,' is',lien[i]);
   var str = link[i];
   data[i].src = str;
}   */
  setAllSongs(data); 
 
console.log('the songs are',allSongs) 

},[link,allSongs]);

  useEffect(() => {
    let isMounted = true;
   
    
  /* var songs = */ doFetch() // start the async work
  

  .catch((err) => {
    if (!isMounted) return; // unmounted, ignore.
    // TODO: Handle errors in your component
    console.error("failed to fetch data", err);
  });

  /* var song=songs[0];
  var lin=songs[1];

  console.log('the link 2 are',lin);
 for (i=0;i<allSongs.length;i++)
{  console.log('the link',i,' is',link[i]);
   var str = link[i];
   data[i].src = str;
}  
  setAllSongs(data); 
 
console.log('the songs are',allSongs) */ 


return () => {
  isMounted = false;
};


},[doFetch] );

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
        <div className='grid grid-flow-row-dense mt-3 grid-cols-2 justify-items-stretch'> 
          {/* <div className='col-span-1'><h5 className=" ml-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Popular
          </h5></div> */}

          <div className='justify-self-end w-fit col-span-1'>
          <IconContext.Provider value={{ color: '#10439F', size: '40px', padding:'1px 1px' }}>
                            
                              <div className="  sm:items-center sm:justify-center  ">
                            
                            < FaCloudUploadAlt className="sm:items-center sm:justify-center mx-6 my-1" onClick={() =>{onUpload()}}/>
                            </div>
                          </IconContext.Provider>
          </div>
        </div>
        <div className="ml-3 mt-2 grid  lg:grid-cols-1 justify-items-center m-auto md:grid-cols-2 md:gap-x-4 grid-col-1 md:px-auto item-stretch ">
        <ol>        
        {allSongs
        .map((tab,index) =>(
          <li>
            <div id="toast-undo"key={index} className="flex items-center w-full  p-4 ml-3 mt-4 mr-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
                
                <IconContext.Provider value={{ color: '#ff0000', size: '40px', padding:'2px 2px' }}>
                            <a href="kk"><div className="  sm:items-center sm:justify-center  mx-5 mt-5 mb-5">
                            
                            < BsFillFileMusicFill className="sm:items-center sm:justify-center mx-6 my-1"/>
                            </div></a>
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
                <button type="button" onClick={() =>{toggleMusic(tab.id)}} className="  ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-undo" aria-label="Close">
                    <span className="sr-only">Play</span>
                    <svg className="pause-icon" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M14,19H18V5H14M6,19H10V5H6V19Z" />
                    </svg>
                </button>
             
                </div>  
                  <IconContext.Provider  value={{ color:'black' , size: '20px', padding:'2px 2px', className: 'heart' }}>
                    <div className="  sm:items-center sm:justify-center  mx-5 mt-5 mb-5">
                    
                    <  FaTrashCan  className="sm:items-center sm:justify-center mx-6 my-1" onClick={() =>{deletefromAll(tab.title,tab.src)}}/>
                    </div>
                  </IconContext.Provider>
            </div>

           
            </li>
        ))}
 </ol>
        </div>
    </div>

  )}

