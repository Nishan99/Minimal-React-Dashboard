import React from 'react'
import './WidgetsSm.css'
import { GrView } from "react-icons/gr";
const WidgetsSm = () => {
  return (
    <div className='widgets-sm'>
        <p className='widgets-title'>New Join Member</p>
        <ul>
          <li>
            <img className='widget-sm-img' src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            <div>
              <p>Smith Heller</p>
              <p>Software Engineer</p>
            </div>
            <button>
              <GrView className='widgets-sm-icon'/> Display
            </button>
          </li>
          <li>
            <img className='widget-sm-img' src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            <div>
              <p>Smith Heller</p>
              <p>Software Engineer</p>
            </div>
            <button>
              <GrView className='widgets-sm-icon'/> Display
            </button>
          </li>
          <li>
            <img className='widget-sm-img' src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            <div>
              <p>Smith Heller</p>
              <p>Software Engineer</p>
            </div>
            <button>
              <GrView className='widgets-sm-icon'/> Display
            </button>
          </li>
        </ul>
    </div>
  )
}

export default WidgetsSm