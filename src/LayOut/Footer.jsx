import React from "react";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="footer_custom">
        <div className="footer_left">
          <h6>
            DEVELOPED BY:-
            <NavLink exact to="/" target="_blank" rel="noopener noreferrer">
              Ornate
            </NavLink>
            , Noida
          </h6>
        </div>
        <div className="footer_right">
          <h6>OPTIMISED FOR IE 6.0 and above; Best Viewed 1024X768</h6>
        </div>
      </div>
      <div className="topbar"></div>
    </>
  );
};

export default Footer;
