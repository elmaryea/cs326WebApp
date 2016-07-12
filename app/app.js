import React from 'react';
import ReactDOM from 'react-dom';
import {IndexRoute, Router, Route, hashHistory} from 'react-router';

import AboutPage from './components/aboutpage';
import DMCAPage from './components/about/dmcapage';
import ManagementPage from './components/about/managementpage';
import PrivacyPage from './components/about/privacypage';
import ProfilePage from './components/profilepage';
import SiteMapPage from './components/sitemappage';
import TermsPage from './components/about/termspage';

class App extends React.Component {
  render() {
    <div>
      {this.props.children}
    </div>
  }
}

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" content={App}>
      <IndexRoute component={ProfilePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/about/dmca" component={DMCAPage} />
      <Route path="/about/management" component={ManagementPage} />
      <Route path="about/privacy" component={PrivacyPage} />
      <Route path="about/terms" component={TermsPage} />
      <Route path="sitemap" component={SiteMapPage} />
    </Route>
  </Router>
),document.getElementById('contentContainer'));
