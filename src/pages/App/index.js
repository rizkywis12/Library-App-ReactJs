import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home";

import Register from "../Register";
import Login from "../Login";
import Detail from "../Detail";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App