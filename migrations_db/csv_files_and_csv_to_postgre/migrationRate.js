const fs = require("fs");
const Pool = require("pg").Pool;
const fastcsv = require("fast-csv");
let stream = fs.createReadStream("csv_files_and_csv_to_postgre/rate.csv");


async function runMigrationRate() {
  try {
    console.log(`* Migrando datos de Rate a Postgre ...`);

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
          'ALTER TABLE rates DISABLE TRIGGER ALL; ';
        const query =
          'INSERT INTO rates (crypto_id, fiat_id, sell_rate, buy_rate, active, "createdAt", "updatedAt") VALUES ($1, $2, $3, $4, $5, $6, $7)';

        pool.connect((err, client, done) => {
          if (err) throw err;
            // Desactivamos las llaves foraneas
            client.query(query_disablefk);
          try {
            // Desactivamos las llaves foraneas
            client.query(query_disablefk);
            csvData.forEach((row) => {
              client.query(query, row, (err, res) => {
                if (err) {
                  console.log(err.stack);
                } else {
                 // console.log("inserted " + res.rowCount + " row:", row);
                }
              });
            });
          } finally {
            done();
          }
        });
      });

    stream.pipe(csvStream);

    return true;
  } catch (e) {
    console.log("Error ejecutando La Migracion a Postgres de Rate", e);
  }
}

// Exportamos los modelos
module.exports = {
  runMigrationRate
};
