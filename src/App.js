import './App.css';
import React from "react";
import {
  BrowserRouter as 
  Router,
  Routes,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import BreakFast from './Components/BreakFast/BreakFast';
import Lunch from './Components/Lunch/Lunch';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/breakfast" element={<BreakFast />} />
      <Route path="/lunch" element={<Lunch />} />
    </Routes>
  );
}

export default App;
