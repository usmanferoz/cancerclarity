import './App.css';
import React from "react";
import {
  Route,
  Routes
} from "react-router-dom";
import Home from './components/home/home.js';
import CancerMenu from './components/cancer_menu/cancer_menu.js';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/cancer/menu" element={<CancerMenu/>}></Route>
    </Routes>
  )
}

export default App;
