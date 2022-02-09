/********************************************************************
 * Data de User
 * Operacion con la data leida de mongo
 ********************************************************************/

async function doOperationUser(findUser) {


  try {
    console.log(`* Leemos Coleccion User de Mongo`);
    //console.log(findUser)


    // Creamos el JSON con campos del documento
    var jsonUser = new Object();
    // Datos para tabla USER
    jsonUser._id = [];
    jsonUser.email = [];
    jsonUser.password = [];
    jsonUser.role = [];
    jsonUser.lastSession = [];
    jsonUser.tier = [];
    jsonUser.status = [];
    jsonUser.updatedAt = [];
    jsonUser.coins = [];
    // Datos para tabla Kycs
    jsonUser.kyc = [];
    jsonUser.name = [];
    jsonUser.phone = [];
    jsonUser.surname = [];
    jsonUser.secondSurname = [];
    jsonUser.secondName = [];
    jsonUser.identityNumber = [];
    jsonUser.birthDate = [];

    jsonUser.idCardExpiryDate = [];
    jsonUser.idCardReleaseDate = [];
    jsonUser.idCardReleaseCountry = [];

    
    // Para profile
    jsonUser.lastUpdated = [];
    jsonUser.lastChangeUpdated = [];

    // Datos para Balances
    jsonUser.coinsOwned = [];

    // Hacemos la Query de busqueda y luego Recorremos los documentos de la coleccion y guardamos la data de un campo en un array
    //find.forEach(function (myDoc) {console.log("Usuario:" + myDoc.email);})
    findUser.forEach(function (myDoc) {
      jsonUser._id.push(myDoc._id);
    });
    findUser.forEach(function (myDoc) {
      jsonUser.email.push(myDoc.email);
    });
    findUser.forEach(function (myDoc) {
      jsonUser.password.push(myDoc.password);
    });
    findUser.forEach(function (myDoc) {
      jsonUser.role.push(myDoc.role);
    });
    findUser.forEach(function (myDoc) {
      jsonUser.tier.push(myDoc.tier);
    });
    findUser.forEach(function (myDoc) {
      jsonUser.status.push(myDoc.status);
    });

  
    //coins
    findUser.forEach(function (myDoc) {
      jsonUser.coins.push(myDoc.coins);
    });

    findUser.forEach(function (myDoc) {
      jsonUser.lastSession.push(myDoc.lastSession);
    });
    findUser.forEach(function (myDoc) {
      jsonUser.updatedAt.push(myDoc.updatedAt);
    });

    // Datos para tabla Kycs
     findUser.forEach(function (myDoc) {
      jsonUser.kyc.push(myDoc.kyc);
    }); 
    findUser.forEach(function (myDoc) {
      jsonUser.name.push(myDoc.name);
    });
    findUser.forEach(function (myDoc) {
      jsonUser.surname.push(myDoc.surname);
    });
    findUser.forEach(function (myDoc) {
      jsonUser.phone.push(myDoc.phone);
    });
    findUser.forEach(function (myDoc) {
      jsonUser.identityNumber.push(myDoc.identityNumber);
    });
    findUser.forEach(function (myDoc) {
      jsonUser.secondSurname.push(myDoc.secondSurname);
    });
    findUser.forEach(function (myDoc) {
      jsonUser.secondName.push(myDoc.secondName);
    });
    findUser.forEach(function (myDoc) {
      jsonUser.birthDate.push(myDoc.birthDate);
    });
    findUser.forEach(function (myDoc) {
      jsonUser.idCardExpiryDate.push(myDoc.idCardExpiryDate);
    });
    findUser.forEach(function (myDoc) {
      jsonUser.idCardReleaseDate.push(myDoc.idCardReleaseDate);
    });
    findUser.forEach(function (myDoc) {
      jsonUser.idCardReleaseCountry.push(myDoc.idCardReleaseCountry);
    });
    
    

    // Datos para la tabla Balances
    findUser.forEach(function (myDoc) {
      jsonUser.coinsOwned.push(myDoc.coinsOwned);
    });

    // Datos para profile
    findUser.forEach(function (myDoc) {
      jsonUser.lastUpdated.push(myDoc.lastUpdated);
    });
    findUser.forEach(function (myDoc) {
      jsonUser.lastChangeUpdated.push(myDoc.lastChangeUpdated);
    });


    identityNumber_uniques = [];
    identityNumber_repeated = [];


    //**************************************************************
    // detlles que me pide Nicole
    // revisando si hay una cedula repetida... deberia ser unica

    for (let i = 0; i < jsonUser.identityNumber.length; i++) {
      var find_Ci = identityNumber_uniques.findIndex(
        (x) => x === jsonUser.identityNumber[i]
      );

      // el primero que se encuentre sera guardado, repetido no guarda
      if (find_Ci == -1) { // -1 es el valor cuando no se encuentra
        identityNumber_uniques.push(jsonUser.identityNumber[i]); //guardamos el nombre que no esta
      }
      else if (find_Ci != -1 && jsonUser.identityNumber[i] != null){
        identityNumber_repeated.push(jsonUser.identityNumber[i]);
      }
  }

  //console.log("cedulas repetidas", identityNumber_repeated)
    //**************************************************************








// ##############################################################
// Rutina para conseguir los uuid, basicamente
/*     for (let i = 0; i < jsonUser.coinsOwned.length; i++){
      for (let j = 0; j < jsonUser.coinsOwned.length; j++){
        if(jsonUser.coinsOwned[i][j] != null){
            if(jsonUser.coinsOwned[i][j].id =="5db500c89ec91700126c8a8c"){
              //console.log(jsonUser.email[i])
            }
          //console.log(jsonUser.coinsOwned[i][j].id)
        }

      } */
        /* if (jsonUser.coins[i][j]== "5db500c89ec91700126c8a89" ){
          console.log("*************************", i, j)
          jsonUser.uuid.push[i] 
        } */


        /* if (jsonUser.coinsOwned[i].id== "5db500c89ec91700126c8a8c" ){
          console.log("*************************", i)
        } */
     


       /*  if (jsonUser.coins[i].length >2){
          console.log("hay mas de un campo en el array",jsonUser.coins[i].length  )
        } */

      /* if (jsonUser.coins[i][0]== "5db500c89ec91700126c8a89" || jsonUser.coins[i][1]== "5db500c89ec91700126c8a89" ){
        console.log("consiguio bitcoint")
      } */



   // }


// FIN Rutina para conseguir los uuid, basicamente
// ##############################################################




    //console.log(jsonUser)
    return jsonUser;
  } catch (e) {
    console.log("Error ejecutando el archivo reading user", e);
  }
}

// Exportamos los modelos
module.exports = {
  doOperationUser,
};
