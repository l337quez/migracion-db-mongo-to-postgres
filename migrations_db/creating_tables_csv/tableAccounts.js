const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const moment= require('moment')

/********************************************************************
 * Tabla Accounts
 * id se relaciona con el campo de mongo y el titulo con postgres
 * tableBank lo usamos para  obtener los id de referencia
 
 Teniendo los ids de mongo de los usuarios que tienen cuenta bancaria, buscamos la
 posicion de esos usuarios dentro del array de todos los usuarios y asi
 obtendremos el id profile indicado para cada numero de cuenta.
 *********************************************************************/

async function runTableAccounts(json, lengthDocuments, namesBanks, jsonUser, userId_of_profile) {

  try {
    console.log(`* Creando la Tabla Accounts en Formato CSV `);

    //Obtenemos el id profile comparando id de mongo user con id_user de account de Mongo
    var profileIdForTable = []; 
    var idUserInACcount = [];
    var position
    var idProfileForAccount
    var idUserAccountPostgre = [];
    var idUserProfilePostgre


    for (let j = 0; j < json.userId.length; j++) {// id useer mongo de la coleccion account

          // Guardamos id numerico (postgre) de users id users relacionado con cada number account  
          // por lo tanto esto sera el id profile
          position = jsonUser._id.indexOf(String(json.userId[j])) + 1 // +1, para que no empience en 0
          idUserAccountPostgre.push(position)


/*         //  console.log("account".json.userId.length)

          //guardamos id numerico (postgre) de users profile 
          idUserProfilePostgre = jsonUser._id.indexOf(userId_of_profile[j]) + 1 // +1, para que no empience en 0
          console.log("profile",userId_of_profile.length)
          
          // Ahora buscamos dentro de user account la posicion del id del user profile
          idProfileForAccount = idUserAccountPostgre.indexOf(idUserProfilePostgre) + 1 */

          //position5 = jsonUser._id.indexOf("60181d4abe8e320012772f7c") + 1 
/*        console.log("userId_of_profile", userId_of_profile[j])
          console.log("json.userId", typeof(json.userId[j]))
          console.log("posiciooooooon", position4) */

          //idUserInACcount.push(idProfileForAccount) 

          /*  if (position != 0){
          } */
    }
    

/* console.log(json.userId[0],json._id[0])
console.log("id user implicito", idUserInACcount) */

/*     for (let j = 0; j < idUserInACcount.length; j++) {
      position1 = userId_of_profile.indexOf(idUserInACcount[j]) + 1  // +1, para que no empience en 0
      position2 = userId_of_profile.indexOf(idUserInACcount[j]) 
     
     if (position2 == -1){
      // console.log("este id es -1: ", idUserInACcount[j])
       //console.log("este id es -1: ", jsonUser._id[idUserInACcount[j]]) 
      }

      if (position2 != -1){
        profileIdForTable.push(position1) 
      }

    } */



    // convertimos el tipo de cuenta en un indice numerico
    var id_type_account = [];
    for (let k = 0; k < lengthDocuments; k++) {

      if (json.type[k] == "AHORRO"){
        id_type_account.push(1)
    }
      if (json.type[k] == "CORRIENTE"){
        id_type_account.push(2)
      }
      if (json.type[k] == "MOVIL"){
        id_type_account.push(3)
      }
      // validando cuentas pago movil que tienen como tipo de cuenta = AHORRO
      // Nota: Bancaamiga tiene numeros de cuenta de 12 digitas y menores
      if (json._id[k].substr(0,2) == "04" && json._id[k].length < 12 && json.type[k] == "AHORRO"){
        id_type_account.push(3)
      }

    }


// funcion para hacer retardos en js
        //await sleep(10)
/*     function sleep(ms) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    }  */


    // CABECERAS DEL CSV
     const csvAccount = createCsvWriter({
      path: "./csv_files_and_csv_to_postgre/account.csv", // path del archivo csv
      header: [
        { id: "id", title: "id" },
        { id: "account_number", title: "account_number" },
        { id: "alias", title: "alias" },
        { id: "bank_id", title: "bank_id" },
        { id: "type_account_id", title: "type_account_id" },
        { id: "profile_id", title: "profile_id" },
        { id: "active", title: "active" },
        { id: "createdAt", title: "createdAt" },
        { id: "updatedAt", title: "updatedAt" }
      ],
    });
    const date=  Math.floor(new Date().getTime() / 1000);
    const records_Account = [];
    const ids_banks = [];
    var position_bank_name;


// buscamos si el nombre, la posicion del array es el id_bank
for (let i = 0; i < json.bankName.length; i++) {
  
  if (json.bankName[i] == "Venezuela"){
    json.bankName[i] = "Venezuela (BDV)"
    
  } else if (json.bankName[i] == "Occidental de Descuento"){
    json.bankName[i] = "Occidental de Descuento (BOD)"
  } 
   else if (json.bankName[i] == "Nacional de Crédito"){
    json.bankName[i] = "Nacional de Crédito (BNC)"
  } 
  else if (json.bankName[i] == "Fondo Común"){
    json.bankName[i] = "Fondo Común (BFC)"
  } 

  position_bank_name= namesBanks.indexOf(json.bankName[i]) + 1 // +1 para que no comience en 0
  ids_banks.push( position_bank_name); 
}


    for (let i = 0; i < lengthDocuments; i++) {

        records_Account.push({
        id: i+1,
        account_number: "'" +json._id[i],
        alias: "",
        bank_id: ids_banks[i],
        type_account_id: id_type_account[i],
        profile_id: idUserAccountPostgre[i],
        active: true,
        createdAt: date,
        updatedAt: date
      });
    }
    csvAccount.writeRecords(records_Account).then(() => {
      console.log("Se ha creado exitosamente la tabla ACcount");
    }); 

    return true;
  } catch (e) {
    console.log("Error ejecutando La Tabla Account Formato CSV", e);
  }
}

// Exportamos los modelos
module.exports = {
    runTableAccounts,
};
