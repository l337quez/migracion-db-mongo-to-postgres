const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const moment = require("moment");

/********************************************************************
 * Tabla Payment Country Coin Payment Method
 ********************************************************************/

async function runTableCountryCoinPaymentMethod(json, lengthDocuments) {
  try {
    console.log(
      `* Creando la Tabla Country Coin Payment Method en Formato CSV`
    );

    const csvPaymentMethod = createCsvWriter({
      path: "./csv_files_and_csv_to_postgre/countrycoinpaymentMethod.csv", // path del archivo csv
      header: [
        { id: "id", title: "id" },
        { id: "country_id", title: "country_id" },
        { id: "coin_payment_method_id", title: "coin_payment_method_id" },
        { id: "createdAt", title: "createdAt" },
        { id: "updatedAt", title: "updatedAt" },
      ],
    });
    const date = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
    const records_PaymentMethod = [
      {
        id: 1,
        country_id: 95,
        coin_payment_method_id: 1,
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 2,
        country_id: 95,
        coin_payment_method_id: 2,
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 3,
        country_id: 95,
        coin_payment_method_id: 3,
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 4,
        country_id: 95,
        coin_payment_method_id: 4,
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 5,
        country_id: 95,
        coin_payment_method_id: 5,
        createdAt: date,
        updatedAt: date,
      },
      { id: 6,
        country_id: 95,
        coin_payment_method_id: 6,
        createdAt: date,
        updatedAt: date,
      },
      { id: 7,
        country_id: 95,
        coin_payment_method_id: 7,
        createdAt: date,
        updatedAt: date,
      },
      { id: 8,
        country_id: 95,
        coin_payment_method_id: 8,
        createdAt: date,
        updatedAt: date,
      },
      { id: 9,
        country_id: 95,
        coin_payment_method_id: 9,
        createdAt: date,
        updatedAt: date,
      },
      { id: 10,
        country_id: 95,
        coin_payment_method_id: 10,
        createdAt: date,
        updatedAt: date,
      },
      { id: 11,
        country_id: 95,
        coin_payment_method_id: 11,
        createdAt: date,
        updatedAt: date,
      },
      { id: 12,
        country_id: 81,
        coin_payment_method_id: 12,
        createdAt: date,
        updatedAt: date,
      },
      { id: 13,
        country_id: 81,
        coin_payment_method_id: 13,
        createdAt: date,
        updatedAt: date,
      },
      { id: 14,
        country_id: 81,
        coin_payment_method_id: 14,
        createdAt: date,
        updatedAt: date,
      },
      { id: 15,
        country_id: 81,
        coin_payment_method_id: 7,
        createdAt: date,
        updatedAt: date,
      },
      { id: 16,
        country_id: 81,
        coin_payment_method_id: 8,
        createdAt: date,
        updatedAt: date,
      },

      { id: 17,
        country_id: 5,
        coin_payment_method_id: 15,
        createdAt: date,
        updatedAt: date,
      },
      { id: 18,
        country_id: 5,
        coin_payment_method_id: 16,
        createdAt: date,
        updatedAt: date,
      },
      { id: 19,
        country_id: 5,
        coin_payment_method_id: 17,
        createdAt: date,
        updatedAt: date,
      },
      { id: 20,
        country_id: 5,
        coin_payment_method_id: 6,
        createdAt: date,
        updatedAt: date,
      },
      {id: 21,
        country_id: 5,
        coin_payment_method_id: 7,
        createdAt: date,
        updatedAt: date,
      },
      {id: 22,
        country_id: 5,
        coin_payment_method_id: 8,
        createdAt: date,
        updatedAt: date,
      },
    ];

    csvPaymentMethod.writeRecords(records_PaymentMethod).then(() => {
      console.log(
        "Se ha creado exitosamente la tabla Country Coin Payment Method"
      );
    });

    return true;
  } catch (e) {
    console.log(
      "Error ejecutando La Tabla Country Coin Payment Method Formato CSV",
      e
    );
  }
}

// Exportamos los modelos
module.exports = {
  runTableCountryCoinPaymentMethod,
};
