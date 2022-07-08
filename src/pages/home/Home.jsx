import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Widget from '../../components/Widget/Widget'
import '../home/home.scss'

  
function Home() {
  return (
    <div className='home'>
        <Sidebar/>
        <div className="homeContainer">
          <Navbar/>
          <div className="widgets">
            <Widget type='user'/>
            <Widget type='order'/>
            <Widget type='earning'/>
            <Widget type='balance'/>                
          </div>
        </div>
    </div>
  )
}

export default Home