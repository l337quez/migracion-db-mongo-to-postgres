import { ConnectionOptions } from 'typeorm';

const configMongo: ConnectionOptions = {
    "name": "dbMongo",
    "type": "mongodb",
    "host": "localhost",
    "port": 27017,
    "database": "coindorDB",
    "synchronize": true,
    "logging": false,
    "entities": [
       "src/entity/mongo/**/*.ts"
    ],
    "migrations": [
       "src/migration/**/*.ts"
    ],
    "subscribers": [
       "src/subscriber/**/*.ts"
    ],
    "cli": {
       "entitiesDir": "src/entity/mongo",
       "migrationsDir": "src/migration",
       "subscribersDir": "src/subscriber"
    }
  };
  
  export = configMongo;