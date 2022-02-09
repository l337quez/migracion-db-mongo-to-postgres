import {Roles} from "../src/entity/psql/index";
import {User as UserMongo} from "../src/entity/mongo/index";
import { Repository } from "typeorm";

// Requerimientos para generar logs
var fs = require('fs');
var util = require('util');
var log_file = fs.createWriteStream(__dirname + '/../logs/users_logs.log', {flags : 'w'});


async function runTesterUsers( connectionPsql, connectionMongo) {

console.log('\n'+'\x1b[33m%s\x1b[0m',"  * Script de testeo de usuarios" + '\n')

    // Funcion para guardar los logs
    function logger(d) { //
        log_file.write(util.format(d) +  '\n');
        //log_stdout.write(util.format(d) + '\n');
        }; 

    // PSQL
/*     const roleRepo: Repository<Roles> = connectionPsql.getRepository(Roles)
    const roles = await roleRepo.find( { name: 'User' }); 
    console.log(roles) 
    console.log(roles[0].name)  */

    // MONGO
    const userRepoMongo: Repository<UserMongo> = connectionMongo.getRepository(UserMongo)
    const usereses = await userRepoMongo.findOne(1); 
    console.log(usereses) 


  /*   if (roles[0].name.toLowerCase() != usereses.role){
        logger("El role no es correcto")
    } */


}

// Exportamos los modelos
module.exports = {
    runTesterUsers,
  };
  