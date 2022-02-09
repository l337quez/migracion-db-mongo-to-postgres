const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const moment= require('moment')

/********************************************************************
 * Tabla statusUsers
 * id se relaciona con el campo de mongo y el titulo con postgres
 ********************************************************************/

async function runTableStatusUsers()
{
    try{
        console.log(`* Creando la Tabla statusUsers en Formato CSV`);

        const statusUsersCoins = createCsvWriter({
            path: "./csv_files_and_csv_to_postgre/statusUsers.csv", // path del archivo csv
            header: [
              { id: "id", title: "id" },
              { id: "description", title: "description" },
              { id: "active", title: "active" },
              { id: "createdAt", title: "createdAt" },
              { id: "updatedAt", title: "updatedAt" }
            ],
          });
          
          const date = moment(new Date()).format("YYYY-MM-DD HH:mm:ss")

          const records_Coins = [
            { id: 1, description: "approved", active: true, createdAt:date, updatedAt: date },
            { id: 2, description: "pending",  active: true, createdAt:date, updatedAt: date  },
            { id: 3, description: "blocked",  active: true, createdAt:date, updatedAt: date  }

          ];
          
          statusUsersCoins.writeRecords(records_Coins).then(() => {
            console.log("Se ha creado exitosamente la tabla statusUsers");
          });
        
        return true;
    } catch (e) {
        console.log('Error ejecutando La Tabla statusUsers Formato CSV', e);
    }
}


// Exportamos los modelos
module.exports={
    runTableStatusUsers
};

