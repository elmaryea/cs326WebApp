import React from 'react';
import {getContract, getUserObject} from '../server'

export default class Contract extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      _id: "",
      author: "",
      title: "",
      startend: "",
      budget: "",
      deadline: "",
      description: "",
      postdate: "",
      skills: [],
      tags: []
        };
      }

  refresh() {
    getContract(this.props.contractId, (data) => {
      this.setState(data);
    });
  }

  componentDidMount() {
    this.refresh();
  }

  render(){
    return(
  <div>
    <link href="css/contractor.css" rel="stylesheet" />
      <div className="container maintext">
        <div className="row">
          <div className="col-md-8">
            <h1>{this.state.title}</h1>
            <h3>Company: {this.state.author.company}</h3>
            <h5>Budget: <span className="text-muted">{this.state.budget}</span> Deadline: <span className="text-muted">{this.state.deadline}</span></h5>
            <h4>Project Description</h4>
            <p>{this.state.description}</p>
            <h4>Skills Required</h4>
              <ul>
                {this.state.skills.map((skill, i) => {
                  return (
                    <li key={i}>{skill}</li>
                  );
                })}
              </ul>
            <div className="panel panel-primary panelfill">
              <div className="panel-heading">
                <h5 className="panel-title tags">Tags</h5>
              </div>
              <div className="panel-body tags">
                <h6 className="tags"> {this.state.tags}</h6>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="panel panel-default panelfill">
              <div className="panel-heading">
                <h3 className="panel-title headertext">About Us</h3>
              </div>
              <div className="panel-body">
                <p>{this.state.author.about}</p>
                <address>
                  <strong>{this.state.author.company}</strong><br />
                  {this.state.author.contact}
                </address>
                <address>
                  <strong>{this.state.author.company}</strong><br />
                  <a href="mailto:#">{this.state.author.email}</a>
                </address>
              </div>
            </div>
            <div className="panel panel-default panelfill">
              <div className="panel-heading">
                <h3 className="panel-title headertext">Job Postings History</h3>
              </div>
              <div className="panel-body">
                <p>Thus far, This is the first job UCombinator has posted.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
