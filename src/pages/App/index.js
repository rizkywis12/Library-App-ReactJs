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
    <Route path="/detail/:id" element={<Detail />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App