const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const moment= require('moment')

/********************************************************************
 * Tabla Office
 * id se relaciona con el campo de mongo y el titulo con postgres
 ********************************************************************/

async function runTableOffice() {
  try {
    console.log(`* Creando la Tabla Office en Formato CSV`);

    const csvOffice = createCsvWriter({
      path: "./csv_files_and_csv_to_postgre/office.csv", // path del archivo csv
      header: [
        { id: "name", title: "name" },
        { id: "active", title: "active" },
        { id: "business_id", title: "business_id" },
        { id: "createdAt", title: "createdAt" },
        { id: "updatedAt", title: "updatedAt" },
      ],
    });
    const date =  moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
    const records_Office = [
        {
            name: 'Burger King Sambil',
            active: true,
            business_id: 1,
            createdAt: date

          }
    ];

    csvOffice.writeRecords(records_Office).then(() => {
      console.log("Se ha creado exitosamente la tabla Office");
    });

    return true;
  } catch (e) {
    console.log("Error ejecutando La Tabla Office Formato CSV", e);
  }
}

// Exportamos los modelos
module.exports = {
    runTableOffice,
};
