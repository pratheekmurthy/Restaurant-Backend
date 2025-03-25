const mongoose = require('mongoose')

const Schema = mongoose.Schema


const itemSchema = new Schema({
    name : {
        type : String,
        required : [true,'item name is required'],
    },
    price : {
        type :String,
        required : true,
    },
    itemDescription : {
        type :String,
    },
},{timestamps : true})



const Item = mongoose.model('Item', itemSchema)

module.exports = Item