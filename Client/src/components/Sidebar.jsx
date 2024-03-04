import React, {useEffect} from "react";
import {Link} from "react-router-dom";

const Sidebar = () => {
  const handleSideMenuItemClick = (e) => {
    const sideLinks = document.querySelectorAll(
      ".sidebar .side-menu li a:not(.logout)"
    );
    sideLinks.forEach((i) => {
      i.parentElement.classList.remove("active");
    });
    e.target.parentElement.classList.add("active");
  };

  useEffect(() => {
    const sideLinks = document.querySelectorAll(
      ".sidebar .side-menu li a:not(.logout)"
    );
    sideLinks.forEach((item) => {
      item.addEventListener("click", handleSideMenuItemClick);
    });

    return () => {
      sideLinks.forEach((item) => {
        item.removeEventListener("click", handleSideMenuItemClick);
      });
    };
  }, []);
  return (
    <div className="sidebar">
      <Link to="/dashboard" className="logo">
        <img className="kargada" src="/kargada.png" alt="Company Logo" />
        <div className="logo-name">
          <span style={{color:"#0066ff"}}>Kar</span>gada
        </div>
      </Link>
      <div className="side-menu d-flex align-items-center">
        <span className="p-2">
          <img
            src="/img/admin.jpg"
            alt="profileImage"
            style={{
              width: "50px",
              height: "50px",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            }}
            className="rounded-circle"
          />
        </span>
        <ul className="p-0" style={{marginBottom: 0}}>
          <li>
            <Link to="/" className="logout">
              {/* <i className="bx bx-log-out-circle"></i> */}
             Admin#2
            </Link>
          </li>
        </ul>
      </div>
      <ul className="side-menu">
        <li>
          <Link to="/dashboard">
            <i className="bx bxs-dashboard"></i>
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/inventory">
            <i className="bx bx-store-alt"></i>
            Inventory
          </Link>
        </li>
        <li>
          <Link to="/messages">
            <i className="bx bx-message"></i>
            Messages
          </Link>
        </li>
        <li>
          <Link to="/updates">
            <i className="bx bx-calendar"></i>
            Updates
          </Link>
        </li>
        <li>
          <Link to="/setting">
            <i className="bx bx-cog"></i>
            Setting
          </Link>
        </li>
        <li>
          <Link to="/account">
            <i className="bx bx-group"></i>
            Account
          </Link>
        </li>
      </ul>
      <ul className="side-menu">
        <li>
          <Link to="/" className="logout">
            <i className="bx bx-log-out-circle"></i>
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
