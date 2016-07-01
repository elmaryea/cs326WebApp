import {addDocument, readDocument, writeDocument} from './database.js';

function emulateServerReturn(data, cb) {
  setTimeout(() => {
    cb(data);
  }, 4);
}