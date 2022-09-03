import React from "react";
// import { ReactPropTypes } from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export default function NavBar(props) {
  
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.heading}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            
            
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form>
          <div className="form-check form-switch mx-2 my-2">
            <input className="form-check-input" type="checkbox" onClick={props.toggle} role="switch" id="flexSwitchCheckDefault"/>
            {/* <label className="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label> */}
            {/* <i class={`fa-solid fa-moon text-${props.color}`}></i> */}
            <i className={props.color}></i>
            
          </div>
        </div>
      </div>
    </nav>
  );
}

NavBar.propTypes = {
    heading: PropTypes.string
}

NavBar.defaultProps = {
    heading: 'Default NavBar'
}
