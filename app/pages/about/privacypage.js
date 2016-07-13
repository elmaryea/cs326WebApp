import React from 'react';

import AboutNavbar from './aboutnavbar';
import DefaultFooter from '../defaultfooter';
import DefaultNavbar from '../defaultnavbar';

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
