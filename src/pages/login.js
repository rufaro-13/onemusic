"use client";
import React from "react";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {  Label, TextInput } from "flowbite-react";
/* import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from "../components/firebase"; */
/* const firebaseConfig = {
    apiKey: "AIzaSyApeljgdOjZ651k8a-1ppCWNImHYvcjrmk",
    authDomain: "onemusic-f0b73.firebaseapp.com",
    projectId: "onemusic-f0b73",
    storageBucket: "onemusic-f0b73.appspot.com",
    messagingSenderId: "583930565232",
    appId: "1:583930565232:web:7acd0f9503943214761ab5",
    measurementId: "G-FYLV9F3N27"
  }; */
  
// Initialize Firebase
/* const app = initializeApp(firebaseConfig); */
/* const analytics = getAnalytics(app); */
export default function Login(){

   // firebase.initializeApp();
     
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
    

    const handleEmail = (event) => {
        setEmail(event.target.value);
      };
    
      const handlePassword = (event) => {
        setPassword(event.target.value);
      };
    const handleSubmit = (e) => {
        e.preventDefault();
      
    

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;

        if(user!==0)
              {sessionStorage.setItem("loggedUser",user.uid); 
             return (  
          /*  navigate('/destination'); */
          window.location.href = '/home' )}

       })
      .catch((error) => {
       /*  const errorCode = error.code;
        const errorMessage = error.message; */
      });
     };


  return (
    <section className="mt-5 max-h-screen">
      
      <div className="container h-full px-6 py-2">
        <div className=" shadow-lg bg-white md:flex h-dvh justify-items-center w-2/3 md:px-5 pt-10 item-stretch ">
          {/* <!-- Left column container with background--> */}
            <div className="mb-12 mx-5 flex-1 w-full md:w-1/2 bg-white border-2 pt-12 md:mb-0 max-w-full">
                <img  src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" alt="logo" className="w-2/3" 
                />
            </div>

          {/* <!-- Right column container with form --> */}
            <div className="justify-items-stretch w-full md:w-1/2 h-dvh bg-white rounded shadow-lg mt-2 md:pl-12 md:pr-10 pt-8 flex-1 md:max-w-1/2 max-w-full">
            <div className="w-full md:w-68 bg-white rounded shadow-lg pl-12 pr-10 h-full flex-none max-w-full">
                <form action="http://localhost:8000/server.php"
                method="post" className="mx-5 pt-2 lg:pt-5" 
                onSubmit={(event) => handleSubmit(event)}>
                {/* <!-- Email input --> */}
                    <div className="mx-5 w-4/5" >
                        <div className="mb-2 block">
                        <Label htmlFor="email" value="Your email" />
                        </div>
                        <TextInput className="w-3/4" id="email" type="email" placeholder="name@flowbite.com" required 
                        
                        value={email}
                        onChange={handleEmail}
                        />
                    </div>
                    <div className="mx-5 w-3/4">
                        <div className="mb-2 block">
                        <Label htmlFor="password1" value="Your password" />
                        </div>
                        <TextInput className="w-3/4" id="password1" type="password" required  value={password}
            onChange={handlePassword}/>
                    </div>

                {/* <!-- Remember me checkbox --> */}
                <div className="mb-6 md:flex items-center justify-between">
                        <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                            <input
                                className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                                type="checkbox"
                                value=""
                                id="exampleCheck3"
                                defaultChecked
                            />
                            <label
                                className="inline-block pl-[0.15rem] hover:cursor-pointer"
                                htmlFor="exampleCheck3">
                                Remember me
                            </label>
                        </div>

                        {/* <!-- Forgot password link --> */}
                        <a
                        href="#!"
                        className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                        >
                        Terms and conditions
                        </a>
                </div>

                    {/* <!-- Submit button --> */}

                    {/*  <TERipple rippleColor="light" className="w-full"> */}
                        <button
                        type="submit"
                        className="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-green-500 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                        >
                        Login
                        </button>
                    {/* </TERipple> */}

                    {/* <!-- Divider --> */}
                    <div className="my-2 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                        <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                        OR
                        </p>
                    </div>

                    {/* <!-- Social login buttons --> */}
                    {/* <TERipple rippleColo r="light" className="w-full"> */}
                    <div className="mx-5 pt-2 md:pt-5 md:w-1/2 w-full" >
                        <a
                        className="mb-3 md:flex w-full items-center justify-center rounded bg-primary md:px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                        style={{ backgroundColor: "#3b5998" }}
                        href="#!"
                        role="button"
                        >
                        {/* <!-- Facebook --> */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="mr-2 h-3.5 w-3.5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                        Continue with Facebook
                        </a>
                    </div>
                    {/* </TERipple>
                    <TERipple rippleColor="light" className="w-full"> */}
                     <div className="mx-5 pt-2 md:pt-5 md:w-1/2 w-full" >
                        <a
                        className="mb-3 md:flex w-full items-center justify-center rounded bg-info md:px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
                        style={{ backgroundColor: "#55acee" }}
                        href="#!"
                        role="button"
                        >
                        {/* <!-- Twitter --> */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="mr-2 h-3.5 w-3.5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                        Continue with Twitter
                        </a></div>
                        {/* </TERipple> */}
                    </form>
                    
                    </div>
            </div>
        </div>
      </div>
    </section>
  );
}