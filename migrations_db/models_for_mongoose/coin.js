'use strict';
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
mongoose.pluralize(null); // garantizamos que mongoose no agregue la letra "s" al nombre de la colecion
const Schema = mongoose.Schema;

// Los unicos valores variables son buyRate y sellRate

let CoinSchema = Schema({
    buyRate: { type: Number},
    sellRate: { type: Number}
    
}, 
{timestamps:true, versionKey: false }, // esto crea createdAt, updateAt internamente sin declararlo
{
    versionKey: false 
});

let coinSchema = CoinSchema;
CoinSchema.plugin(uniqueValidator, {message: '{PATH} debe ser unico'});
module.exports =
{CoinSchema: mongoose.model('coin',CoinSchema)} // coin es el nombre de la coleccion

