import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import SignInForm from './components/auth/sign-in/SignInForm';
import RegisterPage from './components/auth/register/RegisterPage';



class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/profile/sign-in" component={SignInForm} />
        </Switch>

      </div>
    );
  }
}

export default App;
