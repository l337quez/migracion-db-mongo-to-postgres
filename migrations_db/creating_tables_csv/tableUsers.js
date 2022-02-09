const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const moment= require('moment')

/********************************************************************
 * Tabla Users
 * id se relaciona con el campo de mongo y el titulo con postgres
 *********************************************************************/

async function runTableUsers( json) {
  try {
     

    console.log(`* Creando la Tabla User en Formato CSV `);
    // CABECERAS DEL CSV
    const csvUser = createCsvWriter({
      path: "./csv_files_and_csv_to_postgre/users.csv", // path del archivo csv
      header: [
        { id: "email", title: "email" },
        { id: "password", title: "password" },
        { id: "role", title: "role_id" },
        { id: "tier", title: "tier" },
        { id: "auth_id", title: "auth_id" },
        { id: "uu_id", title: "uu_id" },
        { id: "active", title: "active" },
        { id: "status", title: "status_id" },
        { id: "lastSession", title: "last_login" },
        { id: "createdAt", title: "createdAt" },
        { id: "updatedAt", title: "updatedAt" },
      ],
    });

    
    // Agregamos los records a la columna
    const records = [];
    //console.log(`Existen ${counterUsers} usuarios`);

    var date 
    var id_rol
    // Llenamos la tabla Users
    for (let i = 0; i < json.password.length; i++) {
      // Cambiamos el role a su numero de id correspondiente en Postgre
      id_rol = json.role[i] == "user" ? 1 : 3; // caso contrario si es admin se convierte en admin venezuela
      // Cambiamos el status a su numero de id correspondiente en Postgre
      var id_status = 1; 
      if (json.status[i] == "pending"){
        id_status= 2;
      }
      if (json.status[i] == "blocked"){
        id_status= 3;
      }



      // empujamos los datos al array
      records.push({
        email: json.email[i],
        password: json.password[i],
        role: id_rol,
        tier: json.tier[i],
        active: false,
        lastSession: json.lastSession[i].toISOString(),
        status: id_status,
        createdAt: date,
        updatedAt: date
      });

      //console.log(`Numero de email es: ${json.email.length} `);
    }

    csvUser
      .writeRecords(records) // returns a promise
      .then(() => {
        console.log("Se ha creado exitosamente la tabla Users");
      });

    return true;
  } catch (e) {
    console.log("Error ejecutando La Tabla Users Formato CSV", e);
  }
}

// Exportamos los modelos
module.exports = {
  runTableUsers,
};
