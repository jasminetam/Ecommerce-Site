// import { useState } from "react";
// import { useQuery } from "react-query";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Link } from "react-router-dom";
//Components
import Header from "./Header/Header";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Products from "./pages/Products";
//LoaderCss
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
//Styles
import { StyledContainer } from "./App.styles";


/* @ts-ignore */
const App = ()=> {
  //render
  return (
    
    <Router>
     
        <Header />
     
      {/* @ts-ignore */}
          <StyledContainer>
            <Routes>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
            </Routes>
        </StyledContainer>
    </Router>
    
  );
};


export default App;
