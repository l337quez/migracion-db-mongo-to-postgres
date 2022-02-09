const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const moment= require('moment')

/********************************************************************
 * Tabla Actions
 * id se relaciona con el campo de mongo y el titulo con postgres
 ********************************************************************/

async function runTableActions() {
  try {
    console.log(`* Creando la Tabla Actions en Formato CSV`);

    const csvActions = createCsvWriter({
      path: "./csv_files_and_csv_to_postgre/actions.csv", // path del archivo csv
      header: [
        { id: "id", title: "id" },
        { id: "name", title: "name" },
        { id: "active", title: "active" },
        { id: "createdAt", title: "createdAt" },
        { id: "updatedAt", title: "updatedAt" },
      ],
    });
    const date =  moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
    const records_actions = [
      {
        id: 'c',
        name: 'CREATE',
        active: true,
        createdAt: date,
        updatedAt: date
      },
      {
        id: 'r',
        name: 'READ',
        active: true,
        createdAt: date,
        updatedAt: date
      },
      {
        id: 'u',
        name: 'UPDATE',
        active: true,
        createdAt: date,
        updatedAt: date
      },
      {
        id: 'd',
        name: 'DELETE',
        active: true,
        createdAt: date,
        updatedAt: date
      }
    ];

    csvActions.writeRecords(records_actions).then(() => {
      console.log("Se ha creado exitosamente la tabla Actions");
    });

    return true;
  } catch (e) {
    console.log("Error ejecutando La Tabla Actions Formato CSV", e);
  }
}

// Exportamos los modelos
module.exports = {
    runTableActions,
};
