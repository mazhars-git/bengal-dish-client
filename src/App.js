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
import Dinner from './Components/Dinner/Dinner';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import AddItem from './Components/Dashboard/AddItem/AddItem';
import Login from './Components/Login/Login';
import CheckOut from './Components/CheckOut/CheckOut';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/addItem" element={<AddItem />} />
      <Route path="/breakfast" element={<BreakFast />} />
      <Route path="/lunch" element={<Lunch />} />
      <Route path="/dinner" element={<Dinner />} />
      <Route path="/checkout" element={<CheckOut />} />
    </Routes>
  );
}

export default App;
