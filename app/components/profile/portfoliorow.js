import React from 'react';

export default class PortfolioRow extends React.Component {
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
      <div className="row center-block portfolio-row">
        <ul>
          {
            user.portfolio.map((project, index) => {
              return (
                <li key={index}>
                  <div>
                    <img className="img-responsive" src={project.images[0]} />
                  </div>
                </li>
              )
            })
          }
        </ul>
        {user.portfolio.length > 8 ? (
          <div className="btn btn-default center-block">
            <strong>+ show more</strong>
          </div>
        ) : <span></span>}
      </div>
    );
  }
}
