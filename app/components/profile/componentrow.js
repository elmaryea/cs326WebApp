import React from 'react';

export default class ComponentRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  render() {
    return (
      <div className="row center-block components-row">
        <div className="col-md-8 col-xs-8 component-left-col">
          <div className="panel panel-default reviews-component">
            <div className="panel-heading">
              Recent Reviews
              <div className="pull-right">
                View More Reviews
              </div>
            </div>
            <div className="panel-body">
              <ul>
                <li className="review">
                  <div className="row">
                    <div className="col-md-2 col-xs-2">
                      <img className="img-responsive img-rounded" src="https://cdn3.f-cdn.com/ppic/20408420/logo/15925501/profile_logo_15925501.jpg" />
                    </div>
                    <div className="col-md-10 col-xs-10">
                      <a className="review-title" href="#">Build a Website</a>
                      <div>
                        <span className="rating">5.0</span>
                        <i className="fa fa-star star-orange"></i>
                        <i className="fa fa-star star-orange"></i>
                        <i className="fa fa-star star-orange"></i>
                        <i className="fa fa-star star-orange"></i>
                        <i className="fa fa-star star-orange"></i>
                        <span className="review-price">$1330.4 AUD</span>
                      </div>
                      <p className="review-description">
                        “Eric is very good at understanding the requirements. In general we do come-up with more updates and changes, once we start the development. He is patient enough to understand the importance of them and accepting. Immediately acting on the requests raised is highly appreciated. The amount that I spent for the quality output is the best competitive price. Thank you Nitin and his team for wonderful service, support in right time. ”
                      </p>
                      <span>
                        <a href="#">- kirangali5</a>
                        <span className="flag-icon flag-icon-au"></span> 2 weeks ago.
                      </span>
                      <ul className="review-skills">
                        <li>
                          <a href="#">PHP</a>,
                        </li>
                        <li>
                          <a href="#">Java</a>,
                        </li>
                        <li>
                          <a href="#">Website Design</a>,
                        </li>
                        <li>
                          <a href="#">Graphic Design</a>,
                        </li>
                        <li>
                          <a href="#">HTML</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="review">
                  <div className="row">
                    <div className="col-md-2 col-xs-2">
                      <img className="img-responsive img-rounded" src="https://cdn5.f-cdn.com/ppic/6364285/logo/3643365/profile_logo_3643365.jpg" />
                    </div>
                    <div className="col-md-10 col-xs-10 review-title">
                      <a href="#">Wordpress: Add a link to a featured image</a>
                      <div>
                        <span className="rating">5.0</span>
                        <i className="fa fa-star star-orange"></i>
                        <i className="fa fa-star star-orange"></i>
                        <i className="fa fa-star star-orange"></i>
                        <i className="fa fa-star star-orange"></i>
                        <i className="fa fa-star star-orange"></i>
                        <span>$15.0 USD</span>
                      </div>
                      <p className="review-description">
                        "Delivered the agreed on time."
                      </p>
                      <span>
                        <a href="#">- jeanbar</a>
                        <span className="flag-icon flag-icon-br"></span> 2 weeks ago.
                      </span>
                      <ul className="review-skills">
                        <li>
                          <a href="#">Wordpress</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="review">
                  <div className="row">
                    <div className="col-md-2 col-xs-2">
                      <img className="img-responsive img-rounded" src="https://cdn5.f-cdn.com/ppic/12809746/logo/11598214/profile_logo_11598214.jpg" />
                    </div>
                    <div className="col-md-10 col-xs-10">
                      <a className="review-title" href="#">Make BCBA wordpress website responsive</a>
                    <div>
                        <span className="rating">2.0</span>
                        <i className="fa fa-star star-orange"></i>
                        <i className="fa fa-star star-orange"></i>
                        <i className="fa fa-star star-gray"></i>
                        <i className="fa fa-star star-gray"></i>
                        <i className="fa fa-star star-gray"></i>
                        <span>$96.0 USD</span>
                      </div>
                      <p className="review-description">
                        "Thanks but no thanks, after more than 4 weeks of dragging a simple project, I get a shitty site with tons of problems and issues, I give them a second chance to fix the issues and then after 2 more weeks they tell me it's ready but most of problems still exists. I did pay them in full but I will need to hire another freelancer to finish the work. "
                      </p>
                      <span>
                        <a href="#">- vrej01</a>
                        <span className="flag-icon flag-icon-us"></span> 3 weeks ago.
                      </span>
                      <ul className="review-skills">
                        <li>
                          <a href="#">PHP</a>,
                        </li>
                        <li>
                          <a href="#">Javascript</a>,
                        </li>
                        <li>
                          <a href="#">Wordpress</a>,
                        </li>
                        <li>
                          <a href="#">LESS/Sass/SCSS</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="panel-footer">
              View More Reviews
            </div>
          </div>
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
          <div className="panel panel-default verification-component">
            <div className="panel-heading">
              Verifications
            </div>
            <div className="panel-body">
              <ul className="line-list">
                <li>
                  <span>
                    <i className="fa fa-facebook fa-lg verified-green"></i>
                    Facebook Connected
                    <i className="fa fa-check fa-lg pull-right verified-green"></i>
                  </span>
                </li>
                <li>
                  <span>
                    <i className="fa fa-thumbs-up fa-lg unverified-gray"></i>
                    Preferred Freelancer
                    <i className="fa fa-minus fa-lg pull-right unverified-gray"></i>
                  </span>
                </li>
                <li>
                  <span>
                    <i className="fa fa-usd fa-lg unverified-gray"></i>
                    Payment Verified
                    <i className="fa fa-minus fa-lg pull-right unverified-gray"></i>
                  </span>
                </li>
                <li>
                  <span>
                    <i className="fa fa-phone fa-lg verified-green"></i>
                    Phone Verified
                    <i className="fa fa-check fa-lg pull-right verified-green"></i>
                  </span>
                </li>
                <li>
                  <span>
                    <i className="fa fa-user fa-lg verified-green"></i>
                    Identity Verified
                    <i className="fa fa-check fa-lg pull-right verified-green"></i>
                  </span>
                </li>
                <li>
                  <span>
                    <i className="fa fa-envelope fa-lg verified-green"></i>
                    Email Verified
                    <i className="fa fa-check fa-lg pull-right verified-green"></i>
                  </span>
                </li>
              </ul>
            </div>
          </div>
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
