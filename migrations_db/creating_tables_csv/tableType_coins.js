const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const moment= require('moment')

/********************************************************************
 * Tabla Type Coins
 * id se relaciona con el campo de mongo y el titulo con postgres
 ********************************************************************/

async function runTableTypeCoins() {
  try {
    console.log(`* Creando la Tabla Type Coins en Formato CSV`);

    const csvtypeCoins = createCsvWriter({
      path: "./csv_files_and_csv_to_postgre/type_coins.csv", // path del archivo csv
      header: [
        { id: "id", title: "id" },
        { id: "name", title: "name" },
        { id: "active", title: "active" },
        { id: "createdAt", title: "createdAt" },
        { id: "updatedAt", title: "updatedAt" },
      ],
    });
    const date =  moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
    const records_typeCoins = [
      { 
        id: 1,
        name: "fiat", 
        active: true, 
        createdAt: date, 
        updatedAt: date},
      { 
        id:2,
        name: "cryptocurrency", 
        active: true, 
        createdAt: date, 
        updatedAt: date },
    ];

    csvtypeCoins.writeRecords(records_typeCoins).then(() => {
      console.log("Se ha creado exitosamente la tabla Type Coins");
    });

    return true;
  } catch (e) {
    console.log("Error ejecutando La Tabla Type Coins Formato CSV", e);
  }
}

// Exportamos los modelos
module.exports = {
    runTableTypeCoins,
};
