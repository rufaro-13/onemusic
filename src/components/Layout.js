import React from 'react'
import Footer from './Footer';
import NavigBar from './NavigBar';
import {Outlet} from "react-router-dom";

function Layout() {
  return (
    <>
    <NavigBar />
    <Outlet />
    <Footer />
 </>
  )
}

export default Layout