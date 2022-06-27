import React from 'react'
import './Sidebar.css'
import {  AiOutlineHome} from "react-icons/ai";
import {  BsHandThumbsUp} from "react-icons/bs";
import { TbUsers,TbReportAnalytics } from "react-icons/tb";
import { GoPackage } from "react-icons/go";
import { MdOutlineAttachMoney,MdOutlineFeedback } from "react-icons/md";
import { FiMail } from "react-icons/fi";
import { TbBrandGoogleAnalytics } from "react-icons/tb";

import { BiMessageRoundedDots } from "react-icons/bi";

import {Link} from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-wrapper">
            <div className="sidebar-menu">
                <h3>Dashboard</h3>
                <ul>
                    <Link to='/'>
                    <li className='active'><AiOutlineHome className='listitem-icon '/>Home</li>
                    
                    </Link>
                    <li><TbBrandGoogleAnalytics className='listitem-icon'/>Analytics</li>
                    <li><BsHandThumbsUp className='listitem-icon'/>Deal</li>
                </ul>
            </div>
            <div className="sidebar-menu">
                <h3>Quick Menu</h3>
                <ul>
                   <Link to='/users'>
                    <li><TbUsers className='listitem-icon'/>Users</li>
                   </Link>
                    <li><GoPackage className='listitem-icon'/>Products</li>
                    <li><MdOutlineAttachMoney className='listitem-icon'/>Transactions</li>
                    <li><TbReportAnalytics className='listitem-icon'/>Reports</li>
                </ul>
            </div>
            <div className="sidebar-menu">
                <h3>Notification</h3>
                <ul>
                    <li><FiMail className='listitem-icon'/>Mail</li>
                    <li><MdOutlineFeedback className='listitem-icon'/>Feedback</li>
                    <li><BiMessageRoundedDots className='listitem-icon'/>Messages</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Sidebar