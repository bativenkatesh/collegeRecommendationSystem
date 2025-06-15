import React from 'react'
import CollegeList from './CollegeList'


const MainContent = () => {
  const cpy=()=>{
    alert("Stop copying my content")
  }
  return (
    <div className='mainContent'>
        <CollegeList/>
    </div>
  )
}

export default MainContent