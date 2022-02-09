/********************************************************************
 * Migracion de Base de datos Mongo a PostgreSql
 *********************************************************************/

// Tablas de postgres
const usersTablePostgre = require("./csv_files_and_csv_to_postgre/migrationUser");
const roleTablePostgre = require("./csv_files_and_csv_to_postgre/migrationRole");
const rateTablePostgre = require("./csv_files_and_csv_to_postgre/migrationRate");
const statesTablePostgre = require("./csv_files_and_csv_to_postgre/migrationStates");
const countriesTablePostgre = require("./csv_files_and_csv_to_postgre/migrationCountries");
const banksTablePostgre = require("./csv_files_and_csv_to_postgre/migrationBanks");
const coinsTablePostgre = require("./csv_files_and_csv_to_postgre/migrationCoins");
const banksVeinteTablePostgre = require("./csv_files_and_csv_to_postgre/migrationBanksVeinte");
const accountsTablePostgre = require("./csv_files_and_csv_to_postgre/migrationAccounts");
const profilesTablePostgre = require("./csv_files_and_csv_to_postgre/migrationProfile");
const typeKycTablePostgre = require("./csv_files_and_csv_to_postgre/migrationTypeKyc");
const typeUsersTablePostgre = require("./csv_files_and_csv_to_postgre/migrationTypeUsers");
const paymentMethodTablePostgre = require("./csv_files_and_csv_to_postgre/migrationPaymentMethod");
const permissionsTablePostgre = require("./csv_files_and_csv_to_postgre/migrationPermission");
const countryCoinpaymentMethodTablePostgre = require("./csv_files_and_csv_to_postgre/migrationCountryCoinPaymentMethod");
const contentTypeTablePostgre = require("./csv_files_and_csv_to_postgre/migrationContentType");
const typeCoinsTablePostgre = require("./csv_files_and_csv_to_postgre/migrationTypeCoins");
const officeCoinsTablePostgre = require("./csv_files_and_csv_to_postgre/migrationOfficeCoin");
const typeAccountTablePostgre = require("./csv_files_and_csv_to_postgre/migrationTypeAccounts");
const balanceTablePostgre = require("./csv_files_and_csv_to_postgre/migrationBalance");
const actionsTablePostgre = require("./csv_files_and_csv_to_postgre/migrationActions");
const coinPaymentMethodTablePostgre = require("./csv_files_and_csv_to_postgre/migrationCoinPaymentMethod");
const profileBalanceTablePostgre = require("./csv_files_and_csv_to_postgre/migrationProfileBalance");
const statusUserTablePostgre = require("./csv_files_and_csv_to_postgre/migrationStatusUser");
const kycTablePostgre = require("./csv_files_and_csv_to_postgre/migrationKyc");




// * Tablas que no se migrara data
// Tabla Address
// Bussines
// Office


async function scriptMigrations() {
  try {
    /********************************************************************
     * llamamos scritp que llenan las tablas PostgreSql
     * Create Tables Postgres
     *********************************************************************/
    console.log(`\n*************************************************`);
    console.log('\n'+'\x1b[33m%s\x1b[0m',`Migrando Tablas CSV a PostgreSql\n`);

      // ------------------------------------------
      // * PRIMARY TABLES *

      // Roles
      await roleTablePostgre.runMigrationRole();

      // Countries
      await countriesTablePostgre.runMigrationCountries();

      // Type-Coins
      //await typeCoinsTablePostgre.runMigrationTypeCoins();

      // Type-Accounts
      //await typeAccountTablePostgre.runMigrationTypeAccounts();

      // Type-KYC
/*       await typeKycTablePostgre.runMigrationTypeKyc();

      // Type-User
      await typeUsersTablePostgre.runMigrationTypeUsers();

      // PaymentMethods
      await paymentMethodTablePostgre.runMigrationPaymentMethod();

      // Actions
      await actionsTablePostgre.runMigrationActions();

      // Content-Type
      await contentTypeTablePostgre.runMigrationContentType();

      // Status-User
      await statusUserTablePostgre.runMigrationstatusUsers(); */


      // ------------------------------------------
      // * DEPENDING TABLES *

      // States
      // FK: country_id
      // await statesTablePostgre.runMigrationStates();

      // Coins
      // FK: type_coin_id
      // await coinsTablePostgre.runMigrationCoins();

      // Rate
      // FK: crypto_id & fiat_id
      // sin embargo no existen las tablas crypto y fiat,
      // pienso que debería ser coin_id
      // await rateTablePostgre.runMigrationRate();

      // Banks
      // FK: country_id
      // await banksTablePostgre.runMigrationBanks();

      // Banks-Veinte
      // FK: bank_id & coin_id
      // await banksVeinteTablePostgre.runMigrationBanksVeinte();


      // Users
      // FK: role_id, status_id
      // ( creo que estos otros no de momento: auth_id, uu_id, posiblemente correspondan
      // a la authenticación Oauth)
      // await usersTablePostgre.runMigrationUser();

      // Profile
      // FK: user_id & kyc_id
      // await profilesTablePostgre.runMigrationProfile();


      // Accounts
      // FK: bank_id, type_account_id, profile_id
      // await accountsTablePostgre.runMigrationAccount();



      // KYC
      // FK: birth_country_id, address_id, type_kyc_id, type_user_id and office_id
      // await kycTablePostgre.runMigrationKyc();

      // PERMISSION
      // FK: action_id & content_type_id
      // await permissionsTablePostgre.runMigrationPermissions();

      // Coin-PaymentoMethod
      // FK: coin_id & payment_method_id
      // await coinPaymentMethodTablePostgre.runMigrationCoinpaymentMethod();

      // Country-CoinPaymentMethod
      // FK: country_id & coin_payment_method_id
      // await countryCoinpaymentMethodTablePostgre.runMigrationCountryCoinPaymentMethod();


      // Balance
      // FK: coind_id
      // await balanceTablePostgre.runMigrationbBalance();


      // Profile-Balance (Pivote)
      // FK: profile_id & balance_id
      // await profileBalanceTablePostgre.runMigrationbProfileBalance();





    //await rateTablePostgre.runMigrationRate();
    //await coinsTablePostgre.runMigrationCoins();

    //await roleTablePostgre.runMigrationRole();
    //   await countriesTablePostgre.runMigrationCountries();
    //   await statesTablePostgre.runMigrationStates();
    //   await banksTablePostgre.runMigrationBanks();
    //   await banksVeinteTablePostgre.runMigrationBanksVeinte();
    //await accountsTablePostgre.runMigrationAccount();



    //await profilesTablePostgre.runMigrationProfile();
/*  
    await typeKycTablePostgre.runMigrationTypeKyc();
    await typeUsersTablePostgre.runMigrationTypeUsers();
    await paymentMethodTablePostgre.runMigrationPaymentMethod();
    await permissionsTablePostgre.runMigrationPermissions();
    await countryCoinpaymentMethodTablePostgre.runMigrationCountryCoinPaymentMethod();
    await contentTypeTablePostgre.runMigrationContentType();
    await typeCoinsTablePostgre.runMigrationTypeCoins();
    await officeCoinsTablePostgre.runMigrationOfficeCoin();
    await typeAccountTablePostgre.runMigrationTypeAccounts(); 
    await balanceTablePostgre.runMigrationbBalance();
    await actionsTablePostgre.runMigrationActions();
    await coinPaymentMethodTablePostgre.runMigrationCoinpaymentMethod();
    await statusUserTablePostgre.runMigrationstatusUsers();
    await kycTablePostgre.runMigrationKyc(); */
    
    
    
    //await profileBalanceTablePostgre.runMigrationbProfileBalance();

    //await usersTablePostgre.runMigrationUser();

    return true;
  } catch (e) {
    console.log("Error leyendo la base de datos", e);
  }
  /*    finally{
      
      }  */
  /*    // Forzamos la salida de la ejecucion de script por tiempo
       setTimeout(function () {
        return process.exit(1);
      }, 10000); // cambiar tiempo  */
}

function executeScript(callback) {
  callback();
}
executeScript(scriptMigrations);

// cachear el error y parar el script
//Error: Connection terminated
