const express = require('express');
const router = express.Router();
const Ville = require('../model/Villes');
const mongoose = require('mongoose');
const Time = require('../model/Time');
 

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
module.exports = router