const express = require("express");
const mongoose = require('mongoose');
const validator = require('validator')


//A schema defines document properties through an object where the keyname corresponds to the property name in the collection
//here we defined aproperty called email with a schema type String
let emailSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: (value) => {
            return validator.isEmail(value)
        }

    }
})

module.exports.EmailModel = mongoose.model('Email', emailSchema);
//We called the model constructor on the Mongoose instance and passed it the name of the collection & a referene to the schema

//We can create an instanceof the model we defined above and populate it with the following syntax:
let msg = new this.EmailModel({
    email: 'ada.lovelace@gmail.com'
})
