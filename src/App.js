import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import MainMenu from './Components/MainMenu/MainMenu';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Description from './Components/Description/Description';


function App() {
  return (
    <div className="App">
      <Home></Home>
    </div>
  );
}

export default App;
