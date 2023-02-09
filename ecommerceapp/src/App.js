import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import NoMatch from './components/NoMatch';
import Header from './components/Header';
import Login from './components/Login';
import Products from './components/Products';
import SignUp from './components/CreateAccount'
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Router>
        <Header session={true}/> {/* //we are sending parameter here. */}
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path='/Products' element={<Products />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Checkout" element={<Checkout />} />
              <Route path="/CreateAccount" element={<SignUp />} />
              <Route path="*" element={<NoMatch />} />
            </Routes>
            <Footer/>
      </Router> 

    </div>
  );
}






export default App;
