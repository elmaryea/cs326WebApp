import React from 'react';

export default class DefaultNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  render() {
    return (
      <div className="navbar-toplevel">
        <nav className="navbar navbar-default navbar-fixed-top navbar-top">
          <div className="navbar-container center-block">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">
                Bytewave
              </a>
            </div>
            <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li className="dropdown">
                  <a href="#" clasNames="dropdown-toggle" data-toggle="dropdown">
                    Hire Freelancers <span className="caret"></span>
                  </a>
                  <div className="dropdown-menu small-dropdown left-dropdown">
                    <h6>FIND A FREELANCER</h6>
                    <ul>
                      <li><a href="#">Start a Project</a></li>
                      <li><a href="#">Start a Contest</a></li>
                      <li><a href="#">Post a Local Job</a></li>
                      <li><a href="#">Get a Recruiter</a></li>
                    </ul>
                    <h6 className="line-above">DISCOVER</h6>
                    <ul>
                      <li><a href="#">Showcase</a></li>
                      <li><a href="#">Browse Directory</a></li>
                      <li><a href="#">Community</a></li>
                    </ul>
                  </div>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    Work <span className="caret"></span>
                  </a>
                  <div className="dropdown-menu small-dropdown left-dropdown">
                    <h6>
                      FIND WORK
                    </h6>
                    <ul>
                      <li><a href="#">Projects with My Skills</a></li>
                      <li><a href="#">Browse Projects</a></li>
                      <li><a href="#">Browse Contests</a></li>
                      <li><a href="#">Browse Local Jobs</a></li>
                      <li><a href="#">Browse Categories</a></li>
                      <li><a href="#">Bookmarks</a></li>
                      <li><a href="#">Get Certified</a></li>
                    </ul>
                  </div>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    My Projects <span className="caret"></span>
                  </a>
                  <div className="dropdown-menu small-dropdown left-dropdown">
                    <h6>
                      MANAGE
                    </h6>
                    <ul>
                      <li><a href="#">My Projects</a></li>
                      <li><a href="#">Dashboard</a></li>
                      <li><a href="#">Inbox</a></li>
                      <li><a href="#">Feedback</a></li>
                    </ul>
                  </div>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    Help <span className="caret"></span>
                  </a>
                  <div className="dropdown-menu small-dropdown left-dropdown">
                    <h6>
                      GET HELP
                    </h6>
                    <ul>
                      <li><a href="#">Get Support</a></li>
                      <li><a href="#">How Freelancer.com Works</a></li>
                      <li><a href="#">Frequently Asked Questions</a></li>
                      <li><a href="#">Fees and Charges</a></li>
                      <li><a href="#">Disputes</a></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <form className="navbar-form navbar-left" role="search">
                    <div className="input-group">
                      <span className="input-group-btn">
                        <button type="submit" className="btn btn-default">
                          <i className="fa fa-search fa-lg"></i>
                        </button>
                      </span>
                      <input type="text" className="form-control" placeholder="Search" />
                    </div>
                  </form>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle right-dropdown" data-toggle="dropdown">USD $0 <sup>00</sup> <span className="caret"></span></a>
                  <div className="dropdown-menu small-dropdown">
                    <div className="text-center">
                      <img className="img-responsive center-block" src="https://cdn5.f-cdn.com/build/img/UserFinancial/credit-card.svg?v=e30adf2fc131575a8535263acacbd467&%3Bm=6" />
                      <a href="#">Make a Deposit</a>
                      <br />to have funds available in your account
                    </div>
                    <h6 className="line-above">
                      MANAGE
                    </h6>
                    <ul>
                      <li><a href="#">Finances</a></li>
                      <li><a href="#">Transaction History</a></li>
                      <li><a href="#">Verify Payment Method</a></li>
                      <li><a href="#">Withdraw Money</a></li>
                    </ul>
                  </div>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    <i className="fa fa-commenting fa-lg"></i>
                  </a>
                  <div className="dropdown-menu panel large-dropdown">
                    <div className="panel-heading">
                      MESSAGES
                    </div>
                  </div>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    <i className="fa fa-bell fa-lg"></i>
                  </a>
                  <div className="dropdown-menu panel large-dropdown">
                    <div className="panel-heading">
                      NOTIFICATIONS
                      <i className="pull-right fa fa-gear fa-lg"></i>
                    </div>
                  </div>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    <i className="fa fa-feed fa-lg"></i>
                  </a>
                  <div className="dropdown-menu panel large-dropdown">
                    <div className="panel-heading">
                      PROJECT FEED
                      <i className="pull-right fa fa-gear fa-lg"></i>
                    </div>
                  </div>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    <i className="fa fa-th fa-lg"></i>
                  </a>
                  <div className="dropdown-menu custom-dropdown">
                    <ul>
                      <li>
                        <i className="fa fa-trophy fa-2x"></i> Contests
                      </li>
                      <li>
                        <i className="fa fa-map-marker fa-2x"></i> Freelancer Local
                      </li>
                      <li>
                        <i className="fa fa-comments-o fa-2x"></i> Community
                      </li>
                      <li>
                        <i className="fa fa-diamond fa-2x"></i> Showcase
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    <i className="fa fa-user fa-lg"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
