import React from 'react';
import {Link } from 'react-router';

function unixTimeToString(time) {
  return new Date(time).toLocaleString();
}

 export default class Review extends React.Component {
   render() {
     return (
       <div>
       <div className= "review">
         <Link to={"/publicProfile/" + this.props.author}>{this.props.author}</Link><br />
         {unixTimeToString(this.props.date)}
         <br />{this.props.children}
       </div>
       </div>
     )
   }
 }
