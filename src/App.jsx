import React from 'react';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Cart from './components/Cart'

import './styles.css'

const App = () => {
  return (
    <div>
      <Navbar/>
    
      <Cart />
      <Footer />
    </div>
  );
};

export default App;
