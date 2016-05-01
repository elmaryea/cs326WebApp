var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var database = require('./database');
var readDocument = database.readDocument;
var readDocumentNoId = database.readDocumentNoId;
var writeDocument = database.writeDocument;
var mongo_express = require('mongo-express/lib/middleware');
var mongo_express_config = require('mongo-express/config.default.js');
var ResetDatabase = require('./resetdatabase');
var MongoDB = require('mongodb');
var MongoClient = MongoDB.MongoClient;
var ObjectID = MongoDB.ObjectID;
var url = 'mongodb://localhost:27017/bytewave';

MongoClient.connect(url, function(err, db) {
  // Put everything that uses `app` into this callback function.
  // from app.use(bodyParser.text());
  // all the way to
  // app.listen(3000, ...
  // Also put all of the helper functions that use mock database
  // methods like readDocument, writeDocument, ...

  app.use('/mongo_express', mongo_express(mongo_express_config));
  app.use(bodyParser.text());
  app.use(bodyParser.json());

  // Reset the database.
  app.post('/resetdb', function(req, res) {
    console.log("Resetting database...");
    ResetDatabase(db, function() {
      res.send();
    });
  });

  function getUserIdFromToken(authorizationLine) {
    try {
      var token = authorizationLine.slice(7);
      var regularString = new Buffer(token, 'base64').toString('utf8');
      var tokenObj = JSON.parse(regularString);
      var id = tokenObj['id'];
      if (typeof id === 'string') {
        return id;
      } else {
        return "";
      }
    } catch (e) {
      return -1;
    }
  }

  function getAllContracts(){
    var allContracts = readDocumentNoId('contracts');
    var contractData = [];
    for(var key in allContracts){
      contractData.push(allContracts[key]);
    }
   contractData.forEach(function(contract){
      contract.author = readDocument('users', contract.author);
    });
    return contractData;
  }

  function saveContract(body, callback){
    var newContract = {
      "author": new ObjectID("000000000000000000000001"),
      "title": body.title,
      "budget": body.budget,
      "deadline": body.deadline,
      "description": body.description,
      "skills": [body.skills],
      "tags": [body.tags]
    }

    db.collection('contracts').insertOne(newContract, function(err, result) {
      if(err){
        return callback(err);
      }
      newContract._id = result.insertedId;
      callback(null, newContract);
    });
  }

  function postReview(userId, body) {
    var user = readDocument('users', userId);
    user.reviews.push({
      "author": new ObjectId(body.author),
      "stuff": body.contents,
      "date": new Date().getTime()
    });
    var updatedUser = writeDocument('users', user);
    return updatedUser;
  }


  app.get('/user/:userid', function(req, res) {
    var useridNumber = parseInt(req.params.userid, 10);
    res.send(getUser(useridNumber));
  });


  app.put('/user/:userid/publicprofile', function(req, res) {
    var userId = req.params.userid;
    var fromUser = getUserIdFromToken(req.get('Authorization'));
    var profileId = parseInt(userId, 10);
    var user = readDocument('users', userId);
    if (fromUser === user) {
      res.send(postReview(profileId, req.body));
    } else {
      res.status(401).end();
    }
  });

  app.get('/contracts', function(req, res) {
    db.collection('contracts').find({}).toArray(function(err, contracts){
      if(err){
        res.status(500).send("Database error: " + err);
      }else if (contracts === null){
        res.status(400).send("Could not look up contracts");
      }
      contracts.map(function(contract){
        db.collection('users').findOne({
          _id: contract.author
        }, function(err, author){
          if(err){
            res.status(500).send("Database error: " + err);
          }else if (contracts === null){
            res.status(400).send("Could not look up contracts");
          }
          contract.author = author;
        });
      });
      res.send(contracts);
    });
  });

  app.get('/contract/:contractId', function(req, res) {
    var contractId = req.params.contractId;
    getContract(new ObjectID(contractId), function(err, contractData) {
      if (err) {
        res.status(500).send("Database error: " + err);
      } else if (contractData === null) {
        res.status(400).send("Could not look up contract data for contract " + contractId);
      } else {
        res.send(contractData);
      }
    });
  });

  function contractContains(contract, searchTerm){
    return contract.title.search(searchTerm) > -1 || contract.description.search(searchTerm) > -1 || contract.author.company.search(searchTerm) > -1;
  }

  app.get('/contracts/:searchTerm', function(req, res) {
    var contractData = getAllContracts();
    for(var i = 0, len = contractData.length; i < len; i++){
      if(!contractContains(contractData[i], req.params.searchTerm)){
        contractData.splice(i, 1);
        len--;
        i--;
      }
    }
    res.send(contractData);
  });

  app.get('/contract/user/:userid', function(req, res) {
    var userid = req.params.userid;
    var fromUser = getUserIdFromToken(req.get('Authorization'));
    if (fromUser === userid){
      getUser(new ObjectID(userid), function(err, user){
        if (err) {
          res.status(500).send("Database error: " + err);
        } else if (user === null) {
          res.status(400).send("Could not find user: " + userid);
        } else {
          res.send(user.contents.contracts);
        }
      })
    }else{
      res.status(403).end();
    }
  });

  app.get('/contract/:contractId', function(req, res) {
    res.send(getAllContracts());
  });

  app.get('/tags', function(req, res){
    res.send(readDocument("tags", 1));
  });

    function getContract(contractId, callback){
      db.collection('contracts').findOne({
        _id: contractId
      }, function(err, contract) {
        if (err) {
          return callback(err);
        } else if (contract === null) {
          return callback(null, null);
        }
        callback(null, contract);
      });
    }

    function getUser(id, callback){
      db.collection('users').findOne({
        _id: id
      }, function(err, user) {
        if (err) {
          return callback(err);
        } else if (user === null) {
          // user not found.
          return callback(null, null);
        }
        var resolvedContracts = [];
        function processNextContract(i) {
          // Asynchronously resolve a contract.
          getContract(user.contracts[i], function(err, contract) {
            if (err) {
              callback(err);
            } else {
              resolvedContracts.push(contract);
              if (resolvedContracts.length === user.contracts.length) {
                user.contracts = resolvedContracts;
                callback(null, user);
              } else {
                processNextContract(i + 1);
              }
            }
          });
        }

    if (user.contracts.length === 0) {
      callback(null, user);
    } else {
      processNextContract(0);
    }
  });
   }

   app.get('/user/:userid/privateprofile', function(req, res) {
     var userid = req.params.userid;
     var fromUser = getUserIdFromToken(req.get('Authorization'));
     if (fromUser === userid){
       getUser(new ObjectID(userid), function(err, user) {
         if (err) {
           res.status(500).send("Database error: " + err);
         } else if (user === null) {
           res.status(400).send("Could not find user: " + userid);
         } else {
           res.send(user);
         }
       });
     } else {
       res.status(403).end();
     }
   });


   app.get('/user/:userid/publicprofile', function(req, res) {
     var userid = req.params.userid;
     getUser(new ObjectID(userid), function(err, user) {
       if (err) {
         res.status(500).send("Database error: " + err);
       } else if (user === null) {
         res.status(400).send("Could not find user: " + userid);
       } else {
         res.send(user);
       }
     });
   });

  // edit profile.
  app.put('/user/:userid/privateprofile/edit', function(req, res) {
    var userid = new ObjectID(req.params.userid);
    var fromUser = getUserIdFromToken(req.get('Authorization'));
    if (fromUser === req.params.userid){
      db.collection('users').updateOne({
        _id: userid
      }, { $set: { "skills": req.body.skills, "experience": req.body.experience, "about": req.body.about, "contact": req.body.contact, "email": req.body.email }}, function(err, result) {
        if (err) {
          res.status(500).send("Database error: " + err);
        }
        else{
        getUser(new ObjectID(userid), function(err, user) {
          if (err) {
            res.status(500).send("Database error: " + err);
          }
          res.send(user);
        });
      }
      });
      } else {
        res.status(403).end();
      }
    });

  app.post('/contract', function(req, res) {
    var body = req.body;
    //var newContract = saveContract(body);
    saveContract(body, function(err, newContract) {
      if(err) {
        res.status(500).send("A database error occurred: " + err);
      }else{
        res.status(201);
        res.send(newContract);
      }
    });
  });

  app.use(express.static('../client/build'));
  app.listen(3000, function() {
    console.log("Freelancer app listening on port 3000!");
  });

});
