import React from 'react'
import {Outlet} from 'react-router-dom'

const InnerContent =() => {
  return (
    <div className='inner-content'>
        <span className='inner-content-title'>Surveys</span>
     <Outlet/>
    </div>
  )
}

export default InnerContent


