import React from 'react';
import ReviewPanel from './reviewpanel';
import VerificationsPanel from './verificationspanel';

import {Link} from 'react-router'
import {renderRating} from '../../utils';

export default class ComponentRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  render() {
    var user = this.props.user;
    if(!user) {
      return (
        <div>User is undefined or null</div>
      );
    }
    return (
      <div className="row center-block components-row">
        <div className="col-md-8 col-xs-8 component-left-col">
          <ReviewPanel reviews={user.reviews} />
          <div className="panel panel-default experience-component">
            <div className="panel-heading">
              Experience
            </div>
            <div className="panel-body">
              <div className="component-item-title">
                Web Developer
              </div>
              <span className="component-item-place">Arti Boria</span>
              <span className="component-item-date">Mar 2015</span>
              <div className="component-item-description">
                I have 8 years of experience in web development.
              </div>
            </div>
          </div>
          <div className="panel panel-default education-component">
            <div className="panel-heading">
              Education
            </div>
            <div className="panel-body">
              <div className="component-item-title">
                MBA
              </div>
              <span className="component-item-place">Rani Durgavati Vishwavidyalaya, India</span>
              <span className="component-item-date">2010 - 2011 (1 year)</span>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-xs-4 component-right-col">
          <VerificationsPanel verifications={user.verified} />
          <div className="panel panel-default skills-component">
            <div className="panel-heading">
              My Top Skills
            </div>
            <div className="panel-body">
              <ul className="line-list">
                <li>
                  <span>
                    HTML<span className="pull-right">13</span>
                  </span>
                </li>
                <li>
                  <span>
                    PHP<span className="pull-right">11</span>
                  </span>
                </li>
                <li>
                  <span>
                    Wordpress<span className="pull-right">10</span>
                  </span>
                </li>
                <li>
                  <span>
                    Shopping Carts<span className="pull-right">4</span>
                  </span>
                </li>
                <li>
                  <span>
                    eCommerce<span className="pull-right">4</span>
                  </span>
                </li>
                <li>
                  <span>
                    Graphic Design<span className="pull-right">3</span>
                  </span>
                </li>
                <li>
                  <span>
                    HTML5<span className="pull-right">1</span>
                  </span>
                </li>
                <li>
                  <span>
                    SEO
                  </span>
                </li>
                <li>
                  <span>
                    Joomla
                  </span>
                </li>
                <li>
                  <span>
                    Photoshop
                  </span>
                </li>
              </ul>
            </div>
            <div className="panel-footer">
              Show more
            </div>
          </div>
          <div className="panel panel-default similar-component">
            <div className="panel-heading">
              Browse Similar Freelancers
            </div>
            <div className="panel-body">
              <ul>
                <li className="btn btn-default">
                  <a href="#">Web Developers in India</a>
                </li>
                <li className="btn btn-default">
                  <a href="#">Web Developers</a>
                </li>
                <li className="btn btn-default">
                  <a href="#">PHP Developers</a>
                </li>
                <li className="btn btn-default">
                  <a href="#">Wordpress Developers</a>
                </li>
                <li className="btn btn-default">
                  <a href="#">Shopping Cart Designers</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
