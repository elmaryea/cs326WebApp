import React from 'react';
import ReactDOM from 'react-dom';
import {IndexRoute, Router, Route, hashHistory} from 'react-router';

import AboutPage from './pages/aboutpage';
import DMCAPage from './pages/about/dmcapage';
import ManagementPage from './pages/about/managementpage';
import PrivacyPage from './pages/about/privacypage';
import ProfilePage from './pages/profilepage';
import SiteMapPage from './pages/sitemappage';
import TermsPage from './pages/about/termspage';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" content={App}>
      <IndexRoute component={ProfilePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/about/dmca" component={DMCAPage} />
      <Route path="/about/team" component={ManagementPage} />
      <Route path="/about/privacy" component={PrivacyPage} />
      <Route path="/about/terms" component={TermsPage} />
      <Route path="/sitemap" component={SiteMapPage} />
    </Route>
  </Router>
),document.getElementById('contentContainer'));
