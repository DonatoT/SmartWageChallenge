import React from 'react'
import {Link} from 'react-router-dom'
import { Menu2 } from 'tabler-icons-react';
import '../assets/style.css'

const Sidebar = () => {
  return (
	<div className='sidebar-content'>
	  <div className='sidebar-item'>
		<div className='item-style'>
			<span> <Menu2 className='icon-styles' size={20} strokeWidth={1}color={'black'}/> </span> 
			<span> Smartwage </span> 
		</div>
	   
	  </div>
	</div>
  ) 
}

export default Sidebar
