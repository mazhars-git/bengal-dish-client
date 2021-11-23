import './App.css';
import React from "react";
import {
  BrowserRouter as 
  Router,
  Routes,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import MainMenu from './Components/MainMenu/MainMenu';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Description from './Components/Description/Description';


function App() {
  return (
    <Routes>
      
        <Route path="/home" component={Home} />
        <Route path="/about" component={Home} />
        
    </Routes>
  );
}

export default App;
