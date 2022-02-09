const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const moment = require("moment");

/********************************************************************
 * Tabla Content Type
 * title se relaciona con la tabla de postgres
 ********************************************************************/

async function runTableContentType() {
  try {
    console.log(`* Creando la Tabla Content Type en Formato CSV`);

    const csvcontentType = createCsvWriter({
      path: "./csv_files_and_csv_to_postgre/contentType.csv", // path del archivo csv
      header: [
        { id: "id", title: "id" },
        { id: "name", title: "name" },
        { id: "active", title: "active" },
        { id: "createdAt", title: "createdAt" },
        { id: "updatedAt", title: "updatedAt" },
      ],
    });
    const date = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
    const records_contentType = [
      {
        id: 1,
        name: "coins - VES",
        active: true,
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 2,
        name: "coins - USD",
        active: true,
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 3,
        name: "coins - EUR",
        active: true,
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 4,
        name: "coins - CLP",
        active: true,
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 5,
        name: "coins - ARS",
        active: true,
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 6,
        name: "coins - BTC",
        active: true,
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 7,
        name: "coins - ETH",
        active: true,
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 8,
        name: "coins - LTC",
        active: true,
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 9,
        name: "coins - DASH",
        active: true,
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 10,
        name: "coins - PTR",
        active: true,
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 11,
        name: "payment methods",
        active: true,
        createdAt: date,
        updatedAt: date,
      },
      { id: 12, name: "users", active: true, createdAt: date, updatedAt: date },
      {
        id: 13,
        name: "transactions",
        active: true,
        createdAt: date,
        updatedAt: date,
      },
    ];

    csvcontentType.writeRecords(records_contentType).then(() => {
      console.log("Se ha creado exitosamente la tabla Content Type");
    });

    return true;
  } catch (e) {
    console.log("Error ejecutando La Tabla Content Type Formato CSV", e);
  }
}

// Exportamos los modelos
module.exports = {
  runTableContentType,
};
