const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const moment= require('moment')

/********************************************************************
 * Tabla Payment Method
 ********************************************************************/

async function runTablePaymentMethod(json, lengthDocuments) {
  try {
    console.log(`* Creando la Tabla Payment Method en Formato CSV`);

    const csvPaymentMethod = createCsvWriter({
      path: "./csv_files_and_csv_to_postgre/paymentMethod.csv", // path del archivo csv
      header: [
        { id: "id", title: "id" },
        { id: "name", title: "name" },
        { id: "active", title: "active" },
        { id: "createdAt", title: "createdAt" },
        { id: "updatedAt", title: "updatedAt" },
      ],
    });
    const date=  Math.floor(new Date().getTime() / 1000);
    const records_PaymentMethod = [
      {
        id: 1,
        name: 'Transferencia',
        active: true,
        createdAt: date,
        updatedAt: date
      },
      {
        id:2,
        name: 'Pago Móvil',
        active: true,
        createdAt: date,
        updatedAt: date
      },
      {
        id:3,
        name: 'Efectivo Taquilla',
        active: true,
        createdAt: date,
        updatedAt: date
      },
      {
        id:4,
        name: 'Efectivo Delivery',
        active: true,
        createdAt: date,
        updatedAt: date
      },
      {
        id:5,
        name: 'Efectivo Taquilla Bancaria',
        active: true,
        createdAt: date,
        updatedAt: date
      },
      {
        id:6,
        name: 'mPandco',
        active: true,
        createdAt: date,
        updatedAt: date
      },
      {
        id:7,
        name: 'Email',
        active: true,
        createdAt: date,
        updatedAt: date
      },
      {
        id:8,
        name: 'TDC',
        active: true,
        createdAt: date,
        updatedAt: date
      },
      {
        id:9,
        name: 'Crypto currency',
        active: true,
        createdAt: date,
        updatedAt: date
      },
    ];


      csvPaymentMethod.writeRecords(records_PaymentMethod).then(() => {
      console.log("Se ha creado exitosamente la tabla Payment Method");
    });

    return true;
  } catch (e) {
    console.log("Error ejecutando La Tabla Payment Method Formato CSV", e);
  }
}

// Exportamos los modelos
module.exports = {
    runTablePaymentMethod,
};
