const fs = require("fs");
const Pool = require("pg").Pool;
const fastcsv = require("fast-csv");
let stream = fs.createReadStream("csv_files_and_csv_to_postgre/countries.csv");

async function runMigrationCountries() {
   
  try {
    console.log(`* Migrando datos de Countries a Postgre ...`);

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
          idleTimeoutMillis: 60000,
        });
        
        const query_disablefk =
          'ALTER TABLE countries DISABLE TRIGGER ALL; ';
          
        const query =
          //agregamos los campos de la tabla y el nombre de la tabla
         // 'INSERT INTO countries (name, active, "endAt", "createdAt", "updatedAt") VALUES ($1, $2, $3, $4, $5)';
         'INSERT INTO countries (name, active, "endAt", "createdAt", "updatedAt") VALUES ($1, $2, $3 , $4, $5)';
 	
          /* NULLIF('$var','')::integer
          cast(NULLIF('$variable[$i]','') as double precision) */

        pool.connect((err, client, done) => {
          if (err) throw err;

          try {
            // Desactivamos las llaves foraneas
            client.query(query_disablefk);
            
            csvData.forEach((row) => {
              console.log(row[2])

             /*  row.forEach((col) => {
                console.log(col)
                if (col == 'null'){
                  col[2]= NULL
                }
              }) */
              
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
            console.log("   La Migracion a Postgres de Countries ha Comenzado");
          }
        });
      });

    stream.pipe(csvStream);

    return true;
  } catch (e) {
    console.log("Error ejecutando La Migracion a Postgres de Countries", e);
  }
}

// Exportamos los modelos
module.exports = {
  runMigrationCountries
};
