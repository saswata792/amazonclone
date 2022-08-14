import React from 'react';
import Checkout from './Components/Checkout/Checkout';
import DisplayContent from './Components/DisplayContent/DisplayContent';
import MainPage from './Components/HomePage/MainPage';
import Navbar from './Components/Navbar/Navigation';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import CartContextProvider from './Components/CartContext';
function App() {
  return (
    <Router>
        <div className="App">
            <CartContextProvider>
              <Navbar/>
              <Routes>
              
                    <Route path='' element={<MainPage/>} />
                    <Route path='/display' element={<DisplayContent/>} />
                    <Route path='/order/:id' element={<PlaceOrder/>} />
                    <Route path='/checkout' element={<Checkout/>} />
                       
              </Routes>
            </CartContextProvider> 
        </div>
    </Router>
    
  );
}

export default App;
