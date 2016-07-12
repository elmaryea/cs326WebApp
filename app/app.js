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

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" content={App}>
      <IndexRoute component={Dashboard} />
      <Route path="/about" component={AboutPage} />
    </Route>
  </Router>
),document.getElementById('contentContainer'));
