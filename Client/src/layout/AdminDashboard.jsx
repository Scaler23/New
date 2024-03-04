import {Link, Outlet} from "react-router-dom";
import React, {useEffect, useState} from "react";
import "./dashboard.css";
import Sidebar from "../components/Sidebar";
import Menubar from "../components/Menubar";
const AdminDashboard = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeToggle = () => {
    setIsDarkMode((prevMode) => !prevMode); // Toggle dark mode state
  };

  useEffect(() => {
    const toggler = document.getElementById("theme-toggle");
    toggler.addEventListener("change", handleThemeToggle);

    return () => {
      toggler.removeEventListener("change", handleThemeToggle);
    };
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <>
      <Sidebar />
      <div className="content">
        <Menubar />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default AdminDashboard;
