import React from 'react';

import DefaultFooter from './defaultfooter';
import DefaultNavbar from './defaultnavbar';

export default class DMCAPage extends React.Component {
  contructor(props) {
    super(props);
    this.state = props;
  }

  render () {
    return (
      <div>
        <DefaultNavbar />

        <DefaultFooter />
      </div>
    )
  }
}
