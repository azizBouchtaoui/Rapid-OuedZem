const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Ville = require('../model/Villes');
const Time = require('../model/Time');
const ResultOfTripe = require('../model/ResultOfTrips')

router.get('/Villes',(req, res) =>{
    Ville.find({},(err, villes)=>{
        res.json(villes)
    })
} )

router.get('/Time', (req,res)=>{
    Time.find({}, (error, time)=>{
        res.json(time);
    })
} )

router.get('/VoyagesDisponible',(res,req)=>{

});
module.exports = router