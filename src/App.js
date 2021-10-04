import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header/Header';
import MainMenu from './component/MainMenu/MainMenu';
import Home from './component/Home/Home';
import Footer from './component/Footer/Footer';
import Description from './component/Description/Description';


function App() {
  return (
    <div className="App">
      <MainMenu></MainMenu>
      <Header></Header>
      <Home></Home>
      <Description></Description>
      <Footer></Footer>
    </div>
  );
}

export default App;
