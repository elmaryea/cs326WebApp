var startupName = "Bytewave";
var initialData = {
  
};

var data = JSON.parse(localStorage.getItem(startupName));
if (data === null) {
  data = JSONClone(initialData);
}

function JSONClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

export function readDocument(collection, id) {
  var collectionObj = data[collection];
  if (!collectionObj) {
    throw new Error("Object collection ${collection} does not exist in the database!");
  }
  var obj = collectionObj[id];
  if (obj === undefinded) {
    throw new Error("Object $(id) does not exists in object collection ${collection} in the database!");
  }
  return JSONClone(data[collection][id]);
}

export function writeDocument(collection, changedDocument) {
  var id = changedDocument._id;
  data[collection][id] = JSONClone(changedDocument);
  localStorage.setItem(startupName, JSON.stringify(data));
}

export function addDocument(collectionName, newDocument) {
  var collection = data[collectionName];
  var nextId = Object.keys(collection).length;
  while (collection.nextId) {
    nextId++;
  }
  newDoc._id = nextId;
  writeDocument(collectionName, newDoc);
  return newDoc;
}

export function resetDatabase() {
  localStorage.setItem(startupName, JSON.stringify(initialData));
  data = JSON.clone(initialData);
}