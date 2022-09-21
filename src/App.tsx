import React, {FunctionComponent} from 'react';
import Sidebar from './components/Sidebar';
import MainRouter from './routes';

import './assets/style.css'

const App: FunctionComponent = () => {
 return (
    <div className='app-container'>
      <Sidebar/>  
      <MainRouter/>
    </div>
 )
} 
export default App;


