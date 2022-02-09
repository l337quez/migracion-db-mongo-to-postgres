const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const moment= require('moment')

/********************************************************************
 * Tabla Profile Balance
 * Llenamos la tabla a partir de Reference, es posible que algun id que
 * tenga profile, no lo tenga balance y viceversa.. por eso usamos reference
 *********************************************************************/

async function runTableProfileBalance(userId_of_balance, lengthBalance, userId_of_profile, lengthProfile ) {

//console.log("userId_of_balance",userId_of_balance)
//console.log("userId_of_profile",userId_of_profile)

var profile_id = [];
var balance_id = [];


// Unimos a userId_of_balance y  userId_of_profile en un solo array nuevo
const union = userId_of_balance.concat(userId_of_profile);
// Eliminamos elementos repetidos (No hay id repetidos)
let reference = union.filter((item,index)=>{
  return union.indexOf(item) === index;
})

//console.log("reference",reference)


// **************************************
// Rutina para agrupar Id_balance de un usuario en un solo array
// porque en la tabla balance, un usuario puede tener varias filas.
// variable de salida es result.

contador = 0;
result = [];
coincidencias =[];
for (let i = 0; i < userId_of_balance.length; i++) {
    contador = 0;
    if ( coincidencias.indexOf(userId_of_balance[i]) == -1 ){
        for (let j = 0; j < userId_of_balance.length; j++) {

            if (userId_of_balance[i] == userId_of_balance [j]  ){
                coincidencias.push(userId_of_balance [j])
                contador ++;
                  if (contador == 2  ){  // es un sub array
                    result.splice(result.length -1, 1, [firtsNumber, j +1]); // convertimos numero en array [numero]

                }else if (contador > 1){ // es un numero
                    result[result.length -1].push(j +1)

                }   else if (contador == 1){ // es un numero
                    firtsNumber= j+1;
                    result.push(j + 1) // se hace push de la psoicion que comience en 1
                } 
            }
        }
    }
}
//console.log("coincidencias",coincidencias) // id User implicitos
//console.log("result",result)

// cada posicion representa el id del usuario y se relaciona con result
// para saber a que id de usuario representa una posicion de result usamos este array.

let idUserPositionBalance = coincidencias.filter((item,index)=>{
  return coincidencias.indexOf(item) === index;
})
//console.log("idUserPositionBalance", idUserPositionBalance)

// ***** Fin de Rutina para agrupar en un array 
// **************************************


var TrueIdProfile = [];
var TrueIdBalance = [];
var LastIdProfile = [];
var TrueIdBalanceArray = [];
var pos_result

for (let i = 0; i < reference.length; i++) {

  //ZZZZZZZZZZZZZZZZZZZZZZZZZZ RUTINA EN DEUSO, ELIMINAR
  //buscamos en id profile ese usuario y sacamos el id de profile (que es la posicion)
  if (userId_of_profile.indexOf(reference[i]) != -1){ // verificamos que el numero buscado este
    TrueIdProfile.push(userId_of_profile.indexOf(reference[i]) + 1) // comienza en la posicion 1 los id
    //console.log(TrueIdProfile,userId_of_profile.indexOf(reference[i]), reference[i], i)
  }
//ZZZZZZZZZZZZZZZZZZZZZZZZZZ RUTINA EN DEUSO, ELIMINAR


  // llenamos el array de id balance
  if (idUserPositionBalance.indexOf(reference[i]) != -1){ // verificamos que el numero buscado este
    pos_result = idUserPositionBalance.indexOf(reference[i])
    TrueIdBalanceArray.push(result[pos_result])
    
  }


} 

// Esta rutina se hace para poner el id de profile relacionado con balanceid, ya que balance_id
// puede estar relacionado con un solo id de profile_id
// hacemos una fila nueva en profile_id tantas veces como tamaño tenga el array TrueIdBalanceArray
    for (let j = 0; j < TrueIdBalanceArray.length; j++){
      if (typeof(TrueIdBalanceArray[j]) == "object"){
        for (let k = 0; k < TrueIdBalanceArray[j].length; k++){
          LastIdProfile.push(userId_of_profile[j])

        }
      }else{  // cuando balance_id es un numero
          LastIdProfile.push(userId_of_profile[j])
      }
    }


  // La columna balance_id no puede ser un array por cada fila, separamos el array de arrays 
  // en una var solo tipo array entonces solo habra un solo id por cada fila
   for (let i = 0; i < TrueIdBalanceArray.length; i++){
   
    if (typeof(TrueIdBalanceArray[i]) == "number"){
      TrueIdBalance.push(TrueIdBalanceArray[i])
    }
    else{  // es un array
      for (let j = 0; j < TrueIdBalanceArray[i].length; j++){
        TrueIdBalance.push(TrueIdBalanceArray[i][j])
      }
    }
   
  } 

        /* for (let k = 0; k < TrueIdBalanceArray.length; k++){
          
          TrueIdBalance.push(TrueIdBalanceArray[k]) 
        } */
        
        //console.log("j", j, "length", TrueIdBalanceArray[j].length)
        //console.log(TrueIdBalanceArray[1][2])


//console.log("TrueIdProfile",TrueIdProfile)
//console.log("TrueIdBalance",TrueIdBalance)


  try {
    console.log(`* Creando la Tabla Profile Balance en Formato CSV `);

    // CABECERAS DEL CSV
    const csvRate = createCsvWriter({
      path: "./csv_files_and_csv_to_postgre/profileBalance.csv", // path del archivo csv
      header: [
        { id: "profile_id", title: "profile_id" },
        { id: "balance_id", title: "balance_id" },
        { id: "createdAt", title: "createdAt" },
        { id: "updatedAt", title: "updatedAt" }
      ],
    });
    const date=  Math.floor(new Date().getTime() / 1000);
    const records_Rate = [];

    // El orden de la tabla no importa, pero si importa que exista la relacion user con profile y balance
     for (let i = 0; i < reference.length; i++) {
      records_Rate.push({
        profile_id: LastIdProfile[i],
        balance_id: TrueIdBalance[i],
        createdAt: date, 
        updatedAt: date, 
      });
    }
    csvRate.writeRecords(records_Rate).then(() => {
      console.log("Se ha creado exitosamente la tabla Profile Balance ");
    }); 

    return true;
  } catch (e) {
    console.log("Error ejecutando La Profile Balance Formato CSV", e);
  }
}

// Exportamos los modelos
module.exports = {
    runTableProfileBalance,
};
