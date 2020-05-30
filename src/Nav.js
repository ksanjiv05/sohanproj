import React from "react";
import logo from "./logo2.jpg";

function Nav() {
  return (
    <div>
      <nav
        className="navbar  navbar-fixed-top"
        style={{ marginLeft: 50, marginTop: 20 }}>
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">
              <img src={logo} alt="niskarsh logo" className="logo" />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
