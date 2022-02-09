


// ***************************************
// INFORMACION PARA HACER EL SCRIPT
// ***************************************

// * Requerimientos 
// npm init -y 
// npm install sequelize --save 
// npm install sequelize-cli --save 
// dependencia de postgre
// npm install pg --save  
// npm install pg-hstore --save   
// npm install postgres --save    


// * El siguiente comando es para inicializar sequelize y crear las carpetas
// pero si las carpetas ya estan creadas no es necesario hacerlo
// npx sequelize init


// * En el archivo config.json colocamos todos los datos para la conexion
/* {
    "development": {
      "username": "postgres",
      "password": "",
      "database": "core_db",
      "host": "127.0.0.1",
      "dialect": "postgres"
    },
    "test": {
      "username": "root",
      "password": null,
      "database": "database_test",
      "host": "127.0.0.1",
      "dialect": "postgres"
    },
    "production": {
      "username": "root",
      "password": null,
      "database": "database_production",
      "host": "127.0.0.1",
      "dialect": "postgres"
    }
  } */
  


// * Para migrar la base de datos debemos crear una Db vacia.. se hace a nivel grafico puede
//   ser usando pgadmin



// * Debemos crear los modelos y las migraciones.. si ya estan creadas.. entonces las copiamos 
//   y las pegamos dentro de la carpeta.



// si hay que crear los modelos. Entonces asi lo hacemos Ejemplo..
// npx sequelize model:generate --name create-pos_users --attributes id:INTEGER,user_id:INTEGER,logo:STRING
//Si queremos hacer una releacion con otra tabla
//

// * Luego de crear la db vacia, hay que ejecutar este comando 
// npx sequelize db:migrate
