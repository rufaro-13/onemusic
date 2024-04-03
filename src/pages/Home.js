"use client";
import { Card } from "flowbite-react";
import React from 'react'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Home() {

    const navigate = useNavigate();
/*   const userData = JSON.parse(sessionStorage.getItem("userData")); */
  /* const username = userData?.username; */

  useEffect(() => {
    const loggedIn = sessionStorage.getItem("loggedIn");
    if (!loggedIn) {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <div>

            <h5 className=" ml-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                Popular
            </h5>
        <div className="ml-3 mt-2 grid  lg:grid-cols-3 justify-items-center m-auto md:grid-cols-2 md:gap-x-4 grid-col-1 md:px-auto item-stretch ">
        
            <Card
            className="max-w-sm"
            imgAlt="Meaningful "
            imgSrc="/images/blog/image-1.jpg"
            >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            </Card>
        </div>
    </div>


  )
}

export default Home