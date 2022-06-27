import React from 'react'
import './Topbar.css'
import { IoMdNotificationsOutline ,IoMdSettings } from "react-icons/io";
import { GrLanguage } from "react-icons/gr";



const Topbar = () => {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topleft">
                <span className='logo'>Admin</span>
            </div>
            <div className="topright">
                <div className="top-icons">
                    <IoMdNotificationsOutline className='notification-icon'/>
                    <span className='notification-no'>2</span>
                </div>
                <div className="top-icons">
                    <GrLanguage className='notification-icon'/>
                    <span className='notification-no'>2</span>
                </div>
                <div className="top-icons">
                    <IoMdSettings className='notification-icon' />
                </div>
                <img src="https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?w=2000" alt="profile-pic" />
            </div>
        </div>
    </div>
  )
}

export default Topbar