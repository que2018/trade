import mongoose from 'mongoose'

var balance =  new mongoose.Schema({
    name:String ,
    aount:String
});

module.exports =  mongoose.model('balance', balance,'balance');