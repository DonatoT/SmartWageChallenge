import React, {FunctionComponent} from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate, BrowserRouter } from 'react-router-dom'
import InnerContent from './components/InnerContent';
import Dashboard from './pages/Dashboard';



const MainRouter: FunctionComponent = () => {
 return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<InnerContent/>}>
            <Route  path="/"  element={<Navigate replace to="dashboard"/>} />
                <Route  path="/dashboard"  element={<Dashboard/>} />
            </Route>
        </Routes>
    </BrowserRouter>
 )
}
export default MainRouter;
