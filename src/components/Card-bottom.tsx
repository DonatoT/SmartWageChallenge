
import React, {FunctionComponent} from 'react'
import { ArrowsMoveVertical } from 'tabler-icons-react';

import '../assets/style.css'





type Props ={
   imageUrl?: string;
}

const CardBottom: FunctionComponent <Props> = ({imageUrl}) => {
  return (
    <div className='card-container'>
       <div className='image-content'> 
           <img src={imageUrl} alt='logo'/> 
       </div>
       <div className='name-content'> 
           <span className='item-text-style'> Mike Metelerkamp </span><br/>
           <span className='card-name-text'> McDonalds </span>
        </div>
       <div className='content-icon-for-card'> <ArrowsMoveVertical size={16} strokeWidth={2} color={'black'} /> </div>
    </div>
  )
}

export default CardBottom



              
