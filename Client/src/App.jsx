import React, {useEffect, useState} from "react";
import {Routes, Route} from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Inventory from "./Pages/Inventory/Inventory";
import Setting from "./Pages/Setting";
import Messages from "./Pages/Messages";
import Account from "./Pages/Account";
import Update from "./Pages/Update";
import AdminDashboard from "./layout/AdminDashboard";
import AdminLogin from "./Pages/Login/Login";
import LandingPage from "./Pages/LandingPage/LandingPage";
import "./App.css";

import Notfound from "./Pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route element={<AdminDashboard />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/updates" element={<Update />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/account" element={<Account />} />
        <Route path="/setting" element={<Setting />} />
      </Route>
      <Route path="/login" element={<AdminLogin />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/*" element={<Notfound />} />
    </Routes>
  );
};

export default App;
