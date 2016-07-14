import {addDocument, readDocument, writeDocument} from './database.js';

export function getUser(id, cb) {
  var user = readDocument('users', id);
  
  emulateServerReturn(user, cb);
}

function emulateServerReturn(data, cb) {
  setTimeout(() => {
    cb(data);
  }, 4);
}
