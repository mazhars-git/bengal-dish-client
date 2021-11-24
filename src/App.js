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


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/breakfast" element={<BreakFast />} />
    </Routes>
  );
}

export default App;
