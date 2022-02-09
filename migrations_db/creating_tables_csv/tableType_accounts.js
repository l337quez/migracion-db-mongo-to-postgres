const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const moment= require('moment')

/********************************************************************
 * Tabla Type Accounts
 * id se relaciona con el campo de mongo y el titulo con postgres
 ********************************************************************/

async function runTableTypeAccounts() {
  try {
    console.log(`* Creando la Tabla Type Accounts en Formato CSV`);

    const csvtypeAccounts = createCsvWriter({
      path: "./csv_files_and_csv_to_postgre/type_accounts.csv", // path del archivo csv
      header: [
        { id: "id", title: "id" },
        { id: "name", title: "name" },
        { id: "active", title: "active" },
        { id: "endAt", title: "endAt" },
        { id: "createdAt", title: "createdAt" },
        { id: "updatedAt", title: "updatedAt" },
      ],
    });
    const date =  moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
    const records_typeAccounts = [
      { id:1, name: "AHORRO", active: true, endAt: undefined,createdAt: date, updatedAt: date },
      { id:2, name: "CORRIENTE", active: true, endAt: undefined, createdAt: date, updatedAt: date },
      { id:3, name: "MOVIL", active: true, endAt: undefined, createdAt: date, updatedAt: date },

    ];

    csvtypeAccounts.writeRecords(records_typeAccounts).then(() => {
      console.log("Se ha creado exitosamente la tabla Type Accounts");
    });

    return true;
  } catch (e) {
    console.log("Error ejecutando La Tabla Type Accounts Formato CSV", e);
  }
}

// Exportamos los modelos
module.exports = {
    runTableTypeAccounts,
};
