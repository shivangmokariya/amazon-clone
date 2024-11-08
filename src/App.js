// import './App.css';
// import Navbar from './Components/Navbar/Navbar';
// import HomeScreen from './Screen/HomeScreen/HomeScreen';
// import {Routes,Route} from 'react-router-dom'
// import Product from './Screen/Product/Product';
// import Footer from './Components/Footer/Footer';
// import Cart from './Screen/Cart/Cart';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function App() {
//   // console.log(Product,"<<<<<<<Product");
//   return (
//     <div className="App">
//       <Navbar/>
//       <Routes>
//         <Route path='/' element={<HomeScreen/>}/>
//         <Route path='/products' element={<Product/>}/>
//         <Route path='/cart' element={<Cart/>}/>
//       </Routes>
//       <Footer/>
//       <ToastContainer autoClose={1000} />
//     </div>
//   );
// }

// export default App;

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import HomeScreen from "./Screen/HomeScreen/HomeScreen";
import { Routes, Route, useLocation } from "react-router-dom";
import Product from "./Screen/Product/Product";
import Footer from "./Components/Footer/Footer";
import Cart from "./Screen/Cart/Cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUp from "./Screen/SignUp/SignUp";
import SignIn from "./Screen/SignIn/SignIn";

function App() {
  const location = useLocation();
  const hiddenPaths = ["/register", "/signin"];
  const hideNavAndFooter = hiddenPaths.includes(location.pathname);

  return (
    <div className="App">
      {/* Only display Navbar if hideNavAndFooter is false */}
      {!hideNavAndFooter && <Navbar />}

      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/products" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>

      {/* Only display Footer if hideNavAndFooter is false */}
      {!hideNavAndFooter && <Footer />}

      <ToastContainer autoClose={1000} />
    </div>
  );
}

export default App;
