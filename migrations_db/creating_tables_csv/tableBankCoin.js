const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const moment = require("moment");

/********************************************************************
 * Tabla Bank Coin
 ********************************************************************/

async function runTableBankCoin() {
  try {
    console.log(`* Creando la Tabla Bank Coin en Formato CSV`);

    const csvBankCoin = createCsvWriter({
      path: "./csv_files_and_csv_to_postgre/bankCoin.csv", // path del archivo csv
      header: [
        { id: "bank_id", title: "bank_id" },
        { id: "coin_id", title: "coin_id" },
        { id: "createdAt", title: "createdAt" },
        { id: "updatedAt", title: "updatedAt" },
      ],
    });
    const date = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
    const records_BankCoin = [
      // Bancos de Chile con moneda (Pesos Chilenos y Dolares)
      {
        bank_id: 2,
        coin_id: 6, // dolares
        createdAt: date,
      },
      { bank_id: 2, coin_id: 9, createdAt: date,  updatedAt: date },
      { bank_id: 11, coin_id: 6, createdAt: date, updatedAt: date  },
      { bank_id: 11, coin_id: 9, createdAt: date, updatedAt: date  },
      { bank_id: 17, coin_id: 6, createdAt: date, updatedAt: date  },
      { bank_id: 17, coin_id: 9, createdAt: date, updatedAt: date  },
      { bank_id: 23, coin_id: 6, createdAt: date, updatedAt: date  },
      { bank_id: 23, coin_id: 9, createdAt: date, updatedAt: date  },
      { bank_id: 34, coin_id: 6, createdAt: date, updatedAt: date  },
      { bank_id: 34, coin_id: 9, createdAt: date, updatedAt: date  },

      // Bancos de Argentina con moneda (Pesos Chilenos y Dolares)

      { bank_id: 3, coin_id: 6, createdAt: date, updatedAt: date},
      { bank_id: 3, coin_id: 8, createdAt: date, updatedAt: date  },
      { bank_id: 16, coin_id: 6, createdAt: date, updatedAt: date  },
      { bank_id: 16, coin_id: 8, createdAt: date, updatedAt: date  },
      { bank_id: 18, coin_id: 6, createdAt: date, updatedAt: date  },
      { bank_id: 18, coin_id: 8, createdAt: date, updatedAt: date  },
      { bank_id: 25, coin_id: 6, createdAt: date, updatedAt: date  },
      { bank_id: 25, coin_id: 8, createdAt: date, updatedAt: date  },
      { bank_id: 33, coin_id: 6, createdAt: date, updatedAt: date  },
      { bank_id: 33, coin_id: 8, createdAt: date, updatedAt: date  },
      { bank_id: 36, coin_id: 6, createdAt: date, updatedAt: date  },
      { bank_id: 36, coin_id: 8, createdAt: date, updatedAt: date  },
      { bank_id: 39, coin_id: 6, createdAt: date, updatedAt: date  },
      { bank_id: 39, coin_id: 8, createdAt: date, updatedAt: date  },
      { bank_id: 40, coin_id: 6, createdAt: date, updatedAt: date  },
      { bank_id: 40, coin_id: 8, createdAt: date, updatedAt: date  },
      { bank_id: 41, coin_id: 6, createdAt: date, updatedAt: date  },
      { bank_id: 41, coin_id: 8, createdAt: date, updatedAt: date  },
      { bank_id: 42, coin_id: 6, createdAt: date, updatedAt: date  },
      { bank_id: 42, coin_id: 8, createdAt: date, updatedAt: date  },

      // Bancos de Venezuela con moneda (Bs)
      { bank_id: 1, coin_id: 1, createdAt: date, updatedAt: date  },
      { bank_id: 1, coin_id: 6, createdAt: date, updatedAt: date  },
      { bank_id: 4, coin_id: 1, createdAt: date, updatedAt: date  },
      { bank_id: 4, coin_id: 6, createdAt: date, updatedAt: date  }, //dolares
      { bank_id: 5, coin_id: 1, createdAt: date, updatedAt: date  },
      { bank_id: 6, coin_id: 1, createdAt: date, updatedAt: date  },
      { bank_id: 7, coin_id: 1, createdAt: date, updatedAt: date  },
      { bank_id: 8, coin_id: 1, createdAt: date, updatedAt: date  },
      { bank_id: 9, coin_id: 1, createdAt: date, updatedAt: date  },
      { bank_id: 10, coin_id: 1, createdAt: date, updatedAt: date },
      { bank_id: 11, coin_id: 1, createdAt: date, updatedAt: date },
      { bank_id: 12, coin_id: 1, createdAt: date, updatedAt: date },
      { bank_id: 13, coin_id: 1, createdAt: date, updatedAt: date },
      { bank_id: 14, coin_id: 1, createdAt: date, updatedAt: date },
      { bank_id: 15, coin_id: 1, createdAt: date, updatedAt: date },
      { bank_id: 16, coin_id: 1, createdAt: date, updatedAt: date },
      { bank_id: 19, coin_id: 1, createdAt: date, updatedAt: date },
      { bank_id: 19, coin_id: 6, createdAt: date, updatedAt: date },
      { bank_id: 19, coin_id: 7, createdAt: date, updatedAt: date },
      { bank_id: 20, coin_id: 1, createdAt: date, updatedAt: date },
      { bank_id: 21, coin_id: 1, createdAt: date, updatedAt: date },
      { bank_id: 22, coin_id: 1, createdAt: date, updatedAt: date },
      { bank_id: 23, coin_id: 1, createdAt: date, updatedAt: date },
      { bank_id: 24, coin_id: 1, createdAt: date, updatedAt: date },
      { bank_id: 27, coin_id: 1, createdAt: date, updatedAt: date },
      { bank_id: 28, coin_id: 1, createdAt: date, updatedAt: date },
      { bank_id: 28, coin_id: 6, createdAt: date, updatedAt: date },
      { bank_id: 29, coin_id: 1, createdAt: date, updatedAt: date },
      { bank_id: 30, coin_id: 1, createdAt: date, updatedAt: date },
      { bank_id: 31, coin_id: 1, createdAt: date, updatedAt: date },
      { bank_id: 32, coin_id: 1, createdAt: date, updatedAt: date },
      { bank_id: 32, coin_id: 6, createdAt: date, updatedAt: date },
      { bank_id: 32, coin_id: 7, createdAt: date, updatedAt: date },
      { bank_id: 33, coin_id: 1, createdAt: date, updatedAt: date },
      { bank_id: 35, coin_id: 1, createdAt: date, updatedAt: date },
      { bank_id: 38, coin_id: 1, createdAt: date, updatedAt: date }
    ];

    csvBankCoin.writeRecords(records_BankCoin).then(() => {
      console.log("Se ha creado exitosamente la tabla Bank Coin");
    });

    return true;
  } catch (e) {
    console.log("Error ejecutando La Tabla Bank Coin Formato CSV", e);
  }
}

// Exportamos los modelos
module.exports = {
  runTableBankCoin,
};
