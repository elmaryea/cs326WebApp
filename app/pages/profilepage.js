import React from 'react';

import ComponentRow from '../components/profile/componentrow';
import DefaultFooter from '../components/defaultfooter';
import DefaultNavbar from '../components/defaultnavbar';
import PortfolioRow from '../components/profile/portfoliorow';
import ProfileRow from '../components/profile/profilerow';

import {getUser} from '../server';

export default class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  componentDidMount() {
    this.refresh();
  }

  refresh() {
    getUser(0, results => {
      this.setState({
        user: results
      });
    });
  }

  render () {
    return (
      <div className="profile">
        <DefaultNavbar />
        <div className="body">
          <ProfileRow user={this.state.user}/>
          <PortfolioRow user={this.state.user}/>
          <ComponentRow user={this.state.user}/>
        </div>
        <DefaultFooter />
      </div>
    )
  }
}
