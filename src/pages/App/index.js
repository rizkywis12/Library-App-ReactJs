import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "../Profile";
import Home from "../Home";

import Register from "../Register";
import Login from "../Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App