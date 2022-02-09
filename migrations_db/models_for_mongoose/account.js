'use strict';
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const { ObjectId } = require('mongodb');
mongoose.pluralize(null); // garantizamos que mongoose no agregue la letra "s" al nombre de la colecion
const Schema = mongoose.Schema;


let AccountSchema = Schema({
    _id: { type: String},
    coinId: { type: ObjectId},
    userId: { type: ObjectId},
    bankName: { type: String},
    address: { type: String},
    type: { type: String},
    country: { type: String},
    deleted: { type: Boolean},
    countryPersonIdentifier: { type: String}
    
}, 
{timestamps:true, versionKey: false }, // esto crea createdAt, updateAt internamente sin declararlo
{
    versionKey: false 
});

let accountSchema = AccountSchema;
AccountSchema.plugin(uniqueValidator, {message: '{PATH} debe ser unico'});
module.exports =
{AccountSchema: mongoose.model('account',AccountSchema)} // account es el nombre de la coleccion

