import { ConnectionOptions } from 'typeorm';

const configPsql: ConnectionOptions = {
    "name": "dbPsql",
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "postgres",
    "password": "321Veinte",
    "database": "core_db",
    "synchronize": false,
    "logging": true,
    "entities": [
       "src/entity/psql/**/*.ts"
    ],
    "migrations": [
       "src/migration/**/*.ts"
    ],
    "subscribers": [
       "src/subscriber/**/*.ts"
    ],
    "cli": {
       "entitiesDir": "src/entity/psql",
       "migrationsDir": "src/migration",
       "subscribersDir": "src/subscriber"
    }
  };
  
  export = configPsql;