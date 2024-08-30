import React from 'react'
import TopBar from './TopBar'

function NavBar() {
  return (

<>
    <TopBar/>
    <header className=' d-flex flex-column flex-md-row  justify-content-around align-items-center mt-5 mt-5 pb-3 border-bottom'>
    <h1>EasyTravel</h1>
    <nav>
        <ul className='d-flex list-unstyled '>
            <li><a href="#home" className='mx-3 text-decoration-none'>Home</a></li>
            <li><a href="#about"  className='mx-3 text-decoration-none'>About</a></li>
            <li><a href="#services"  className='mx-3 text-decoration-none'>Services</a></li>
            <li><a href="#contact" className='text-decoration-none'>Contact</a></li>
        </ul>
    </nav>
<div className='disp-none mb '>

<button className='btn btn-agency  mx-3'>Ajouter votre agence</button>
<button className='btn btn-primary mx-3 '>Se connecter</button>
<button className='btn btn-dark   '>S'inscrire</button>
</div>
 
</header>
</>
  )
}

export default NavBar