import './App.css';
import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";

import NavBar from './components/NavBar/NavBar';
import Landing from './components/Landing/Landing.jsx'
import Home from './components/Home/Home.jsx'
import Posts from './components/Posts/Posts';
import NotFound from './components/NotFound/NotFound';
import About from './components/About/About';

function App() {
  const {pathname} = useLocation()

  return (
    <div>
      {pathname === '/'?null:<NavBar/>}
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/posts' element={<Posts/>}/>
        <Route path='/about' element={<About/>}/>
        {/* <Route path='/admin' element={<AdminSite/>}/> */}
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
