import {readDocument, writeDocument, addDocument} from './database.js';


export function getAllContracts(container, cb) {
  sendXHR('GET', '/contracts', undefined, (xhr) => {
    cb(JSON.parse(xhr.responseText));
  });
}

export function getContractData(user, cb) {
  sendXHR('GET', '/contract/user/' + user, undefined, (xhr) => {
    cb(JSON.parse(xhr.responseText));
  })
}

export function getContract(contractId, cb) {
  sendXHR('GET', '/contract/' + contractId, undefined, (xhr) => {
    cb(JSON.parse(xhr.responseText));
  })
}

export function getSearchContracts(searchTerm, cb) {
  sendXHR('GET', '/contracts/' + searchTerm, undefined, (xhr) => {
    cb(JSON.parse(xhr.responseText));
  });
}

export function postReview(userId, author, contents, cb) {
  sendXHR('PUT', '/user/' + userId + '/publicprofile', {
    author: author,
    stuff: contents,
    date: -1
  }, (xhr) => {
    cb(JSON.parse(xhr.responseText));
  });
}


 export function getPublic(id, cb){
   sendXHR('GET', '/user/' + id + '/publicprofile', undefined, (xhr) => {
      cb(JSON.parse(xhr.responseText));
    });
  }


export function getUserObject(id, cb){
  sendXHR('GET', '/user/' + id, undefined, (xhr) => {
     cb(JSON.parse(xhr.responseText));
   });
 }

export function getTags(cb){
  sendXHR('GET', '/tags', undefined, (xhr) => {
    cb(JSON.parse(xhr.responseText));
  });
}

export function getUser(id, cb){
  sendXHR('GET', '/user/' + id + '/privateprofile', undefined, (xhr) => {
     cb(JSON.parse(xhr.responseText));
   });
 }

export function updateUser(id, newUser, cb){
  sendXHR('PUT', '/user/' + id + '/privateprofile/edit', newUser, (xhr) => {
    cb(JSON.parse(xhr.responseText));
  });
}
/**
 * Emulates how a REST call is *asynchronous* -- it calls your function back
 * some time in the future with data.
 */
function emulateServerReturn(data, cb) {
  setTimeout(() => {
    cb(data);
  }, 4);
}

export function saveContract(contents, callback){

  sendXHR('POST', '/contract', {
    title: contents.state.title,
    budget: contents.state.budget,
    deadline: contents.state.deadline,
    description: contents.state.description,
    skills: contents.state.skills,
    tags: contents.state.tags
  }, (xhr) => {
    callback(JSON.parse(xhr.responseText));
  });

  // var contractData = {
  //   "title": contents.state.title,
  //   "budget": contents.state.budget,
  //   "deadline": contents.state.deadline,
  //   "description": contents.state.description,
  //   "skills": contents.state.skills,
  //   "tags": contents.state.tags
  // }
  //
  // var newContract = addDocument('contracts', contractData);
  //
  // emulateServerReturn(newContract, callback);
}

// token for id=1
var token = "eyJpZCI6IjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMSJ9";
function sendXHR(verb, resource, body, cb) {
  var xhr = new XMLHttpRequest();
  xhr.open(verb, resource);
  xhr.setRequestHeader('Authorization', 'Bearer ' + token);

  /* global FreelancerError */
  xhr.addEventListener('load', function() {
    var statusCode = xhr.status;
    var statusText = xhr.statusText;
    if (statusCode >= 200 && statusCode < 300) {
      cb(xhr);
    } else {
      var responseText = xhr.responseText;
      FreelancerError('Could not ' + verb + " " + resource + ": Received " + statusCode + " " + statusText + ": " + responseText);
    }
  });

  // Time out the request if it takes longer than 10,000 milliseconds (10 seconds)
  xhr.timeout = 10000;

  // Network failure: Could not connect to server.
  xhr.addEventListener('error', function() {
    FreelancerError('Could not ' + verb + " " + resource + ": Could not connect to the server.");
  });

  // Network failure: request took too long to complete.
  xhr.addEventListener('timeout', function() {
    FreelancerError('Could not ' + verb + " " + resource + ": Request timed out.");
  });

  switch (typeof(body)) {
    case 'undefined':
      // No body to send.
      xhr.send();
      break;
    case 'string':
      // Tell the server we are sending text.
      xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
      xhr.send(body);
      break;
    case 'object':
      // Tell the server we are sending JSON.
      xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      // Convert body into a JSON string.
      xhr.send(JSON.stringify(body));
      break;
    default:
      throw new Error('Unknown body type: ' + typeof(body));
  }
}
