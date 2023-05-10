import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Todos from "./components/Todos";
import Login from "./components/Login/Login";
import useToken from "./useToken";

function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>          
          <Route path="/" element={<Todos />} />                      
        </Routes>
      </BrowserRouter>
    </div>
  );

  
}

export default App;
