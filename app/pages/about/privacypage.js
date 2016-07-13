import React from 'react';

import AboutNavbar from '../../components/aboutnavbar';
import DefaultFooter from '../../components/defaultfooter';
import DefaultNavbar from '../../components/defaultnavbar';

export default class PrivacyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  render() {
    return (
      <div className="privacy">
        <DefaultNavbar />
        <AboutNavbar />

        <DefualtFooter />
      </div>
    )
  }
}
