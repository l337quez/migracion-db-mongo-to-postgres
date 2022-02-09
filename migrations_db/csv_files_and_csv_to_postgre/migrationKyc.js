const fs = require("fs");
const Pool = require("pg").Pool;
const fastcsv = require("fast-csv");
let stream = fs.createReadStream("csv_files_and_csv_to_postgre/kycs.csv");


async function runMigrationKyc() {
   
  try {
    console.log(`* Migrando datos de Kyc a Postgre ...`);

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
          idleTimeoutMillis: 150000,
        });
        
        const query_disablefk =
          'ALTER TABLE kycs DISABLE TRIGGER ALL; ';
          
        const query =
          //agregamos los campos de la tabla y el nombre de la tabla
          'INSERT INTO kycs (id, dni, name, second_name, surname, second_surname, fiscal_number, description, birth_date, birth_country_id, phone, movil_phone, fax, dni_creation_date, dni_expiration_date, address_id, type_kyc_id, type_user_id, office_id, "createdAt", "updatedAt") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21)';
 	

        pool.connect((err, client, done) => {
          if (err) throw err;

          try {
            // Desactivamos las llaves foraneas
            client.query(query_disablefk);

            csvData.forEach((row) => {
              client.query(query, row, (err, res) => {
                if (err) {
                  if (err.stack == "Connection terminated"){
                    console.log("Error de conexion")
                  }else{
                    console.log(err.stack);
                  }
                } else {
                  //console.log("inserted " + res.rowCount + " row:", row);
                }
              });
            });
          } finally {
            done();
            console.log("   La Migracion a Postgres de Kyc ha Comenzado");
          }
        });
      });

    stream.pipe(csvStream);
    return true;
  } catch (e) {
    console.log("Error ejecutando La Migracion a Postgres de Kyc", e);
  }
}

// Exportamos los modelos
module.exports = {
    runMigrationKyc
};
