import React, {FunctionComponent, useState, useEffect} from 'react'
import TableList from '../components/Table-list'
import Survey from '../models/survey'
import SURVEYS from '../data/mock-survey'
import '../assets/style.css'



const Dashboard: FunctionComponent = () => {


  return (
    <div className='dashboard-content'>
        <TableList />
    </div>
  )
}

export default Dashboard