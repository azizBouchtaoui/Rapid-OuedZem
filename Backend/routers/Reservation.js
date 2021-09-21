const express = require('express');
const router = express.Router();
const Ville = require('../model/Villes')
 
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://aziz123:aziz123@cluster0.hguh3.mongodb.net/test";

 


router.get('/api/stuff', async (req, res, next) => {
    try {
      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("rapidOZ");
        dbo.collection("Villes").find();
      });
    }catch (error){
      res.status(500).json(error);
    }
  });

module.exports = router ;