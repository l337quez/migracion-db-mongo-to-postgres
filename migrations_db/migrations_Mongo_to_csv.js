/********************************************************************
 * Migracion de Base de datos Mongo a PostgreSql
 *********************************************************************/

"use strict";
const mongoose = require("mongoose");

// Modelos
const userModel = require("./models_for_mongoose/user");
const coinModel = require("./models_for_mongoose/coin");
const accountModel = require("./models_for_mongoose/account");
const paymentMethodModel = require("./models_for_mongoose/paymentMethod");

// Operaciones con data obtenida de Mongo
const userOperation = require("./data_operations/reading_user");
const coinOperation = require("./data_operations/reading_coin");
const accountOperation = require("./data_operations/reading_account");
const paymentMethodOperation = require("./data_operations/reading_paymentMethod");


// Tablas Formato Csv
const coinsTableCsv = require("./creating_tables_csv/tableCoins");
const roleTableCsv = require("./creating_tables_csv/tableRole");
const kycsTableCsv = require("./creating_tables_csv/tableKycs");
const usersTableCsv = require("./creating_tables_csv/tableUsers");
const rateTableCsv = require("./creating_tables_csv/tableRate");
const statusUsersTableCsv = require("./creating_tables_csv/tablestatusUsers");
const typeCoinsTableCsv = require("./creating_tables_csv/tableType_coins");
const typeKycsTableCsv = require("./creating_tables_csv/tableType_kycs");
const typeProfilesTableCsv = require("./creating_tables_csv/tableType_profiles");
const typeAccountsTableCsv = require("./creating_tables_csv/tableType_accounts");
const rolePermissionTableCsv = require("./creating_tables_csv/tableRolePermission");
const permissionTableCsv = require("./creating_tables_csv/tablePermissions");
const actionsTableCsv = require("./creating_tables_csv/tableActions");
const addressesTableCsv = require("./creating_tables_csv/tableAddress");
const bankTableCsv = require("./creating_tables_csv/tableBank");
const countriesTableCsv = require("./creating_tables_csv/tableCountries");
const accountsTableCsv = require("./creating_tables_csv/tableAccounts");
const balancesTableCsv = require("./creating_tables_csv/tableBalances");
const profileTableCsv = require("./creating_tables_csv/tableProfile");
const profileBalanceTableCsv = require("./creating_tables_csv/tableProfileBalance");
const PaymentMethodTableCsv = require("./creating_tables_csv/tablePaymentMethod");
const BankVeinteTableCsv = require("./creating_tables_csv/tableBankVeinte");
const StateTableCsv = require("./creating_tables_csv/tableStates");
const BankCoinTableCsv = require("./creating_tables_csv/tableBankCoin");
const BussinesTableCsv = require("./creating_tables_csv/tableBusiness");

const OfficeTableCsv = require("./creating_tables_csv/table Office");
const OfficeCoinTableCsv = require("./creating_tables_csv/tableOfficeCoin");
const ContentTypeTableCsv = require("./creating_tables_csv/tableContentType");
const CoinPaymentMethodTableCsv = require("./creating_tables_csv/tableCoinPaymentMethod");
const CountryCoinPaymentMethodTableCsv = require("./creating_tables_csv/tableCountryCoinPaymentMethod");


// Conexión a la Base de Datos MONGO
//const db_name = "core_db"; // Nombre de la base de datos
const db_name = "coindorDB"; // Nombre de la base de datos
const uri = "mongodb://localhost/" + db_name;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set("useCreateIndex", true);
const db = mongoose.createConnection(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


async function scriptMigrations() {


try {

/********************************************************************
 * Leemos la data de Mongo
 *********************************************************************/

    console.log(`\n*************************************************`);
    console.log('\n'+'\x1b[33m%s\x1b[0m',`Leemos Colecciones Mongo`);

    // Querys
    const findUser = await userModel.userSchema.find();
    const counterUser = await userModel.userSchema.countDocuments();
    const findCoin = await coinModel.CoinSchema.find();
    const counterCoin = await coinModel.CoinSchema.countDocuments();
    const findAccount = await accountModel.AccountSchema.find();
    const counterAccount = await accountModel.AccountSchema.countDocuments();
    const findpaymentMethod = await paymentMethodModel.PaymentMethodSchema.find();
    const counterpaymentMethod = await paymentMethodModel.PaymentMethodSchema.countDocuments();
    const CountDocTierOne = await userModel.userSchema.find({tier :1}).countDocuments();

    
    // ***********************
    // Operaciones con la Data

    // Coleccion user
    var jsonUser = await userOperation.doOperationUser(findUser);

    // Coleccion coin
    var jsonCoin = await coinOperation.doOperationCoin(findCoin);

    // Coleccion account
    var jsonAccount = await accountOperation.doOperationAccount(findAccount);

   // Coleccion paymentMethod
   var jsonPaymentMethod = await paymentMethodOperation.doOperationPaymentMethod(findpaymentMethod);
   


    /********************************************************************
     * Creamos las Tablas en Formato CSV
     *********************************************************************/
    console.log(`\n*************************************************`);
    console.log('\n'+'\x1b[33m%s\x1b[0m',`Creando las Tablas en Formato CSV`);
    // Tabla User
    await usersTableCsv.runTableUsers(jsonUser);
    // Tabla Kycs
     await kycsTableCsv.runTableKycs(jsonUser, counterUser);
    // Tabla Role
    await roleTableCsv.runTableRole();
    // Tabla Coins
    await coinsTableCsv.runTableCoins();
    // Tabla Rate
    await rateTableCsv.runTableRate(jsonCoin, counterCoin);
    // Tabla statusUsers
    await statusUsersTableCsv.runTableStatusUsers();
    // Tabla type Coins
    await typeCoinsTableCsv.runTableTypeCoins();
    // Tabla type Kycs
    await typeKycsTableCsv.runTableTypeKycs();
    // Tabla type Users
    await typeProfilesTableCsv.runTableTypeProfiles();
    // Tabla type Accounts
    await typeAccountsTableCsv.runTableTypeAccounts();
    // Tabla Role Permissiones
    await rolePermissionTableCsv.runTableRolePermissions();
    // Tabla Permissiones
    await permissionTableCsv.runTablePermissions();
    // Tabla Actions
    await actionsTableCsv.runTableActions();
    // Tabla Addreses
    await addressesTableCsv.runTableAddresses();
    // Tabla Bank, "Retorna bank_name que es un array de nombres de bancos"
    var bank_name= await bankTableCsv.runTableBank(jsonAccount, counterAccount);
    // Tabla Countries
    await countriesTableCsv.runTableCountries(jsonAccount, counterAccount);
    // Tabla Balances
    var userId_of_balance = await balancesTableCsv.runTableBalance(jsonUser,counterUser);
    // Tabla Profile
    var userId_of_profile =await profileTableCsv.runTableProfile(jsonUser,counterUser, CountDocTierOne);
    // Tabla Accounts
    await accountsTableCsv.runTableAccounts(jsonAccount, counterAccount, bank_name, jsonUser, userId_of_profile[2]);
    // Tabla Profile Balance   (pasamos userid y tamaño del json a recorrer)
    await profileBalanceTableCsv.runTableProfileBalance(userId_of_balance[0], userId_of_balance[1], userId_of_profile[0], userId_of_profile[1]);
    // Tabla Payment Method
    await PaymentMethodTableCsv.runTablePaymentMethod( jsonPaymentMethod, counterpaymentMethod);
    // Tabla Bank Veinte
    await BankVeinteTableCsv.runTableBankVeinte();
    // Tabla State
    await StateTableCsv.runTableStates();
    // Tabla Bank Coin
    await BankCoinTableCsv.runTableBankCoin();
    // Tabla Bussines
    await BussinesTableCsv.runTableBussines();
    

    // Tabla Office
    await OfficeTableCsv.runTableOffice();
    // Tabla Office Coin
    await OfficeCoinTableCsv.runTableOfficeCoin();
    // Tabla Content Type 
    await ContentTypeTableCsv.runTableContentType();
    // Tabla Coin Payment Method  
    await CoinPaymentMethodTableCsv.runTableCoinPaymentMethod();
    // Tabla Country Coin Payment Method  
    await CountryCoinPaymentMethodTableCsv.runTableCountryCoinPaymentMethod(); 
    // Tabla Bank Veinte
    await BankVeinteTableCsv.runTableBankVeinte();
    
    console.log("\n");
 

    return true;
  } catch (e) {
    console.log("Error leyendo la base de datos", e);
    }
       finally{
      
      // Forzamos la salida de la ejecucion de script por tiempo
       setTimeout(function () {
        return process.exit(1);
      }, 15000); // cambiar tiempo 
    } 
}

function executeScript(callback) {
  callback();
}
executeScript(scriptMigrations);



// cachear el error y parar el script
//Error: Connection terminated
