'use strict';
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const { ObjectId } = require('mongodb');
//const ObjectId = require("mongoose").Types.ObjectId
mongoose.pluralize(null); // garantizamos que mongoose no agregue la letra "s" al nombre de la colecion
const Schema = mongoose.Schema;

//const ObjectId = Schema.Types.ObjectId

let TxSchema = Schema({
    _id: { type: String},
    userId: { type: Schema.Types.ObjectId},
    type: { type: String},
    paymentMethodId: { type: Schema.Types.ObjectId},
    coinId: { type: Schema.Types.ObjectId},
    amount: { type: Number},
    status: { type: Number},
    createdAt: { type: Date}
    
}, 
{timestamps:true, versionKey: false }, // esto crea createdAt, updateAt internamente sin declararlo
{
    versionKey: false 
});

let txSchema = TxSchema;
TxSchema.plugin(uniqueValidator, {message: '{PATH} debe ser unico'});
module.exports =
{TxSchema: mongoose.model('tx',TxSchema)} // account es el nombre de la coleccion

