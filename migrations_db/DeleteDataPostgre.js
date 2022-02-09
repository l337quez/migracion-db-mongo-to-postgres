/********************************************************************
 * Rutina para eliminar data de una tabla en postgres
 *********************************************************************/

const Pool = require("pg").Pool;
 

async function deleteTablesPostgre() {

    try {
    console.log(`\n*************************************************`);
    console.log(`Eliminando Tablas de  Postgre ...`);

    const pool = new Pool({
        user: "postgres",
        database: "core_db",
        password: "321Veinte",
        host: "localhost",
        port: 5432,
        max: 10, // max number of clients in the pool
        idleTimeoutMillis: 30000,
      });

      // Eliminamos las tablas 
      const query_users = 'DELETE FROM public.users;'
      const query_role = 'DELETE FROM public.roles;'
      const query_states = 'DELETE FROM public.states;'
      const query_countries = 'DELETE FROM public.countries;'
      const query_banks = 'DELETE FROM public.banks;'
      const query_coins = 'DELETE FROM public.coins;'
      const query_type_kyc = 'DELETE FROM public.type_kycs;'
      
      
      const query_bank_veintes = 'DELETE FROM public.bank_veintes;'
      const query_accounts = 'DELETE FROM public.accounts;'
      const query_profiles = 'DELETE FROM public.profiles;'
      const query_type_Users = 'DELETE FROM public.type_users;'
      const query_paymentMethod = 'DELETE FROM public.payment_methods;'
      const query_permissions = 'DELETE FROM public.permissions;'
      const query_countryCoinpaymentMethod = 'DELETE FROM public.country_coin_payment_method;'
      const query_countryContentType = 'DELETE FROM public.content_types;'
      const query_typecoins = 'DELETE FROM public.type_coins;'
      const query_officeCoin = 'DELETE FROM public.office_coin;'
      const query_typeAccounts = 'DELETE FROM public.type_accounts;'
      const query_balance = 'DELETE FROM public.balances;'
      const query_actions = 'DELETE FROM public.actions;'
      const query_coinpaymentmethod = 'DELETE FROM public.coin_payment_method;'
      const query_profilebalances = 'DELETE FROM public.profile_balances;'
      const query_statuses = 'DELETE FROM public.statuses;'
      const query_rolepermission = 'DELETE FROM public.role_permission;'
      const query_kyc = 'DELETE FROM public.kycs;' 
      //const query_rate = 'DELETE FROM public.rates;'
      
      
      pool.connect((err, client, done) => {
        if (err) throw err;
        try {
          // Desactivamos las llaves foraneas
          client.query(query_users);
          client.query(query_role);
          client.query(query_states);
          client.query(query_countries);
          client.query(query_banks);
          client.query(query_coins);
          client.query(query_type_kyc);
          
          client.query(query_bank_veintes);
          client.query(query_accounts);
          client.query(query_profiles);
          client.query(query_type_Users);
          // client.query(query_rate);
          client.query(query_paymentMethod);
          client.query(query_permissions);
          client.query(query_countryCoinpaymentMethod);
          client.query(query_countryContentType);
          client.query(query_typecoins);
          client.query(query_officeCoin);
          client.query(query_typeAccounts);
          client.query(query_balance);
          client.query(query_actions);
          client.query(query_coinpaymentmethod);
          client.query(query_profilebalances);
          client.query(query_statuses);
          client.query(query_rolepermission);
          client.query(query_kyc);
 

          

          console.log(` user \n role \n rate \n states \n countries \n banks \n coins \n bank_veintes`);
          console.log(` accounts \n profiles \n type_kyc \n type_Users \n paymentMethod \n permissions \n countryCoinpaymentMethod \n countryContentType`);
          console.log(` typecoins \n officeCoin \n typeAccounts \n balance \n actions \n coinpaymentmethod \n Profile Balance`);
          console.log(` statusUser \n rolepermission \n kyc `);


          
           /*  client.query(query, row, (err, res) => {
              if (err) {
                console.log(err.stack);
              } else {
                //console.log("inserted " + res.rowCount + " row:", row);
              }
            }); */
          
        } finally {
          done();
          // Forzamos la salida de la ejecucion de script por tiempo
          setTimeout(function () {
             return process.exit(1);
           }, 2500); // cambiar tiempo 
        }
      });


    return true;
    } catch (e) {
  console.log("Error Eliminando las tablas de Postgres", e);
    }
} 

function executeScript(callback) {
    callback();
  }
  executeScript(deleteTablesPostgre);


       