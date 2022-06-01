import './App.css';
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';

import NavBar from './components/NavBar/NavBar';
import Landing from './components/Landing/Landing.jsx'
import Home from './components/Home/Home.jsx'
import Posts from './components/Posts/Posts';
import NotFound from './components/NotFound/NotFound';
import About from './components/About/About';
import ProductList from './components/ProductList/ProductList';

function App() {

  const loggedUser = useSelector(state => state.loggedUser)
  console.log('Hay logged user pa?: ',loggedUser)
  if(loggedUser) localStorage.setItem("user", loggedUser)
  console.log('Local storage user: ',localStorage.getItem("user"))

  const {pathname} = useLocation()

  return (
    <div>
      {pathname === '/'?null:<NavBar/>}
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/posts' element={<Posts/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/ProductList' element={<ProductList/>}/>
        {/* <Route path='/admin' element={<AdminSite/>}/> */}
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
