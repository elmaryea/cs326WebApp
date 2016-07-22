import React from 'react';

import {convertJoinDate, renderRating} from '../../utils';
import {userStats} from './utils';

export default class ProfileRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  render() {
    var user = this.props.user;
    if(!user) {
      return <div>User is undefined or null</div>
    }
    return (
      <div className="row center-block profile-row">
        <div className="col-md-3 col-xs-3 text-center profile-summary">
          {user.img === undefined ? (
            <img className="center-block img-responsive img-thumbnail profile-pic" src="img/unknownProfile.png" />
          ) : (
            <img className="center-block img-responsive img-thumbnail profile-pic" src={user.img} />
          )}

          <div className="profile-username">
            @{user.username}
          </div>
          <div>
            <ul className="profile-verification-list">
              <li>
                {user.verified.payment === 1 ? <i className="fa fa-usd fa-lg verified-green"></i> : <i className="fa fa-usd fa-lg unverified-gray"></i>}
              </li>
              <li>
                {user.verified.email === 1 ? <i className="fa fa-envelope fa-lg verified-green"></i> : <i className="fa fa-envelope fa-lg unverified-gray"></i>}
              </li>
              <li>
                {user.verified.profile === 1 ? <i className="fa fa-user fa-lg verified-green"></i> : <i className="fa fa-user fa-lg unverified-gray"></i>}
              </li>
              <li>
                {user.verified.phone === 1 ? <i className="fa fa-phone fa-lg verified-green"></i> : <i className="fa fa-phone fa-lg unverified-gray"></i>}
              </li>
              <li>
                {user.verified.deposit === 1 ? <i className="fa fa-credit-card fa-lg verified-green"></i> : <i className="fa fa-credit-card fa-lg unverified-gray"></i>}
              </li>
            </ul>
          </div>
          <div>
            <i className="flag-icon flag-icon-us"></i>
            <a href="#">{user.country}</a> 4:35 pm
          </div>
          <div>
            Member since {convertJoinDate(user.join_date)}
          </div>
          <div>
            {user.recommendations} Recommendations
          </div>
        </div>
        <div className="col-md-6 col-xs-6 profile-information">
          <div className="profile-name">
            {user.title}
          </div>
          <div className="profile-headline">
            {user.headline}
          </div>
          <div className="profile-statement">
            {user.statement.split("\n").map((block, index) => {
              return (
                <div key={index}>
                  {block}<br />
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-md-3 col-sx-3 profile-statistics">
          <div className="btn-group">
            <button type ="button" className="btn btn-large btn-info button">
              Hire Me
            </button>
            <button type="button" className="btn btn-large btn-info dropdown-toggle" data-toggle="dropdown">
              <i className="fa fa-caret-down fa-lg"></i>
              <span className="sr-only">Toggle Dropdown</span>
            </button>
            <ul className="dropdown-menu pull-right">
              <li><a href="#">Invite to project</a></li>
              <li><a href="#">Recommend</a></li>
              <li><a href="#">Report violation</a></li>
            </ul>
          </div>
          <div className="profile-statistics-rate">
            <span>$ {user.hourly_rate}</span> USD/hr
          </div>
          <div className="profile-statistics-rating">
            <span className="rating">{user.rating.toFixed(1)}</span>
            {renderRating(user.rating.toFixed(1))}
            <span className="profile-num-reviews">
              {user.reviews.length} reviews
            </span>
          </div>
          <div className="profile-statistics-earnings">
            <span>{user.earnings}</span>
            <i className="fa fa-usd verified-green"></i>
            /*ratings bars*/
          </div>
          <ul>
            {userStats(user.stats)}
          </ul>
        </div>
      </div>
    );
  }
}
