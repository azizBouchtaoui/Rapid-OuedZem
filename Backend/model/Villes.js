const mongoose = require('mongoose')

const villeSchema = mongoose.Schema({
    name:{
        type :String,
        required : true
    },
    label:{
        type :String,
        required : true
    }
})
const Villes = mongoose.model('Villes',villeSchema,'Villes')

module.exports = Villes