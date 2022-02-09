import "reflect-metadata";
import {Connection, createConnection, Repository} from "typeorm";
import {Roles} from "./entity/psql/index";
import {User as UserMongo} from "./entity/mongo/index";

import configPsql = require("../config/psqlConfig")
import configMongo = require("../config/mongoConfig")

// Requerimientos para generar logs
var fs = require('fs');
var util = require('util');
var log_file = fs.createWriteStream(__dirname + '/../logs/last_logs.log', {flags : 'w'});

// Todos los archivos tester
const usersTester = require("../testers/user");




var log_stdout = process.stdout;


 (async () => {
     console.log('\x1b[36m%s\x1b[0m',"  Bienvenido al testing de la base de datos Veinte")

    // Funcion para guardar los logs
    function logger(d) { //
        log_file.write(util.format(d) +  '\n');
        //log_stdout.write(util.format(d) + '\n');
      }; 

   // Si createConnection no recibe ningun parametro, busca en ormconfig.json

    // POSTGRES
    const connectionPsql: Connection = await createConnection(configPsql);
    console.log("   Status of connection Psql:", connectionPsql.isConnected, '\n')
    //const userRepo: Repository<User> = connectionPsql.getRepository(User)


/*     const roleRepo: Repository<Roles> = connectionPsql.getRepository(Roles)
    const roles = await roleRepo.find( { name: 'User' }); 
    console.log(roles[0].name)  */



    // MONGO
    const connectionMongo: Connection = await createConnection(configMongo);
    console.log("   Status of connection Mongo:", connectionMongo.isConnected) 


/*     const userRepoMongo: Repository<UserMongo> = connectionMongo.getRepository(UserMongo)
    const usereses = await userRepoMongo.findOne(1); 
    console.log(usereses)  */
    

    /* if (roles[0].name.toLowerCase() == usereses.role){
        console.log("esta todo bien")
        logger("todo bien")
       
    } */

    // Ejecutamos los terter
    await usersTester.runTesterUsers(connectionPsql, connectionMongo);


    
})().catch(error => console.log("Error: ", error));




//const roleRepo: Repository<Role>  = await connection.getRepository(Role)

    //const roles = await connection.manager.findOne(Role, 1); 
/*     const role = new Roles()
    role.name = "test";
    role.description = "test";
    role.active = true;
    role.createdBy = 1;
    role.updatedBy = 1;
    role.createdAt = new Date();
    role.updatedAt = new Date();
    await connection.manager.save(role);
    console.log("Saved a new user with id: " + role.id);  */
    
    /* var Listadoo =  await connection.manager.find(Roles); 
    console.log(Listadoo)  */

   // const roles = await connection.getRepository(Role).findOne(1);
/*     console.log("Loaded roles: ", roles);
    console.log("tipo: ", typeof(roles)); */

/* 
createConnection().then(async connection => {

    console.log("Inserting a new user into the database...");
    const user = new User();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 25;
    await connection.manager.save(user);
    console.log("Saved a new user with id: " + user.id); 

    console.log("Loading users from the database...");
    const roles = await connection.manager.find(Role);
    console.log("Loaded roles: ", roles);

    console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));
 */