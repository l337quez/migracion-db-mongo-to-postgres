const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const moment= require('moment')

/********************************************************************
 * Tabla Balance
 * id se relaciona con el campo de mongo y el titulo con postgres
 *********************************************************************/

async function runTableBalance(json, lengthDocuments) {

  try {
    console.log(`* Creando la Tabla Balance en Formato CSV `);

    // CABECERAS DEL CSV
    const csvBalance = createCsvWriter({
      path: "./csv_files_and_csv_to_postgre/balance.csv", // path del archivo csv
      header: [
        { id: "id", title: "id" },
        { id: "amount", title: "amount" },
        { id: "amount_with_draws", title: "amount_with_draws" },
        { id: "amount_deposits", title: "amount_deposits" },
        { id: "daily_amount", title: "daily_amount" },
        { id: "montly_amount", title: "montly_amount" },
        { id: "montly_change_amount", title: "montly_change_amount" },
        { id: "coin_id", title: "coin_id" },
        { id: "createdAt", title: "createdAt" },
        { id: "updatedAt", title: "updatedAt" }
      ],
    });

    const date=  Math.floor(new Date().getTime() / 1000);
    const records_Balance = [];
    var balances = [];
    var idUser = [];
    var id_User= [];
    var array_amount =[];
    var array_amountWithdraws = [];
    var array_amount_deposits = [];
    var array_dailyAmount = [];
    var array_montly_amount = [];
    var array_montly_change_amount = [];
    var array_idCoin = [];
    var array_idCoin_num = []; //id numerico para postgre



    // Extraemos unicamente los balances
    for (let i = 0; i < lengthDocuments; i++){
         if (json.coinsOwned[i]!= ""){ // solo guardamos cuando exista data, sin perder el id del usuario
            balances.push( json.coinsOwned[i])
            idUser.push(i +1) // balance del usuario idUser,  +1 porque el id comienza en 1
        } 
    }

    // Esto es un Array de arrays
    for (let i = 0; i < balances.length; i++) {

      for (let j = 0; j < JSON.parse(JSON.stringify(balances[i])).length; j++) {
          id_User.push(idUser[i]) // toda la data es referencia de este user id
          array_amount.push( JSON.parse(JSON.stringify(balances[i]))[j].amount)
          array_amountWithdraws.push( JSON.parse(JSON.stringify(balances[i]))[j].amountWithdraws)
          array_amount_deposits.push( JSON.parse(JSON.stringify(balances[i]))[j].amountDeposits)
          array_dailyAmount.push( JSON.parse(JSON.stringify(balances[i]))[j].dailyAmount)
          array_montly_amount.push( JSON.parse(JSON.stringify(balances[i]))[j].monthlyAmount)
          array_montly_change_amount.push( JSON.parse(JSON.stringify(balances[i]))[j].monthlyChangeAmount)
          //id de coin
          array_idCoin.push( JSON.parse(JSON.stringify(balances[i]))[j].id)
      }
    }


        // Llevamos los id de Mongo a id Numericos, conociendo la relacion Nombre de Moneda
        // y id de Mongo
        for (let i = 0; i < array_amount.length; i++) {
          
          if (array_idCoin[i] == "5db500c89ec91700126c8a89"){ // BTC
            array_idCoin_num.push(2)
          }
          if (array_idCoin[i] == "5db500c89ec91700126c8a8a"){ // LTC
            array_idCoin_num.push(3)
          }
          if (array_idCoin[i] == "5db500c89ec91700126c8a8b"){ // DASH
            array_idCoin_num.push(4)
          }
          if (array_idCoin[i] == "5db500c89ec91700126c8a8c"){ // PTR
            array_idCoin_num.push(5)
          }
          if (array_idCoin[i] == "5e926c570f86b10270f56793"){ // USD
            array_idCoin_num.push(6)
          }
          if (array_idCoin[i] == "5e926ca40f86b10270f56794"){ // EUR
            array_idCoin_num.push(7)
          }
          if (array_idCoin[i] == "5e926d000f86b10270f56795"){ // ARS
            array_idCoin_num.push(8)
          }
          if (array_idCoin[i] == "5e926dc20f86b10270f56796"){ // CLP
            array_idCoin_num.push(9)
          }
          if (array_idCoin[i] == "5db500c49ec91700126c8a82"){ // BS
            array_idCoin_num.push(1)
          }
        }

       for (let i = 0; i < array_amount.length; i++) {
         records_Balance.push({
           id: i+1, 
        // Eliminamos el undefined, hay algunos campos que no existen, por eso son undefined
         amount : array_amount[i] == undefined ? 0 : parseFloat(array_amount[i]),
         amount_with_draws : array_amountWithdraws[i] == undefined ? array_amountWithdraws[i]= 0 : parseFloat(array_amountWithdraws[i]),
         amount_deposits : array_amount_deposits[i] == undefined ? array_amount_deposits[i]= 0 : parseFloat(array_amount_deposits[i]),
         daily_amount : array_dailyAmount[i] == undefined ? array_dailyAmount[i]= 0 : parseFloat(array_dailyAmount[i]),
         montly_amount : array_montly_amount[i] == undefined ? array_montly_amount[i]= 0 : parseFloat(array_montly_amount[i]),
         montly_change_amount : array_montly_change_amount[i] == undefined ? array_montly_change_amount[i]= 0 : parseFloat(array_montly_change_amount[i]),
        //coin_id : array_idCoin[i],
         coin_id : array_idCoin_num[i],
         createdAt: date, 
         updatedAt: date
       });
     } 


    csvBalance.writeRecords(records_Balance).then(() => {
      console.log("Se ha creado exitosamente la tabla Balance");
    }); 
    
    // Exportamos los id de los usuarios, la posicion de cada uno representa el id en balances
    // y tambien el tamaño de documentos
    return [id_User, array_amount.length] ; 
  } catch (e) {
    console.log("Error ejecutando La Tabla Balance Formato CSV", e);
  }
}

// Exportamos los modelos
module.exports = {
    runTableBalance,
};
