const fs = require("fs");
const Pool = require("pg").Pool;
const fastcsv = require("fast-csv");
let stream = fs.createReadStream("csv_files_and_csv_to_postgre/type_accounts.csv");

async function runMigrationTypeAccounts() {
   
  try {
    console.log(`* Migrando datos de Type Accounts a Postgre ...`);

    let csvData = [];
    let csvStream = fastcsv
      .parse()
      .on("data", function (data) {
        csvData.push(data);
      })
      .on("end", function () {
        // remove the first line: header
        csvData.shift();

        const pool = new Pool({
          user: "postgres",
          database: "core_db",
          password: "321Veinte",
          host: "localhost",
          port: 5432,
          max: 10, // max number of clients in the pool
          idleTimeoutMillis: 3000,
        });
        
        const query_disablefk =
          'ALTER TABLE type_accounts DISABLE TRIGGER ALL; ';
          
        const query =
          //agregamos los campos de la tabla y el nombre de la tabla
          //'INSERT INTO type_accounts (id, description, active, "createdAt", "updatedAt") VALUES ($1, $2, $3, $4, $5)';
          'INSERT INTO type_accounts (id, name, active, "endAt", "createdAt", "updatedAt") VALUES ($1, $2, $3, $4, $5, $6)';


        pool.connect((err, client, done) => {
          if (err) throw err;

          try {
            // Desactivamos las llaves foraneas
            client.query(query_disablefk);

            csvData.forEach((row) => {
              client.query(query, row, (err, res) => {
                if (err) {
                  console.log(err.stack);
                } else {
                  //console.log("inserted " + res.rowCount + " row:", row);
                }
              });
            });
          } finally {
            done();
            console.log("   La Migracion a Postgres de Type Accounts ha Comenzado");
          }
        });
      });

    stream.pipe(csvStream);

    return true;
  } catch (e) {
    console.log("Error ejecutando La Migracion a Postgres de Type Accounts", e);
  }
}

// Exportamos los modelos
module.exports = {
    runMigrationTypeAccounts
};