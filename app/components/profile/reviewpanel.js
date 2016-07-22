import React from 'react';

import {Link} from 'react-router';
import {renderRating} from '../../utils';

export default class ReviewPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  render() {
    var reviews = this.props.reviews;
    if(!reviews) {
      return (
        <div>There are no reviews</div>
      );
    }
    return (
      <div className="panel panel-default reviews-component">
        <div className="panel-heading">
          Recent Reviews
          <div className="pull-right">
            View More Reviews
          </div>
        </div>
        <div className="panel-body">
          <ul>
            {
              reviews.map((review, index) => {
                if (index < 5) {
                  return (
                    <li className="review" key={index}>
                      <div className="row">
                        <div className="col-md-2 col-xs-2">
                          <img className="img-responsive img-rounded" src="" />
                        </div>
                        <div className="col-md-10 col-xs-10">
                          <Link to='#'>{review.project}</Link>
                          <div>
                            <span className="rating">{review.rating.toFixed(1)}</span>
                            {renderRating(review.rating.toFixed(1))}
                            <span className="review-price">{review.project}</span>
                          </div>
                          <p className="review-description">
                            {"\"" + review.description + "\""}
                          </p>
                          <span>
                            <Link to="#">- {review.reviewer}</Link>
                            <span className="flag-icon flag-icon-au"></span> /*timestame ago*/
                          </span>
                          <ul className="review-skills">
                            {
                              review.skills.length > 0 ? (
                                review.skills.map((skill, index) => {
                                  return (
                                    <li key={index}>
                                      <span><Link to="#">{skill}</Link>,&nbsp;</span>
                                    </li>
                                  );
                                })
                              ) : (
                                <span></span>
                              )
                            }
                          </ul>
                        </div>
                      </div>
                    </li>
                  );
                }
              })
            }
          </ul>
        </div>
        {
          reviews.length > 5 ? (
            <div className="panel-footer">
              View More Reviews
            </div>
          ) : (
            <span></span>
          )
        }
      </div>
    );
  }
}
