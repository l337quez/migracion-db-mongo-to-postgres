const createCsvWriter = require("csv-writer").createObjectCsvWriter;

/********************************************************************
 * Tabla Countries
 * id se relaciona con el campo de mongo y el titulo con postgres
 * Vamos a sacar todos los paisesy chequeamos que no esten repetidos
 ********************************************************************/

async function runTableCountries(json, lengthDocuments) {
  try {
    console.log(`* Creando la Tabla Countries en Formato CSV`);

    const csvCountries = createCsvWriter({
      path: "./csv_files_and_csv_to_postgre/countries.csv", // path del archivo csv
      header: [
        { id: "name", title: "name" },
        { id: "active", title: "active" },
        { id: "createdAt", title: "createdAt" },
        { id: "updatedAt", title: "updatedAt" }
      ],
    });
    const records_Countries = [];
    //const date=  Math.floor(new Date().getTime() / 1000);
    const date=  Math.floor(new Date().getTime() / 1000);
    
    // Validamos que no se repitan los paises
    var Countries = Array.from(new Set(json.country));

    // Llenamos la tabla
    for (let i = 0; i < Countries.length; i++) {
      // empujamos los datos al array
      records_Countries.push({
        name: Countries[i],
        active: true, // todos son true
        createdAt: date
      });
    }

    csvCountries.writeRecords(records_Countries).then(() => {
      console.log("Se ha creado exitosamente la tabla Coins");
    });

    //console.log(`------------------------------------------------------`);
    return true;
  } catch (e) {
    console.log("Error ejecutando La Tabla Coins Formato CSV", e);
  }
}

// Exportamos los modelos
module.exports = {
  runTableCountries,
};
