const fs = require("fs");
const Pool = require("pg").Pool;
const fastcsv = require("fast-csv");
let stream = fs.createReadStream("csv_files_and_csv_to_postgre/profile.csv");


async function runMigrationProfile() {
   
  try {
    console.log(`* Migrando datos de Profile a Postgre ...`);

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
          idleTimeoutMillis: 170000,
        });
        
        const query_Enaablefk =
          'ALTER TABLE profiles ENABLE TRIGGER ALL; ';

        const query_disablefk =
          'ALTER TABLE profiles DISABLE TRIGGER ALL; ';
          
        const query =
          //agregamos los campos de la tabla y el nombre de la tabla
          'INSERT INTO profiles (id, user_id, kyc_id, "createdAt", "updatedAt") VALUES ($1, $2, $3, $4, $5)';
 	
          '2021-03-08 18:06:29.413-04'
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
                  console.log("inserted " + res.rowCount + " row:", row);
                }
              });
            });
          } finally {
            done();
            console.log("   La Migracion a Postgres de Profile ha Comenzado");
          }
        });
      });

    stream.pipe(csvStream);
    return true;
  } catch (e) {
    console.log("Error ejecutando La Migracion a Postgres de Profile", e);
  }
}

// Exportamos los modelos
module.exports = {
    runMigrationProfile
};
