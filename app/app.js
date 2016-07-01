import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Router, Route, hashHistory, Link } from 'react-router';

class App extends React.Component {
  render() {
    return (
    
    );
  }
}

class Dashboard extends React.Component {
  render() {
    return (
    
    );
  }
}

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" content={App}>
      <IndexRoute component={Dashboard} />
      
    </Route>
  </Router>
),document.getElementById('contentContainer'));