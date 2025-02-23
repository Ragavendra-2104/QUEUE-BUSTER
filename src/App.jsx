// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Offer from './Components/Offer'
import Service from './Components/Service';
import Menu from './Components/Menu';
import Support from './Components/Support'
import Feedback from './Components/Feedback'
import Payment from './Components/Payment'
import Wallet from './Components/Wallet'
import Cart from './Components/Cart'
import Logout from './Components/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/Home" element={<Home />} />
        <Route path="/Offer" element={<Offer/>} />
        <Route path="/Service" element={<Service/>} />
        <Route path="/Menu" element={<Menu/>} />
        <Route path="/Support" element ={<Support/>} />
        <Route path="/Feedback" element ={<Feedback/>} />
        <Route path="/Payment" element ={<Payment/>} />
        <Route path="/Wallet" element ={<Wallet/>} />
        <Route path="/Cart" element ={<Cart/>} />
        <Route path="/Logout" element ={<Logout/>} />

      </Routes>
    </Router>
  );
};

export default App;
