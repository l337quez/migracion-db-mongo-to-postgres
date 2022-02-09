'use strict';
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
mongoose.pluralize(null); // garantizamos que mongoose no agregue la letra "s" al nombre de la colecion
const Schema = mongoose.Schema;
const {ObjectId } = require('mongodb');

let UserSchema = Schema({
    _id :{ type: ObjectId},
    email: { type: String},
    password: { type: String},
    role: { type: String},
    
    authyId: { type: Number},
    uuid: { type: String},
    status: { type: String},
    lastSession:{ type: Date},
    coins:{ type: Array},
    
    // Para tabla Balances
    coinsOwned:{ type: Array},
    id:{ type: String}, // id de coins
    amount:{ type: Number},
    amountWithdraws:{ type: Number},
    amountDeposits:{ type: Number},
    monthlyChangeAmount:{ type: Number},
    dailyAmount:{ type: Number},
    monthlyAmount:{ type: Number},
    lastUpdated:{ type: Date},
    lastChangeUpdated:{ type: Date},
    
    
    preferredCoinId: { type: String},
    tier: { type: Number},
    referralCode: { type: String},
    bankCode: { type: String},
    phone: { type: String},
    // Para tabla Kycs (KNOW YOUR CUSTUMERS) de postgre
    name:{ type: String},
    surname:{ type: String},
    secondName: { type: String},
    secondSurname: { type: String},
    identityNumber:{ type: Number},
    country: { type: String},
    city: { type: String},
    postalCode: { type: String},
    address: { type: String},
    birthDate:{ type: Date},
    idCardReleaseCountry: { type: String},
    idCardExpiryDate:{ type: Date},
    
    // Para tabla Kycs (KNOW YOUR CUSTUMERS)
    kyc:{ type: Object},
    status: { type: String},
    notes: { type: String},
    tier0:{ type: Object},
    identityCardId: { type: String},
    selfieId: { type: String},
    randomCode: { type: String},
    updatedAt:{ type: Date}
    


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

