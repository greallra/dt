const mongoose = require('mongoose');
const validator = require('validator');

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        validate(value){
            if(!validator.isLength(value, { min: 3})){
                throw new Error('Name invalid')
            }
        }
    },
    phone: {
        formattedNumber: {
            type: String,
            trim: true
        },
        extension: {
            type: String,
            trim: true
        },
        countryCode: {
            type: String,
            trim: true
        }
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email invalid')
            }
        }
    }
}, {
    //creates createdAt and updatedAt fields on each entry
    timestamps: true
})

const Contact = mongoose.model('Contact', contactSchema)

module.exports = Contact;
