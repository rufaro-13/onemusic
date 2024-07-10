"use client";
import {React,useState }from 'react'
import { Label } from "flowbite-react";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../components/firebase";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { doc, setDoc,getFirestore } from "firebase/firestore"; 

const app = initializeApp(firebaseConfig);
// Create a reference from a Google Cloud Storage URI
const storage = getStorage(app);
const user = sessionStorage.getItem("user");
const db = getFirestore(app);

export default function Upload() {
    const [file, setFile] = useState([]);
    
  

    let metadata = {
      contentType: 'audio/mp3',
    };// 'file' comes from the Blob or File API

    function fire(src,title)
    {
      const cityRef = doc(db,'currentUser', user, 'All',title);
      setDoc(cityRef, { src: src,title:title,fav:false }, { merge: true });
    }
   
    const handleSubmit = (e) => {
        
        e.preventDefault();

        

    for (let index = 0; index < file.length; index++) {
      
       const blob = new Blob([file[index]],{type: 'audio/mp3'})
    
        const storageRef = ref(storage, user+'/'+file[index].name);
    uploadBytes(storageRef, blob,metadata).then((snapshot) => {
      console.log('Uploaded a blob or file!');
      console.log('the song is',blob);
      console.log('the list is',file)
    })

    let srs = 'gs://onemusic-f0b73.appspot.com/'+user+'/'+file[index].name;
    fire(srs,file[index].name)
    
    ;}
}

  return (
    <div className="flex w-full items-center justify-center">
        <form className=' mt-3 w-4/5 h-4/5 max-w-md mx-auto'onSubmit={(event) => handleSubmit(event)}>
      <Label
        htmlFor="dropzone-file"
        className="flex h-80 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div className="flex flex-col items-center justify-center pb-6 pt-5">
          <svg
            className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload</span> or drag and drop
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50
         dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          aria-describedby="user_avatar_help" id="user_avatar" type="file" multiple
                        onChange={(e) => 
                          {
                         
                          const output = document.getElementById("output");
                          const filepicker = document.getElementById("user_avatar");

                          filepicker.addEventListener("change", (event) => 
                          {
                              //const files = event.target.files;
                              output.textContent = "";

                              for (let i = 0; i < event.target.files.length; i++) 
                              {
                                const li = document.createElement("li");
                                li.textContent = event.target.files[i].name;
                                output.appendChild(li);
                                //tab.push(file2);
                              }
                           });
                              /* const [file1] = e.target.files;
                              setFile((file) => [...file, file1])
                              console.log("songs =",tab) */
                              const newFiles = []
                              for(let i = 0; i < e.target.files.length; i++){
                                 newFiles.push(e.target.files[i])
                                 console.log("songs =",newFiles);
                              }
                              setFile(newFiles)
                              
                         }} />
          <div>                  
            <p>List of selected files:</p><br/>
            <ul id="output"></ul>
            
          </div>

      </Label>
      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">upload</button>
      </form>
    </div>
  );
}
