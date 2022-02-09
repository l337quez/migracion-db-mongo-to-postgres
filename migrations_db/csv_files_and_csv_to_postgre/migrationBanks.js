const fs = require("fs");
const Pool = require("pg").Pool;
const fastcsv = require("fast-csv");
let stream = fs.createReadStream("csv_files_and_csv_to_postgre/banks.csv");

async function runMigrationBanks() {
   
  try {
    console.log(`* Migrando datos de Banks a Postgre ...`);

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
          idleTimeoutMillis: 30000,
        });
        
        const query_disablefk =
          'ALTER TABLE banks DISABLE TRIGGER ALL; ';
          
        const query =
          //agregamos los campos de la tabla y el nombre de la tabla
          'INSERT INTO banks (prefix, name, active, country_id, "createdAt", "updatedAt") VALUES ($1, $2, $3, $4, $5, $6)';
 	

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
            console.log("   La Migracion a Postgres de Banks ha Comenzado");
          }
        });
      });

    stream.pipe(csvStream);

    return true;
  } catch (e) {
    console.log("Error ejecutando La Migracion a Postgres de Banks", e);
  }
}

// Exportamos los modelos
module.exports = {
  runMigrationBanks
};
