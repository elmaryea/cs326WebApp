import React from 'react';

export default class PortfolioRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  render() {
    return (
      <div className="row center-block portfolio-row">
        <ul>
          <li>
            <div>
              <img className="img-responsive" src="https://cdn3.f-cdn.com//files/download/24990046/d34df0.jpg" />
            </div>
          </li>
          <li>
            <div>
              <img className="img-responsive" src="https://cdn3.f-cdn.com//files/download/24989938/c998c8.jpg" />
            </div>
          </li>
          <li>
            <div>
              <img className="img-responsive" src="https://cdn3.f-cdn.com//files/download/24989271/7f7e98.jpg" />
            </div>
          </li>
          <li>
            <div>
              <img className="img-responsive" src="https://cdn3.f-cdn.com//files/download/24989450/029246.jpg" />
            </div>
          </li>
            <li>
            <div>
              <img className="img-responsive" src="https://cdn3.f-cdn.com//files/download/24989385/c958fd.jpg" />
            </div>
          </li>
          <li>
            <div>
              <img className="img-responsive" src="https://cdn3.f-cdn.com//files/download/24329776/85ccaa.jpg" />
            </div>
          </li>
          <li>
            <div>
              <img className="img-responsive" src="https://cdn3.f-cdn.com//files/download/24417233/2ab1c0.jpg" />
            </div>
          </li>
          <li>
            <div>
              <img className="img-responsive" src="https://cdn3.f-cdn.com//files/download/24320461/418c73.jpg" />
            </div>
          </li>
        </ul>
        <div className="btn btn-default center-block">
          <strong>+ show more</strong>
        </div>
      </div>
    );
  }
}
