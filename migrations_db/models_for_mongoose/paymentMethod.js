'use strict';
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
mongoose.pluralize(null); // garantizamos que mongoose no agregue la letra "s" al nombre de la colecion
const Schema = mongoose.Schema;

let PaymentMethodSchema = Schema({
    type: { type: String},

}, 
{
    versionKey: false 
});
let paymentMethodSchema = PaymentMethodSchema;

PaymentMethodSchema.plugin(uniqueValidator, {message: '{PATH} debe ser unico'});
module.exports =
{PaymentMethodSchema: mongoose.model('paymentMethod',PaymentMethodSchema)} 

