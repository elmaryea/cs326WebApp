import React from 'react';

import DefaultFooter from '../components/defaultfooter';
import DefaultNavbar from '../components/defaultnavbar';

export default class SiteMapPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  render() {
    return (
      <div className="sitemap">
        <DefaultNavbar />
      
        <DefaultFooter />
      </div>
    )
  }
}
