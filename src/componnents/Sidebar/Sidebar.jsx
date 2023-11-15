import   './Sidebar.css'
import {FaBars} from 'react-icons/fa'
import logo from  './../../images/logo.svg'
import blogger from  './../../images/blogger.svg'
import gallery from './../../images/gallery.svg'
import lamp from './../../images/lamp.svg'
import booking from './../../images/menu-board.svg'
import inbox from './../../images/INBOX.svg'
import explore from './../../images/search-status.svg'
import  food from './../../images/directbox-notif.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const Sidebar = () => {
  const [isOpen , setIsOpen] = useState(false);
  const toggle = ()=> setIsOpen (!isOpen);
  return (
    <div style={{width: isOpen ? "25%" : "15%"}} className='HJ-sidebar'>
      <div className='HJ-sidebar-title'>
        <div  style={{ display: isOpen ? "block" : "none"}} className='HJ-brand'>
          <img  src={logo} alt="logo" />
        </div>
        <div style={{marginLeft : isOpen ? "40px" : "50px"}} className='HJ-bars'>
          < FaBars onClick={toggle}/>
        </div>

      </div>
      
      <ul className='HJ-sidebar-list'>
        <li className='HJ-sidebar-list-item'><img  style={{ display: isOpen ? "block" : "none"}} src={blogger} alt='blogger' />
          <Link to='/' >Blogs</Link>
          </li>
        <li className='HJ-sidebar-list-item' ><img   style={{ display: isOpen ? "block" : "none"}} src={gallery} alt='gallery' />
          <Link to='/gallery' >Gallery</Link>
        </li>
        <li className='HJ-sidebar-list-item' ><img  style={{ display: isOpen ? "block" : "none"}}  src={lamp} alt='rooms' />
          <Link to='/room' >Rooms</Link>
        </li>
        <li className='HJ-sidebar-list-item' ><img   style={{ display: isOpen ? "block" : "none"}} src={booking} alt='booking' />
          <Link to='/booking' >Booking</Link>
        </li>
        <li className='HJ-sidebar-list-item' ><img  style={{ display: isOpen ? "block" : "none"}}  src={explore} alt='explore' />
          <Link to='/explore' >Explore</Link>
        </li>
        <li className='HJ-sidebar-list-item' ><img  style={{ display: isOpen ? "block" : "none"}}  src={food} alt='food' />
          <Link to='/food' >Foods</Link>
        </li>
        <li className='HJ-sidebar-list-item HJ_inbox' ><img   style={{ display: isOpen ? "block" : "none"}} src={inbox} alt='inbox' />
          <Link to='/inbox '>Inbox</Link>
        </li>
      </ul>

      
      </div>
  )
}

export default Sidebar 