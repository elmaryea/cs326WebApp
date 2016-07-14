import React from 'react';

export function userStats(stats) {
  return (
    <ul>
      {completed(stats.completed)}
      {onBudget(stats.on_budget)}
      {onTime(stats.on_time)}
      {repeatHire(stats.repeat_hire)}
    </ul>
  );
}
function completed(val) {
  if(val === "N/A") {
    return (
      <li>
        <span className="stat-value star-gray">{val}%</span>
        <span className="stat-name">Jobs Completed</span>
      </li>
    );
  } else if (val <= 2) {
    return (
      <li>
        <span className="stat-val stat-warn">{val}%</span>
        <span className="stat-name">Jobs Completed</span>
      </li>
    );
  } else {
    return (
      <li>
        <span className="stat-val verified-green">{val}%</span>
        <span className="stat-name">Jobs Completed</span>
      </li>
    );
  }
}
function onBudget(val) {
  if(val === "N/A") {
    return (
      <li>
        <span className="stat-value star-gray">{val}%</span>
        <span className="stat-name">On Budget</span>
      </li>
    );
  } else if (val <= 2) {
    return (
      <li>
        <span className="stat-val stat-warn">{val}%</span>
        <span className="stat-name">On Budget</span>
      </li>
    );
  } else {
    return (
      <li>
        <span className="stat-val verified-green">{val}%</span>
        <span className="stat-name">On Budget</span>
      </li>
    );
  }
}
function onTime(val) {
  if(val === "N/A") {
    return (
      <li>
        <span className="stat-value star-gray">{val}%</span>
        <span className="stat-name">On Time</span>
      </li>
    );
  } else if (val <= 2) {
    return (
      <li>
        <span className="stat-val stat-warn">{val}%</span>
        <span className="stat-name">On Time</span>
      </li>
    );
  } else {
    return (
      <li>
        <span className="stat-val verified-green">{val}%</span>
        <span className="stat-name">On Time</span>
      </li>
    );
  }
}
function repeatHire(val) {
  if(val === "N/A") {
    return (
      <li>
        <span className="stat-value star-gray">{val}%</span>
        <span className="stat-name">Repeat Hire Rate</span>
      </li>
    );
  } else if (val <= 2) {
    return (
      <li>
        <span className="stat-val stat-warn">{val}%</span>
        <span className="stat-name">Repeat Hire Rate</span>
      </li>
    );
  } else {
    return (
      <li>
        <span className="stat-val verified-green">{val}%</span>
        <span className="stat-name">Repeat Hire Rate</span>
      </li>
    );
  }
}
