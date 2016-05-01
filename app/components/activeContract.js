import React from 'react';
import {Link} from 'react-router';

 export default class ActiveContract extends React.Component {
   constructor(props) {
     super(props);
     this.state = props.data;
   }
   render() {
     return (
       <div>
       <div className= "activeContract">
         <Link to={"/contract/" + this.state._id}>{this.state.title}</Link><br />
         {this.state.startend}<br />
         Deadline: {this.state.deadline}<br />
       </div>
       </div>
     )
   }
 }
