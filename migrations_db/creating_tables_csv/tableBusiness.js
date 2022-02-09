const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const moment= require('moment')

/********************************************************************
 * Tabla Bussines
 ********************************************************************/

async function runTableBussines() {
  try {
    console.log(`* Creando la Tabla Bussines en Formato CSV`);

    const csvRole = createCsvWriter({
      path: "./csv_files_and_csv_to_postgre/business.csv", // path del archivo csv
      header: [
        { id: "name", title: "name" },
        { id: "rif", title: "rif" },
        { id: "phone", title: "phone" },
        { id: "corporative_email", title: "corporative_email" },
        { id: "website", title: "website" },
        { id: "sector", title: "sector" },
        { id: "cant_employees", title: "cant_employees" },
        { id: "yearly_income", title: "yearly_income" },
        { id: "active", title: "active" },
        { id: "address_id", title: "address_id" },
        { id: "kyc_id", title: "kyc_id" },
        { id: "createdAt", title: "createdAt" },
        { id: "updatedAt", title: "updatedAt" },
      ],
    });
    const date=  Math.floor(new Date().getTime() / 1000);
    const records_Role = [
        {
            name: 'Burger King',
            rif: 'j000000001',
            phone: '02122124578',
            corporative_email: 'burger-king@veinte.com',
            corporative_email_secondary: 'burger-king@gmail.com',
            website: 'https://burger-king.net',
            sector: 'fast food',
            cant_employees: 10000,
            yearly_income: 25000000,
            active: true,
            address_id: 1,
            kyc_id: "",
            createdAt: date
          }
    ];

    csvRole.writeRecords(records_Role).then(() => {
      console.log("Se ha creado exitosamente la tabla Bussines");
    });

    return true;
  } catch (e) {
    console.log("Error ejecutando La Tabla Bussines Formato CSV", e);
  }
}

// Exportamos los modelos
module.exports = {
    runTableBussines,
};
