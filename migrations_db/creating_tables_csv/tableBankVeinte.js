const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const moment = require("moment");

/********************************************************************
 * Tabla Banck Veinte
 ********************************************************************/

async function runTableBankVeinte() {
  try {
    console.log(`* Creando la Tabla Bank Veinte en Formato CSV`);

    const csvBankVeinte = createCsvWriter({
      path: "./csv_files_and_csv_to_postgre/bankVeinte.csv", // path del archivo csv
      header: [
        { id: "bank_id", title: "bank_id" },
        { id: "coin_id", title: "coin_id" },
        { id: "account_number", title: "account_number" },
        { id: "fiscal_number", title: "fiscal_number" },
        { id: "alias", title: "alias" },
        { id: "owner", title: "owner" },
        { id: "value", title: "value" },
        { id: "createdAt", title: "createdAt" },
        { id: "updatedAt", title: "updatedAt" },
      ],
    });
    const date = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
    const records_bankVeinte = [
      {
        bank_id: 3,
        coin_id: 1,
        account_number: "0102-0759-22-0000040332",
        fiscal_number: "J-41114562-9",
        alias: "Cuenta Veinte Banco de Venezuela",
        owner: "Inversiones Financieras 1444, C.A.",
        value: "BDV",
        createdAt: date,
        updatedAt: date,
      },
      {
        bank_id: 3,
        coin_id: 6,
        account_number: "0102-0759-21-0000041658",
        fiscal_number: "J-41114562-9",
        alias: "Cuenta Veinte Banco de Venezuela",
        owner: "Inversiones Financieras 1444, C.A.",
        value: "BDV_USD",
        createdAt: date,
        updatedAt: date,
      },
      {
        bank_id: 191,
        coin_id: 1,
        account_number: "0191-0154-17-2100204784",
        fiscal_number: "J-41114562-9",
        alias: "Cuenta Banco Nacional de Credito",
        owner: "Inversiones Financieras 1444, C.A.",
        value: "BNC",
        createdAt: date,
        updatedAt: date,
      },
      {
        bank_id: 191,
        coin_id: 6,
        account_number: "01910001482301019375",
        fiscal_number: "J-41114562-9",
        alias: "Cuenta Banco Nacional de Credito",
        owner: "Inversiones Financieras 1444, C.A.",
        value: "BNC_USD_CASH",
        createdAt: date,
        updatedAt: date,
      },
      {
        bank_id: 191,
        coin_id: 6,
        account_number: "01910001442301019380",
        fiscal_number: "J-41114562-LATIN AMERICAN MONEY SPA9",
        alias: "Cuenta Banco Nacional de Credito",
        owner: "Inversiones Financieras 1444, C.A.",
        value: "BNC_USD",
        createdAt: date,
        updatedAt: date,
      },
      {
        bank_id: 191,
        coin_id: 7,
        account_number: "0191-0001-4124-0100-3719",
        fiscal_number: "J-41114562-9",
        alias: "Cuenta Banco Nacional de Credito",
        owner: "Inversiones Financieras 1444, C.A.",
        value: "BNC_EUR",
        createdAt: date,
        updatedAt: date,
      },
      {
        bank_id: 151,
        coin_id: 1,
        account_number: "0151-0178-40-1000816072",
        fiscal_number: "J-41114562-9",
        alias: "Cuenta Banco Fondo Común",
        owner: "Inversiones Financieras 1444, C.A.",
        value: "BFC",
        createdAt: date,
        updatedAt: date,
      },
      {
        bank_id: 151,
        coin_id: 6,
        account_number: "0151-0100-85-1001245305",
        fiscal_number: "J-41114562-9",
        alias: "Cuenta Banco Fondo Común",
        owner: "Inversiones Financieras 1444, C.A.",
        value: "BFC_USD",
        createdAt: date,
        updatedAt: date,
      },
      {
        bank_id: 151,
        coin_id: 7,
        account_number: "0151-0100-87-1001245321",
        fiscal_number: "J-41114562-9",
        alias: "Cuenta Banco Fondo Común",
        owner: "Inversiones Financieras 1444, C.A.",
        value: "BFC_EUR",
        createdAt: date,
        updatedAt: date,
      },
      {
        bank_id: 174,
        coin_id: 1,
        account_number: "0174-0131-91-1314419910",
        fiscal_number: "J-41114562-9",
        alias: "Cuenta Banplus",
        owner: "Inversiones Financieras 1444, C.A.",
        value: "BANPLUS",
        createdAt: date,
        updatedAt: date,
      },
      {
        bank_id: 174,
        coin_id: 6,
        account_number: "0174-0720-1772-0434-6162",
        fiscal_number: "J-41114562-9",
        alias: "Cuenta Banplus",
        owner: "Inversiones Financieras 1444, C.A.",
        value: "BANPLUS_USD",
        createdAt: date,
        updatedAt: date,
      },
      {
        bank_id: 170,
        coin_id: 8,
        account_number: "0170044220000000837134",
        fiscal_number: "30-71634281-2",
        alias: "Cuenta Banco Francés (BBVA)",
        owner: "Bonairex SAS",
        value: "BBVA_ARS",
        createdAt: date,
        updatedAt: date,
      },
      {
        bank_id: 170,
        coin_id: 6,
        account_number: "0170044226000006016034",
        fiscal_number: "30-71634281-2",
        alias: "Cuenta Banco Francés (BBVA)",
        owner: "Bonairex SAS",
        value: "BBVA_USD",
        createdAt: date,
        updatedAt: date,
      },
      {
        bank_id: 122,
        coin_id: 9,
        account_number: "23571685051",
        fiscal_number: "76685656-K",
        alias: "Cuenta Banco Estado",
        owner: "LATIN AMERICAN MONEY SPA",
        value: "BANCO_ESTADO",
        createdAt: date,
        updatedAt: date,
      },
      {
        bank_id: 1,
        coin_id: 1,
        account_number: "0172-0110-76-1104341860",
        fiscal_number: "J-41114562-9",
        alias: "Cuenta Banca Amiga",
        owner: "INVERSIONES FINANCIERAS 1444, C.A.",
        value: "Bancamiga",
        createdAt: date,
        updatedAt: date,
      },
      {
        bank_id: 1,
        coin_id: 6,
        account_number: "0172-0110-71-1104367287",
        fiscal_number: "J-41114562-9",
        alias: "Cuenta Banca Amiga",
        owner: "INVERSIONES FINANCIERAS 1444, C.A.",
        value: "Bancamiga_USD_CASH",
        createdAt: date,
        updatedAt: date,
      },
      {
        bank_id: 1,
        coin_id: 6,
        account_number: "0172-0110-77-1104323611",
        fiscal_number: "J-41114562-9",
        alias: "Cuenta Banca Amiga",
        owner: "INVERSIONES FINANCIERAS 1444, C.A.",
        value: "Bancamiga_USD",
        createdAt: date,
        updatedAt: date,
      },
      {
        bank_id: 1,
        coin_id: 7,
        account_number: "0172-0110-70-1104359367",
        fiscal_number: "J-41114562-9",
        alias: "Cuenta Banca Amiga",
        owner: "INVERSIONES FINANCIERAS 1444, C.A.",
        value: "Bancamiga_EUR",
        createdAt: date,
        updatedAt: date,
      },
    ];

    csvBankVeinte.writeRecords(records_bankVeinte).then(() => {
      console.log("Se ha creado exitosamente la tabla Bank Veinte");
    });

    return true;
  } catch (e) {
    console.log("Error ejecutando La Tabla Bank Veinte Formato CSV", e);
  }
}

// Exportamos los modelos
module.exports = {
  runTableBankVeinte,
};
