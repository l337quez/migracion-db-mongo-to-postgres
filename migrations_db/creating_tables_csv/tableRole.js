const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const moment= require('moment')

/********************************************************************
 * Tabla Role
 ********************************************************************/

async function runTableRole() {
  try {
    console.log(`* Creando la Tabla Role en Formato CSV`);

    const csvRole = createCsvWriter({
      path: "./csv_files_and_csv_to_postgre/role.csv", // path del archivo csv
      header: [
        { id: "name", title: "name" },
        { id: "description", title: "description" },
        { id: "active", title: "active" },
        { id: "createdAt", title: "createdAt" },
        { id: "updatedAt", title: "updatedAt" },
      ],
    });

    const date = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
        
    const records_Role = [{ name: "User", description: "Rol de usuarios estándar", active: "true", createdAt: date, updatedAt: date }, 
                          { name: "admin-super", description: "Rol de super administradores", active: "true", createdAt: date, updatedAt: date  },
                          { name: "admin-venezuela", description: "Rol de administrador Venezuela", active: "true", createdAt: date, updatedAt: date  },
                          { name: "admin-chile", description: "Rol de administrador Chile", active: "true", createdAt: date, updatedAt: date  },
                          { name: "admin-argentina", description: "Rol de administrador Argentina", active: "true", createdAt: date, updatedAt: date  }
                        ];
date
    csvRole.writeRecords(records_Role).then(() => {
      console.log("Se ha creado exitosamente la tabla Role");
    });

    return true;
  } catch (e) {
    console.log("Error ejecutando La Tabla Role Formato CSV", e);
  }
}

// Exportamos los modelos
module.exports = {
  runTableRole,
};
