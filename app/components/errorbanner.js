import React from 'react';
import {hideElement} from '../util';

export default class ErrorBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      errors: ""
    };

    window.FreelancerError = (errorText) => {
      this.setState({
        active: true,
        error: errorText
      })
    };
  }

  render() {
    return (
      <div className={"alert alert-warning " + hideElement(!this.state.active)} role="alert">
        Freelance encountered a problem: {this.state.error}<br />
        <a onClick={() => window.location.reload()}>Please try refreshing this page</a>
      </div>
    );
  }
}
