import React, { useEffect } from 'react'
import {FaBars} from 'react-icons/fa'
import {useGlobalContext} from './context';

function Home() {
  const {openModal, openSidebar} = useGlobalContext();
  // console.log(openModal, openSidebar);  

  return (
    <main>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars/>
      </button>
      <button className="btn" onClick={openModal}>Show Modal</button>
    </main>
  )
}

export default Home
