import React, { useState } from 'react'  // eslint-disable-line no-unused-vars
import { Link } from 'react-router-dom'


const Navbar = () => {

  return (
    <section className='relative text-white  z-50'>
     
          <div className='flex items-center text-2xl h-14 text-white'>
            <Link to="/notice" ><img className=" max-w-[200px] mt-20 " id="logo" src="/PROSOTERIA.svg" width="100%"  alt="logo" /></Link>
          </div>
    </section>
  )
}

export default Navbar