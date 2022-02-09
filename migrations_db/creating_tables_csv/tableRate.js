const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const moment= require('moment')

/********************************************************************
 * Tabla Rate
 * id se relaciona con el campo de mongo y el titulo con postgres
 *********************************************************************/

async function runTableRate(json, lengthDocuments) {

  try {
    console.log(`* Creando la Tabla Rate en Formato CSV `);
    json.coin_id = [];


    // CABECERAS DEL CSV
    const csvRate = createCsvWriter({
      path: "./csv_files_and_csv_to_postgre/rate.csv", // path del archivo csv
      header: [
        { id: "coin_id", title: "crypto_id" },
        { id: "fiat_id", title: "fiat_id" },
        { id: "sellRate", title: "sell_rate" },
        { id: "buyRate", title: "buy_rate" },
        { id: "active", title: "active" },
        { id: "createdAt", title: "createdAt" },
        { id: "updatedAt", title: "updatedAt" }
      ],
    });
    const date=  Math.floor(new Date().getTime() / 1000);
    const records_Rate = [];

    for (let i = 0; i < lengthDocuments; i++) {
      records_Rate.push({
        crypto_id: i+1,
        fiat_id: 1,
/*      
 sell_rate: json.sellRate[i], 
buy_rate: 8059633.19,
        buyRate: json.buyRate[i],

*/
sell_rate: 9844800.66,
buy_rate: 8059633.19,
        
        active: true,
        createdAt: date, 
        updatedAt: date
      });
    }
    csvRate.writeRecords(records_Rate).then(() => {
      console.log("Se ha creado exitosamente la tabla Rate");
    });

    return true;
  } catch (e) {
    console.log("Error ejecutando La Tabla Rate Formato CSV", e);
  }
}

// Exportamos los modelos
module.exports = {
    runTableRate,
};
