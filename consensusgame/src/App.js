import React, {Component} from 'react';
import './App.scss';
import {Route, Switch} from 'react-router-dom';
import Polls from './Pages/Polls';
import NavBar from './Components/NavBar/NavBar';
import Notifications from './Pages/Notifications';
import Rewards from './Pages/Rewards';
import Score from './Pages/Score';
import Profile from './Pages/Profile';
import Dotenv from 'dotenv';

Dotenv.config();

class App extends Component {
  constructor() {
    super();
    let authInfo = localStorage.getItem('authInfo');
    if (authInfo) {
      this.state = JSON.parse(authInfo);
    } else {
      this.state = {isAuthenticated: false, user: null, token: ''};
    }
  }

  updateAuthInfo(isAuthenticated, user, token) {
    localStorage.setItem(
      'authInfo',
      JSON.stringify({isAuthenticated, user, token}),
    );
    this.setState({isAuthenticated, user, token});
  }

  render() {
    return (
      <div>
        <header>
          <nav className="wrapper">
            <NavBar
              updateAuthInfo={this.updateAuthInfo.bind(this)}
              authInfo={this.state}
            />
          </nav>
        </header>
        <main className="wrapper">
          <Switch>
            <Route path="/polls/:id" render={props => <Polls {...props} />} />
            <Route path="/polls" render={props => <Polls {...props} />} />
            <Route path="/notifications" component={Notifications} />
            <Route path="/rewards" component={Rewards} />
            <Route path="/score" component={Score} />
            <Route path="/profile" component={Profile} />
            <Route path="/" component={Polls} />
            <Route component={() => <p>This page does not exist!</p>} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;

{
  /* <Polls key={polls.id} polls={polls} /> */
}
