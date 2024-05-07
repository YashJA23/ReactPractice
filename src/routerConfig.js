import React from 'react'
import { Route, Router, Routes } from 'react-router-dom';
import Login from './login'
import Home from './home'
function RouterConfig(){
    return(
        <>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/home' element={<Home/>}/>
        </Routes>
        </>
    )

}
 export default RouterConfig;