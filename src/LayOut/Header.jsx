import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="topbar">vs</div>
      <div className="header">
        <div className="row">
          <div className="left_side_logo">
            <NavLink to="/">
              <img src="/assets/images/emblem-dark.png" alt="logo" />
            </NavLink>
          </div>

          <div className="department_name">
            <h2>Directorate of Employment</h2>
            <h5>Govt. of NCT of Delhi</h5>
          </div>

          <div className="right_side_logo">
            <a href="#default">
              <img src="/assets/images/logo_englisht_75_0.png" alt="logo" />
            </a>
          </div>
        </div>
      </div>
      <div className="menu">
        <h6>DELHI EMPLOYMENT EXCHANGE</h6>
      </div>
    </>
  );
};

export default Header;
