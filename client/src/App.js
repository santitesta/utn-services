import './App.css';
import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';

import NavBar from './components/NavBar/NavBar';
import Landing from './components/Landing/Landing.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About';
import AdminSite from './components/AdminSite/AdminSite';
import NotFound from './components/NotFound/NotFound';

function App() {

  const loggedUser = useSelector(state => state.loggedUser)
  const institute = useSelector(state => state.institute)
  if(loggedUser) localStorage.setItem("user", loggedUser)
  if(institute) localStorage.setItem("institute", institute)

  const {pathname} = useLocation()

  return (
    <div>
      {pathname === '/'?null:<NavBar/>}
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/admin' element={<AdminSite/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
