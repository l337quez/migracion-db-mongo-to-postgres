const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const moment= require('moment')

/********************************************************************
 * Tabla Type Kycs
 * El title con postgres
 ********************************************************************/

async function runTableTypeKycs() {
  try {
    console.log(`* Creando la Tabla Type Kycs en Formato CSV`);

    const csvtypeKycs = createCsvWriter({
      path: "./csv_files_and_csv_to_postgre/type_kycs.csv", // path del archivo csv
      header: [
        { id: "id", title: "id" },
        { id: "name", title: "name" },
        { id: "active", title: "active" },
        { id: "createdAt", title: "createdAt" },
        { id: "updatedAt", title: "updatedAt" },
      ],
    });
    const date =  moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
    const records_typeKycs = [
      {
        id: 1,
        name: 'Verif1',
        active: true,
        createdAt: date,
        updatedAt: date
      },
      {
        id: 2,
        name: 'Verif2',
        active: true,
        createdAt: date,
        updatedAt: date
      } 
    ];

    csvtypeKycs.writeRecords(records_typeKycs).then(() => {
      console.log("Se ha creado exitosamente la tabla Type Kycs");
    });

//console.log(`------------------------------------------------------`);
    return true;
  } catch (e) {
    console.log("Error ejecutando La Tabla Type Kycs Formato CSV", e);
  }
}

// Exportamos los modelos
module.exports = {
    runTableTypeKycs,
};
