const { MongoCompatibilityError } = require('mongodb')
const mongoose = require('mongoose')

const MenusSchema = new mongoose.Schema({
    name: {
        type: String
        // required:   'This is required'
    },
    price: {
        type: Number
    },
    status: {
        type: Boolean
    },
    remarks: {
        type: String
    }
})
module.exports = mongoose.model('Menu',MenusSchema)
