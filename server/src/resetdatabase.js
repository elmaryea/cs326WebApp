var ObjectID = require('mongodb').ObjectID;

// Put your startup's name here (only letters and numbers -- no spaces, apostrophes, or special characters!)
var databaseName = "bytewave";
// Put the initial mock objects here.
var initialData = {
  "users": {
      // This user has id "1".
      "1": {
        "_id": new ObjectID("000000000000000000000001"),
        "image": "img/private_profile.png",
        "company": "UCombinator",
        "fullName": "Chandler",
        "title": "Contractor",
        "type": "Contractor",
        "contracts": [new ObjectID("000000000000000000000001"), new ObjectID("000000000000000000000002")],
        "skills": "Html, Java, Javascript, Knitting",
        "experience":"4 Years of Computer Science at UMass Amherst, 2 Years at bytewave developing web applications",
        "about": "Hello. I am an extremely interesting person.",
        "email": "xxxx@gmail.com",
        "contact": "UCombinator\n99 Java Lane\nAmherst, MA 01002\n(413) 123-4567",
        "rating": "4",
        "reviews": []
      },

      "2": {
        "_id": new ObjectID("000000000000000000000002"),
        "image": "img/private_profile.png",
        "company": "Student",
        "fullName": "Jack",
        "title": "Developer",
        "type": "Developer",
        "contracts": [],
        "skills": "Java, Scala",
        "experience":"3 Years of fixing computer hardware",
        "about": "Hello. I am an extremely interesting person.",
        "email": "yyyy@gmail.com",
        "contact": "Jack\nBee St.\nDaisy, MA 012345\n(413) 143-4567",
        "rating": "3",
        "reviews": [
          {
            "author": new ObjectID("000000000000000000000001"),
            "stuff": "[place review here]",
            "date": 1453668480000
          },
          {
            "author": new ObjectID("000000000000000000000003"),
            "stuff": "[place review here again]",
            "date": 1453668500000
          }
        ]
      },

      "3": {
        "_id": new ObjectID("000000000000000000000003"),
        "image": "img/private_profile.png",
        "company": "Student",
        "fullName": "Michelle Wilkinson",
        "title": "Developer",
        "type": "Both",
        "contracts": [],
        "skills": "Ruby, Scala, Javascript",
        "experience":"4 Years of Computer Science at UMass Amherst",
        "about": "Hello. I am an extremely interesting person.",
        "email": "bbbbb@gmail.com",
        "contact": "Michelle W.\n65 Watermelon Rd.\nAmherst, MA 01002\n(413) 547-5519",
        "rating": "4",
        "reviews": []
      }
  },
  "contracts": {
		"1": {
			"_id": new ObjectID("000000000000000000000001"),
			"author": new ObjectID("000000000000000000000001"),
			"title": "Dynamic Mockup",
			"startend": "Started",
			"budget": "$0.00",
			"deadline": "05/12/2016",
			"description": "This is the description I am using to show contract item description",
      "postdate": "02/03/0344",
			"skills": ["HTML", "CSS", "JavaScript"],
			"tags": ["#html", "#css"]
		},
		"2": {
			"_id": new ObjectID("000000000000000000000002"),
			"author": new ObjectID("000000000000000000000001"),
			"title": "Static UI Mockup",
      "startend": "Finished",
			"budget": "$0.00",
			"deadline": "02/09/2016",
      "postdate": "03/58/2015",
			"description": "Using HTML, CSS, and Bootstrap, create a non-interactive mockup of your product with all screens you could possibly access from the URL. You will not have to create any Log In/Out pages at this point in the project, but a user should be logged into your service for these screen captures.",
			"skills": ["HTML", "CSS", "JavaScript"],
			"tags": ["#html", "#css", "#javascript", "#bootstrap", "#web"]
		}
  },
  "tags": {
    "1": [
      "java", "css", "javascript", "ionic", "angularjs", "python", "mysql", "c", "c++", "scala", "ruby"
    ]
  }
};

/**
 * Resets a collection.
 */
function resetCollection(db, name, cb) {
  // Drop / delete the entire object collection.
  db.collection(name).drop(function() {
    // Get all of the mock objects for this object collection.
    var collection = initialData[name];
    var objects = Object.keys(collection).map(function(key) {
      return collection[key];
    });
    // Insert objects into the object collection.
    db.collection(name).insertMany(objects, cb);
  });
}

/**
 * Reset the MongoDB database.
 * @param db The database connection.
 */
function resetDatabase(db, cb) {
  // The code below is a bit complex, but it basically emulates a
  // "for" loop over asynchronous operations.
  var collections = Object.keys(initialData);
  var i = 0;

  // Processes the next collection in the collections array.
  // If we have finished processing all of the collections,
  // it triggers the callback.
  function processNextCollection() {
    if (i < collections.length) {
      var collection = collections[i];
      i++;
      // Use myself as a callback.
      resetCollection(db, collection, processNextCollection);
    } else {
      cb();
    }
  }

  // Start processing the first collection!
  processNextCollection();
}

// Check if called directly via 'node', or required() as a module.
// http://stackoverflow.com/a/6398335
if(require.main === module) {
  // Called directly, via 'node src/resetdatabase.js'.
  // Connect to the database, and reset it!
  var MongoClient = require('mongodb').MongoClient;
  var url = 'mongodb://localhost:27017/' + databaseName;
  MongoClient.connect(url, function(err, db) {
    if (err) {
      throw new Error("Could not connect to database: " + err);
    } else {
      console.log("Resetting database...");
      resetDatabase(db, function() {
        console.log("Database reset!");
        // Close the database connection so NodeJS closes.
        db.close();
      });
    }
  });
} else {
  // require()'d.  Export the function.
  module.exports = resetDatabase;
}
