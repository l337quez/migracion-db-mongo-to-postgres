const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const moment= require('moment')

/********************************************************************
 * Tabla Coin Payment Method
 ********************************************************************/

async function runTableCoinPaymentMethod(json, lengthDocuments) {
  try {
    console.log(`* Creando la Tabla Coin Payment Method en Formato CSV`);

    const csvPaymentMethod = createCsvWriter({
      path: "./csv_files_and_csv_to_postgre/coinpaymentMethod.csv", // path del archivo csv
      header: [
        { id: "id", title: "id" },
        { id: "coin_id", title: "coin_id" },
        { id: "payment_method_id", title: "payment_method_id" },
        { id: "createdAt", title: "createdAt" },
        { id: "updatedAt", title: "updatedAt" },
      ],
    });
    const date=  Math.floor(new Date().getTime() / 1000);
    const records_PaymentMethod = [
            
      {
        id:1,
        coin_id: 1,
        payment_method_id: 1,
        createdAt: date,
        updatedAt: date
      },
      {
        id:2,
        coin_id: 1,
        payment_method_id: 2,
        createdAt: date,
        updatedAt: date
      },
      {
        id:3,
        coin_id: 1,
        payment_method_id: 3,
        createdAt: date,
        updatedAt: date
      },
      {
        id:4,
        coin_id: 1,
        payment_method_id: 4,
        createdAt: date,
        updatedAt: date
      },
      {
        id:5,
        coin_id: 1,
        payment_method_id: 5,
        createdAt: date,
        updatedAt: date
      },
      {
        id:6,
        coin_id: 2,
        payment_method_id: 1,
        createdAt: date,
        updatedAt: date
      },
      {
        id:7,
        coin_id: 2,
        payment_method_id: 3,
        createdAt: date,
        updatedAt: date
      },
      {
        id:8,
        coin_id: 2,
        payment_method_id: 4,
        createdAt: date,
        updatedAt: date
      },
      {
        id:9,
        coin_id: 3,
        payment_method_id: 1,
        createdAt: date,
        updatedAt: date
      },
      {
        id:10,
        coin_id: 3,
        payment_method_id: 3,
        createdAt: date,
        updatedAt: date
      },
      {
        id:11,
        coin_id: 3,
        payment_method_id: 4,
        createdAt: date,
        updatedAt: date
      },
      {
        id:12,
        coin_id: 4,
        payment_method_id: 1,
        createdAt: date,
        updatedAt: date
      },
      {
        id:13,
        coin_id: 4,
        payment_method_id: 3,
        createdAt: date,
        updatedAt: date
      },
      {
        id:14,
        coin_id: 4,
        payment_method_id: 5,
        createdAt: date,
        updatedAt: date
      },
      {
        id:15,
        coin_id: 5,
        payment_method_id: 1,
        createdAt: date,
        updatedAt: date
      },
      {
        id:16,
        coin_id: 5,
        payment_method_id: 3,
        createdAt: date,
        updatedAt: date
      },
      {
        id:17,
        coin_id: 5,
        payment_method_id: 5,
        createdAt: date,
        updatedAt: date
      }

    ];
      csvPaymentMethod.writeRecords(records_PaymentMethod).then(() => {
      console.log("Se ha creado exitosamente la tabla Coin Payment Method");
    });

    return true;
  } catch (e) {
    console.log("Error ejecutando La Tabla Coin Payment Method Formato CSV", e);
  }
}

// Exportamos los modelos
module.exports = {
  runTableCoinPaymentMethod,
};



