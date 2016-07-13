import React from 'react';

import AboutNavbar from './aboutnavbar';

export default class PrivacyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  render() {
    return (
      <div className="privacy">
        <AboutNavbar />

      </div>
    )
  }
}
