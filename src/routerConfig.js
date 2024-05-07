import React from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route

import "./index.css";
import Home from './home'
import Login from "./login";

function RouterConfig(){
  return(
    <Routes> {/* Wrap Route components inside Routes */}
      <Route path='/' element={<Login/>}/>
      <Route path="/home" element={<Home/>} />
    </Routes>
  );
}

export default RouterConfig;
