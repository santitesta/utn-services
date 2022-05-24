import './App.css';
import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";

import NavBar from './components/NavBar/NavBar';
import Posts from './components/Posts/Posts';
// import Landing from './components/Landing/Landing.jsx'
// import Home from './components/Home/Home.jsx'
// import Create from './components/Create/Create';
// import Details from './components/Details/Details.jsx';
import NotFound from './components/NotFound/NotFound';
import ProductList from './components/ProductList/ProductList';

function App() {
  const {pathname} = useLocation()

  return (
    <div>
      {pathname === '/'?null:<NavBar/>}
      <Routes>
        <Route path='/posts' element={<Posts/>}/>
        <Route path='/equipos' element={<ProductList/>}/>
        {/* <Route path='/' element={<Landing/>}/> */}
        {/* <Route path="/home" element={<Home />}/> */}
        {/* <Route path="/create" element={<Create />}/> */}
        {/* <Route path='/details' element={<Details/>}/> */}
        <Route path='/NavBar' element={<NavBar/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
