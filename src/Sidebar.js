import React from 'react'
import logo from './logo.svg';
import {FaTimes} from 'react-icons/fa'
import {links, social} from './data';

function Sidebar() {
  return (
    <aside className={`sidebar show-sidebar`}>
      <div className="sidebar-header">
        <img src={logo} alt="logo" className='logo'/>
        <button className="close-btn"><FaTimes/></button>
      </div>
      <ul className="links">
        {links.map(link=>{
          const {id, text, url, icon} = link;
          return(
            <li key={id}>
              <a href={url} >{icon} {text}</a>
            </li>
          )
        })}
      </ul>
      <ul className='social-icons'>
        {social.map(social=>{
          const {id, icon, url} = social;
          return(
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default Sidebar
