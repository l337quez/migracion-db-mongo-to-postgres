const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const moment= require('moment')

/********************************************************************
 * Tabla Type Users
 * id se relaciona con el campo de mongo y el titulo con postgres
 ********************************************************************/

async function runTableTypeProfiles() {
  try {
    console.log(`* Creando la Tabla Type Users en Formato CSV`);

    const csvtypeUsers = createCsvWriter({
      path: "./csv_files_and_csv_to_postgre/type_profiles.csv", // path del archivo csv
      header: [
        { id: "id", title: "id" },
        { id: "name", title: "name" },
        { id: "description", title: "description" },
        { id: "endAt", title: "endAt" },
        { id: "active", title: "active" },
        { id: "createdAt", title: "createdAt" },
        { id: "updatedAt", title: "updatedAt" },
      ],
    });
    const date =  moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
    const records_typeUsers = [
      {
        id: 1,
        name: 'natural',
        description: 'La persona natural se puede entender como aquel ser humano que desea desempeñar y ejercer obligaciones a título personal.',
        active: true,
        endAt: undefined,
        createdAt: date,
        updatedAt: date
      },
      {
        id: 2,
        name: 'juridico',
        description: 'Es una sociedad conformada por una o más personas, capaz de ejercer derechos y contraer obligaciones, la cual puede ser representada de manera judicial o extrajudicialmente',
        active: true,
        endAt: undefined,
        createdAt: date,
        updatedAt: date
      },
      {
        id: 3,
        name: 'empleado',
        description: 'persona que brinda sus servicios a cambio de un salario por parte de un empleador. Así, los detalles de este vínculo son definidos en un contrato',
        active: true,
        endAt: undefined,
        createdAt: date,
        updatedAt: date
      }
    ];

    csvtypeUsers.writeRecords(records_typeUsers).then(() => {
      console.log("Se ha creado exitosamente la tabla Type Users");
    });

    return true;
  } catch (e) {
    console.log("Error ejecutando La Tabla Type Users Formato CSV", e);
  }
}

// Exportamos los modelos
module.exports = {
  runTableTypeProfiles,
};

