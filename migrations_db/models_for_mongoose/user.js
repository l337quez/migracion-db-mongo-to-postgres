'use strict';
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const {ObjectId } = require('mongodb');
mongoose.pluralize(null); // garantizamos que mongoose no agregue la letra "s" al nombre de la colecion
const Schema = mongoose.Schema;

let UserSchema = Schema({
    _id :{ type: String},
    email: { type: String},
    password: { type: String},
    role: { type: String},
    
    authyId: { type: Number},
    uuid: { type: String},
    status: { type: String},
    lastSession:{ type: Date},
    coins:{ type: Array},
    
    
    
    status: { type: String},
    lastSession:{ type: Date},
    coins:{ type: Array},
    tier: { type: Number},
    updatedAt:{ type: Date},
    // Para tabla Balances
    coinsOwned:{ type: Array},
    id:{ type: String}, // id de coins

    // Para tabla Kycs (KNOW YOUR CUSTUMERS)
    //kyc:{ type: Object},
    kyc:{ 
        status: { type: String},
        tier0 : {
            randomCode:{ type: String},
            identityCardId: { type: ObjectId},
            selfieId:{ type: ObjectId},
            updatedAt: { type: Date}
        }
    },
    name:{ type: String},
    surname:{ type: String},
    secondName: { type: String},
    secondSurname: { type: String},
    birthDate:{ type: Date},
    identityNumber:{ type: Number},
    
    idCardReleaseCountry: { type: String},
    idCardReleaseDate:{ type: Date},
    idCardExpiryDate:{ type: Date},

    //otros que estan en el modelo de mongo
    preferredCoinId: { type: String},
    country: { type: String},
    status: { type: String},
    tier0:{ type: Object},
    randomCode: { type: String},
    identityCardId: { type: String},
    selfieId: { type: String},
    updatedAt:{ type: Date},

    amount:{ type: Number},
    amountWithdraws:{ type: Number},
    amountDeposits:{ type: Number},
    monthlyChangeAmount:{ type: Number},
    dailyAmount:{ type: Number},
    monthlyAmount:{ type: Number},
    lastUpdated:{ type: Date},
    lastChangeUpdated:{ type: Date}


}, 
{timestamps:true, versionKey: false }, // esto crea createdAt, updateAt internamente sin declararlo
{
    versionKey: false 
});
let userSchema = UserSchema;

// validamos para que no se repita el email... o propiedad unique true
UserSchema.plugin(uniqueValidator, {message: '{PATH} debe ser unico'});
module.exports =
{userSchema: mongoose.model('user',UserSchema)} // user es el nombre de la coleccion

