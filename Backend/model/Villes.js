const mongoose = require('mongoose')

const villeSchema = mongoose.Schema({
    name:{
        type :String,
    }
})
const Villes = module.exports = mongoose.model('Villes',villeSchema)

