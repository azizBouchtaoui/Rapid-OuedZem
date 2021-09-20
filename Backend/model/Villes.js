const mongoose = require('mongoose')

const villeSchema = mongoose.Schema({
    name:{
        type :String,
    }
})
const Ville = module.exports = mongoose.model('Ville',villeSchema)

