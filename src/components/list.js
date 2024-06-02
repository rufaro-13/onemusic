import React from 'react'
import { BsFillFileMusicFill } from "react-icons/bs";
import { IconContext } from "react-icons";


var list =JSON.parse(sessionStorage.getItem("tab"))
const tracks = list;
function List(
    
    setTrackIndex,
   ) {
  return (
    <div>
        
        <div className="ml-3 mt-2 grid  lg:grid-cols-3 justify-items-center m-auto md:grid-cols-2 md:gap-x-4 grid-col-1 md:px-auto item-stretch ">
        <ol>        
        {tracks
        .map((tab,index) =>(
          <li>
            <div id="toast-undo"key={index} className="flex items-center w-full max-w-2xl p-4 ml-3 mt-4 mr-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
                
                <IconContext.Provider value={{ color: '#ff0000', size: '40px', padding:'2px 2px' }}>
                            <a href="kk"><div className="  sm:items-center sm:justify-center  mx-5 mt-5 mb-5">
                            
                            < BsFillFileMusicFill className="sm:items-center sm:justify-center mx-6 my-1"/>
                            </div></a>
                          </IconContext.Provider>
                <div className="mx 3 text-sm font-normal">
                  {tab.title}
                </div>
                <div className="flex items-center ms-auto space-x-2 rtl:space-x-reverse">
                    <a className="text-sm font-medium text-blue-600 p-1.5 hover:bg-blue-100 rounded-lg dark:text-blue-500 dark:hover:bg-gray-700" href="/">Undo</a>
                    <button type="button" onClick={() =>{setTrackIndex(tab.id)}} className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-undo" aria-label="Close">
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
             
                </div>   
            </div>
            </li>
        ))}
 </ol>
        </div>
    </div>
  )
}

export default List