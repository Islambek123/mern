import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavigationBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <p className="navbar-text">
          <Link  className="navbar-brand" to="/">Home</Link>
          </p>
          <form>
            <ul className="nav navbar-nav">
              <li>
                <p className="nav-link" >
                  <Link className="navbar-text" to="/profile/sign-in">Sign In</Link>
                </p>
              </li>
              <li>
                <p className="nav-link" >
                  <Link className="navbar-text" to="/register">Register</Link>
                </p>
              </li>
            </ul>
          </form>
        </div>
      </nav>
    );
  }
}

export default NavigationBar;