import React from 'react';

export default class VerificationsPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  render() {
    var verifications = this.props.verifications;
    if(!verifications) {
      return (
        <div>Verifications is undefined or null</div>
      );
    }
    return (
      <div className="panel panel-default verification-component">
        <div className="panel-heading">
          Verifications
        </div>
        <div className="panel-body">
          <ul className="line-list">
            <li>
              <span>
                {
                  verifications.facebook === 1 ? (
                    <div>
                      <i className="fa fa-facebook fa-lg verified-green"></i>
                      Facebook Connected
                      <i className="fa fa-check fa-lg pull-right verified-green"></i>
                    </div>
                  ) : (
                    <div>
                      <i className="fa fa-facebook fa-lg unverified-gray"></i>
                      Facebook Connected
                      <i className="fa fa-minus fa-lg pull-right unverified-gray"></i>
                    </div>
                  )
                }
              </span>
            </li>
            <li>
              <span>
                {
                  verifications.preferred === 1 ? (
                    <div>
                      <i className="fa fa-thumbs-up fa-lg verified-green"></i>
                      Preferred Freelancer
                      <i className="fa fa-check fa-lg pull-right verified-green"></i>
                    </div>
                  ) : (
                    <div>
                      <i className="fa fa-thumbs-up fa-lg unverified-gray"></i>
                      Preferred Freelancer
                      <i className="fa fa-minus fa-lg pull-right unverified-gray"></i>
                    </div>
                  )
                }
              </span>
            </li>
            <li>
              <span>
                {
                  verifications.payment === 1 ? (
                    <div>
                      <i className="fa fa-usd fa-lg verified-green"></i>
                      Payment Verified
                      <i className="fa fa-check fa-lg pull-right verified-green"></i>
                    </div>
                  ) : (
                    <div>
                      <i className="fa fa-usd fa-lg unverified-gray"></i>
                      Payment Verified
                      <i className="fa fa-minus fa-lg pull-right unverified-gray"></i>
                    </div>
                  )
                }
              </span>
            </li>
            <li>
              <span>
                {
                  verifications.phone === 1 ? (
                    <div>
                      <i className="fa fa-phone fa-lg verified-green"></i>
                      Phone Verified
                      <i className="fa fa-check fa-lg pull-right verified-green"></i>
                    </div>
                  ) : (
                    <div>
                      <i className="fa fa-phone fa-lg unverified-gray"></i>
                      Phone Verified
                      <i className="fa fa-minus fa-lg pull-right unverified-gray"></i>
                    </div>
                  )
                }
              </span>
            </li>
            <li>
              <span>
                {
                  verifications.identity === 1 ? (
                    <div>
                      <i className="fa fa-user fa-lg verified-green"></i>
                      Identity Verified
                      <i className="fa fa-check fa-lg pull-right verified-green"></i>
                    </div>
                  ) : (
                    <div>
                      <i className="fa fa-user fa-lg unverified-gray"></i>
                      Identity Verified
                      <i className="fa fa-minus fa-lg pull-right unverified-gray"></i>
                    </div>
                  )
                }
              </span>
            </li>
            <li>
              <span>
                {
                  verifications.email === 1 ? (
                    <div>
                      <i className="fa fa-envelope fa-lg verified-green"></i>
                      Email Verified
                      <i className="fa fa-check fa-lg pull-right verified-green"></i>
                    </div>
                  ) : (
                    <div>
                      <i className="fa fa-envelope fa-lg unverified-gray"></i>
                      Email Verified
                      <i className="fa fa-minus fa-lg pull-right unverified-gray"></i>
                    </div>
                  )
                }
              </span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
