import React from 'react'
import NavBar from '../NavBar'; // Assurez-vous que le chemin est correct
import Footer from '../Footer';



function Layout({children}) {
  return (
    <>
        <NavBar/>
        {children}
        <Footer/>
    </>
  )
}

export default Layout