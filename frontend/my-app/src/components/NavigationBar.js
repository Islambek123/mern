import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavigationBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container-fluid">
          <span className="navbar-text align-middle">
            <Link  className="navbar-brand" to="/">Home</Link>
          </span>
          <form>
            <ul className="nav navbar-nav align-middle">
              <li>
                <span className="nav-link" >
                  <Link className="navbar-text" to="/profile/sign-in">Sign In</Link>
                </span>
              </li>
              <li>
                <span className="nav-link" >
                  <Link className="navbar-text" to="/register">Register</Link>
                </span>
              </li>
            </ul>
          </form>
        </div>
      </nav>
    );
  }
}

export default NavigationBar;