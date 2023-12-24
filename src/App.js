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
import AddAdmin from './Components/Dashboard/AddAdmin/AddAdmin';
import Login from './Components/Login/Login';
import ManagePd from './Components/Dashboard/ManagePd/ManagePd';
import ItemDetails from './Components/ItemDetails/ItemDetails';
import CheckOut from './Components/CheckOut/CheckOut';
import Signup from './Components/Signup/Signup';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/managePd" element={<ManagePd />} />
      <Route path="/addItem" element={<AddItem />} />
      <Route path="/addAdmin" element={<AddAdmin />} />
      <Route path="/breakfast" element={<BreakFast />} />
      <Route path="/lunch" element={<Lunch />} />
      <Route path="/dinner" element={<Dinner />} />
      <Route path="/item/:itemId" element={<ItemDetails />} />
      <Route path="/checkout" element={<CheckOut />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
