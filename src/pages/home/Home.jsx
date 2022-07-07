import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import '../home/home.scss'

  
function Home() {
  return (
    <div className='home'>
        <Sidebar/>
        <div className="homeContainer">Container</div>
    </div>
  )
}

export default Home