import {
    createConnection,
    ConnectionOptions,
    Connection,
  } from 'typeorm';
  
  import {Roles} from "./entity/psql/index";
  import configPsql = require("../config/psqlConfig")
  
   
  (async () => {
    let connection: Connection;
  
      const connectionPsql: Connection = await createConnection(configPsql);
      console.log("   Status of connection Psql:", connectionPsql.isConnected, '\n')
      await connectionPsql.synchronize(true);
  
       await connectionPsql.runMigrations({
        transaction: 'all',
       });


    })().catch(error => console.log("Error: ", error));