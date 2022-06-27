import React from 'react'
import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import './Home.css'
import {userData} from '../../data'
import WidgetsSm from '../../components/widgetsSm/WidgetsSm'
import WidgetsLg from '../../components/widgetsLg/WidgetsLg'
const Home = () => {
  return ( 
    <div className="home">
        <FeaturedInfo/>
        <Chart data={userData} grid  title='User Analytics' dataKey='activeUser'/>
        <div className='home-widgets'>
          <WidgetsSm/>
          <WidgetsLg/>
        </div>
    </div>
  )
}

export default Home