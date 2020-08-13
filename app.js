const express = require("express");
const mongoose = require('mongoose');


//A schema defines document properties through an object where the keyname corresponds to the property name in the collection
//here we defined aproperty called email with a schema type String
let emailSchema = new mongoose.Schema({
    email: String
})

module.exports = mongoose.model('Email', emailSchema);
//We called the model constructor on the Mongoose instance and passed it the name of the collection & a referene to the schema

