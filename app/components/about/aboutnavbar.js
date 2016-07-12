import React from 'react';

export default class DefaultNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top about-nav">
          <div className="about-nav-inner center-block">
            <h5>
              <a href="/about">ABOUT US</a>
            </h5>
            <ul>
              <li className="current-page"><a href="/about">Overview</a></li>
              <li><a href="/about/management">Team</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/about/press">Press</a></li>
              <li><a href="/about/media">News</a></li>
              <li><a href="/about/awards">Awards</a></li>
              <li><a href="/about/quotes">Quotes</a></li>
              <li><a href="/investor">Investor</a></li>
              <li><a href="/about/security">Security</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
            <a className="project-btn pull-right" href="/post-project">Start a Project</a>
          </div>
        </nav>
      </div>
    )
  }
}
