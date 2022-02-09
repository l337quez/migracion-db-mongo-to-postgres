const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const moment= require('moment')

/********************************************************************
 * Tabla Addresses
 * id se relaciona con el campo de mongo y el titulo con postgres
 ********************************************************************/

async function runTableAddresses() {
  try {
    console.log(`* Creando la Tabla Addresses en Formato CSV`);

    const csvaddresses = createCsvWriter({
      path: "./csv_files_and_csv_to_postgre/addresses.csv", // path del archivo csv
      header: [
        { id: "state_id", title: "state_id" },
        { id: "postal_code", title: "postal_code" },
        { id: "description", title: "description" },
        { id: "createdAt", title: "createdAt" },
        { id: "updatedAt", title: "updatedAt" },
      ],
    });
    const date =  moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
    const records_addresses = [
        {   state_id: 1698,
            postal_code: '1010',
            description: 'Av. principal del cafetal, subiendo por el Locatel, Edificio. Pascal, piso 13, apto 13C',
            createdAt: date },
        { state_id: 1688,
            postal_code: '1012',
            description: 'Av. El Estadio, Edificio. Cobol, piso 4, apto 4B', 
            createdAt: date },
        {
            state_id: 1698,
            postal_code: '1080',
            description: 'Av principa de la mercedes, CC Tolon',
            createdAt: date },
            {
            state_id: 1698,
            postal_code: '1012',
            description: 'Av. Principal de los Palos Grandes, Qta La Fortaleza de la soledad',
            createdAt: date },
            {
            state_id: 1698,
            postal_code: '1010',
            description: 'Av. Alto Prado, al lado del centro comercial Alto Prado, Qta Sin Nombre',
            createdAt: date },
            {
            state_id: 1688,
            postal_code: '1010',
            description: 'Bajada del Tambor, al lado del mcdonalds, Casa Sin Nombre',
            createdAt: date },
    ];

    csvaddresses.writeRecords(records_addresses).then(() => {
      console.log("Se ha creado exitosamente la tabla Addresses");
    });

    return true;
  } catch (e) {
    console.log("Error ejecutando La Tabla Addresses Formato CSV", e);
  }
}

// Exportamos los modelos
module.exports = {
    runTableAddresses,
};
