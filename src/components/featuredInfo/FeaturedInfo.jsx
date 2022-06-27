import React from 'react'
import './FeaturedInfo.css'
import { AiOutlineArrowUp ,AiOutlineArrowDown} from "react-icons/ai";
const FeaturedInfo = () => {
  return (
    <div className='featured'>
        <div className='featured-item'>
            <span className="featured-title">Revenue</span>
            <div className="featured-subitem-container">
              <span className='featured-money'>$2,234</span>
              <span className='featured-moneyrate'>11.4<AiOutlineArrowUp className=' featured-card-icon positive '/></span>
            </div>
            <span className='featured-sub'>Compated to last month</span>
        </div>
        <div className='featured-item'>
            <span className="featured-title">Revenue</span>
            <div className="featured-subitem-container">
              <span className='featured-money'>$2,234</span>
              <span className='featured-moneyrate'>-11.4<AiOutlineArrowDown className='featured-card-icon negative' /></span>
            </div>
            <span className='featured-sub'>Compated to last month</span>
        </div>
        <div className='featured-item'>
            <span className="featured-title">Revenue</span>
            <div className="featured-subitem-container">
              <span className='featured-money'>$2,234</span>
              <span className='featured-moneyrate'>11.4<AiOutlineArrowUp className='featured-card-icon positive'/></span>
            </div>
            <span className='featured-sub'>Compated to last month</span>
        </div>
    </div>
  )
}

export default FeaturedInfo