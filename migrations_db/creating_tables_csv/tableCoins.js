const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const moment= require('moment')

/********************************************************************
 * Tabla Coins
 * id se relaciona con el campo de mongo y el titulo con postgres
 * type_coin_id   para fiat es 1
 * type_coin_id para cryptocurrency es 2
 ********************************************************************/


async function runTableCoins()
{
    try{
        //console.log(`\n******************************************************`);
        console.log(`* Creando la Tabla Coins en Formato CSV`);

        const csvCoins = createCsvWriter({
            path: "./csv_files_and_csv_to_postgre/coins.csv", // path del archivo csv
            header: [
              { id: "prefix", title: "prefix" },
              { id: "code", title: "code" },
              { id: "name", title: "name" },
              { id: "image", title: "image" },
              { id: "type_coin_id", title: "type_coin_id" },
              { id: "active", title: "active" },
              { id: "createdAt", title: "createdAt" },
              { id: "updatedAt", title: "updatedAt" }
            ],
          });
          const date=  Math.floor(new Date().getTime() / 1000);
          const records_Coins = [
            { name: "Bolívares Soberanos", prefix: "Bs", code: "VES", type_coin_id: 1, active: true, createdAt: date, updatedAt: date },
            { name: "Bitcoin", prefix: "฿", code: "BTC", type_coin_id: 2, active: true, createdAt: date, updatedAt: date },
            { name: "Litecoin", prefix: "Ł", code: "LTC", type_coin_id: 2, active: true, createdAt: date, updatedAt: date },
            { name: "Dash", prefix: "D", code: "DASH", type_coin_id: 2, active: true, createdAt: date, updatedAt: date },
            { name: "Petro", prefix: "₽", code: "PTR", type_coin_id: 2, active: true, createdAt: date, updatedAt: date },
            { name: "Dólares", prefix: "$", code: "USD", type_coin_id: 1, active: true, createdAt: date, updatedAt: date },
            { name: "Euros", prefix: "€", code: "EUR", type_coin_id: 1, active: true, createdAt: date, updatedAt: date },
            { name: "Pesos Argentinos", prefix: "$ar", code: "ARS", type_coin_id: 1, active: true, createdAt: date, updatedAt: date },
            { name: "Pesos Chilenos", prefix: "$chi", code: "CLP", type_coin_id: 1, active: true, createdAt: date, updatedAt: date },
            { name: "Ethereum", prefix: "Ξ", code: "BTC", type_coin_id: 2, active: false, createdAt: date, updatedAt: date }
          ]; 
          
          csvCoins.writeRecords(records_Coins).then(() => {
            console.log("Se ha creado exitosamente la tabla Coins");
          });
        
        return true;
    } catch (e) {
        console.log('Error ejecutando La Tabla Coins Formato CSV', e);
    }
}


// Exportamos los modelos
module.exports={
    runTableCoins
};

