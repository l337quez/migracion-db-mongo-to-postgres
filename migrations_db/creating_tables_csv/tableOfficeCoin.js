const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const moment= require('moment')

/********************************************************************
 * Tabla Office Coin
 * id se relaciona con el campo de mongo y el titulo con postgres
 ********************************************************************/

async function runTableOfficeCoin() {
  try {
    console.log(`* Creando la Tabla Office Coin en Formato CSV`);

    const csvOfficeCoin = createCsvWriter({
      path: "./csv_files_and_csv_to_postgre/officecoin.csv", // path del archivo csv
      header: [
        { id: "id", title: "id" },
        { id: "office_id", title: "office_id" },
        { id: "coin_id", title: "coin_id" },
        { id: "createdAt", title: "createdAt" },
        { id: "updatedAt", title: "updatedAt" },
      ],
    });
    const date =  moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
    const records_Office = [
        {
          id:1,
            office_id: 1,
            coin_id: 1,
            createdAt: date,
            updatedAt: date
          },
          {
            id:2,
            office_id: 1,
            coin_id: 6,
            createdAt: date,
            updatedAt: date
          },
          {
            id:3,
            office_id: 1,
            coin_id: 7,
            createdAt: date,
            updatedAt: date
          }
    ];

    csvOfficeCoin.writeRecords(records_Office).then(() => {
      console.log("Se ha creado exitosamente la tabla Office Coin");
    });

    return true;
  } catch (e) {
    console.log("Error ejecutando La Tabla Office Coin Formato CSV", e);
  }
}

// Exportamos los modelos
module.exports = {
    runTableOfficeCoin,
};
