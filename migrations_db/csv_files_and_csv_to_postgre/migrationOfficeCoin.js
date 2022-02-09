const fs = require("fs");
const Pool = require("pg").Pool;
const fastcsv = require("fast-csv");
let stream = fs.createReadStream("csv_files_and_csv_to_postgre/officecoin.csv");


async function runMigrationOfficeCoin() {
  try {
    console.log(`* Migrando datos de Office Coin a Postgre ...`);

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

        // deshabilitamos las llaves foraneas
        const query_disablefk =
        'ALTER TABLE office_coin DISABLE TRIGGER ALL; ';

        const query =
          'INSERT INTO office_coin (id, office_id, coin_id, "createdAt", "updatedAt") VALUES ($1, $2, $3, $4, $5)';

        pool.connect((err, client, done) => {
          if (err) throw err;

          try {
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
            console.log("   La Migracion a Postgres de  Office Coin ha Comenzado");
          }
        });
      });

    stream.pipe(csvStream);

    return true;
  } catch (e) {
    console.log("Error ejecutando La Migracion a Postgres de  Office Coin", e);
  }
}

// Exportamos los modelos
module.exports = {
    runMigrationOfficeCoin
};
