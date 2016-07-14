import React from 'react';
/*
 * Converts Unix time (in ms since Jan 1 1970 UTC) to a Date object
 */
export function convertJoinDate(time) {
  var date = new Date(time * 1000);
  var dateAsString = "";
  switch(date.getMonth()){
    case 0:
      dateAsString = dateAsString + "January, ";
      break;
    case 1:
      dateAsString = dateAsString + "February, ";
      break;
    case 2:
      dateAsString = dateAsString + "March, ";
      break;
    case 3:
      dateAsString = dateAsString + "April, ";
      break;
    case 4:
      dateAsString = dateAsString + "May, ";
      break;
    case 5:
      dateAsString = dateAsString + "June, ";
      break;
    case 6:
      dateAsString = dateAsString + "July, ";
      break;
    case 7:
      dateAsString = dateAsString + "August, ";
      break;
    case 8:
      dateAsString = dateAsString + "September, ";
      break;
      case 9:
      dateAsString = dateAsString + "October, ";
      break;
    case 10:
      dateAsString = dateAsString + "November, ";
      break;
    case 11:
      dateAsString = dateAsString + "December, ";
      break;
  }
  return dateAsString + date.getFullYear();
}

function renderHelper(decimal) {
  if (decimal < .2) {
    return <i className="fa fa-star star-gray"></i>;
  } else if (decimal >= .2 && decimal <= .8) {
    return (
      <span>
        <i className="fa fa-star-half star-orange"></i>
        <i className="fa fa-star-half fa-flip-horizontal star-gray"></i>
      </span>
    );
  }
  return <i className="fa fa-star star-orange"></i>;
}

export function renderRating(rating) {
  var remainder = (rating % 1).toFixed(1);
  var whole = rating - remainder;
  var output;
  switch (whole) {
    case 0:
    return (
      <span>
        {renderHelper(remainder)}
        <i className="fa fa-star star-gray"></i>
        <i className="fa fa-star star-gray"></i>
        <i className="fa fa-star star-gray"></i>
        <i className="fa fa-star star-gray"></i>
      </span>
    );
    case 1:
      return (
        <span>
          <i className="fa fa-star star-orange"></i>
          {renderHelper(remainder)}
          <i className="fa fa-star star-gray"></i>
          <i className="fa fa-star star-gray"></i>
          <i className="fa fa-star star-gray"></i>
        </span>
      );
    case 2:
    return (
      <span>
        <i className="fa fa-star star-orange"></i>
        <i className="fa fa-star star-orange"></i>
        {renderHelper(remainder)}
        <i className="fa fa-star star-gray"></i>
        <i className="fa fa-star star-gray"></i>
      </span>
    );
    case 3:
    return (
      <span>
        <i className="fa fa-star star-orange"></i>
        <i className="fa fa-star star-orange"></i>
        <i className="fa fa-star star-orange"></i>
        {renderHelper(remainder)}
        <i className="fa fa-star star-gray"></i>
      </span>
    );
    case 4:
    return (
      <span>
        <i className="fa fa-star star-orange"></i>
        <i className="fa fa-star star-orange"></i>
        <i className="fa fa-star star-orange"></i>
        <i className="fa fa-star star-orange"></i>
        {renderHelper(remainder)}
      </span>
    );
    case 5:
    return (
      <span>
        <i className="fa fa-star star-orange"></i>
        <i className="fa fa-star star-orange"></i>
        <i className="fa fa-star star-orange"></i>
        <i className="fa fa-star star-orange"></i>
        <i className="fa fa-star star-orange"></i>
      </span>
    );
  }
}
