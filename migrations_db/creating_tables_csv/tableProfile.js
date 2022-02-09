const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const moment= require('moment')

/********************************************************************
 * Tabla Profile
 * id se relaciona con el campo de mongo y el titulo con postgres
 
 Todos los usuarios estaran en la coleccion Profile, los usarios sin kyc
 tendran el campo vacio
 *********************************************************************/

async function runTableProfile(json, lengthDocuments, lengthDocTier0ne) {

  try {
    console.log(`* Creando la Tabla Profile en Formato CSV `);


    // CABECERAS DEL CSV
    const csvProfile = createCsvWriter({
      path: "./csv_files_and_csv_to_postgre/profile.csv", // path del archivo csv
      header: [
        { id: "id", title: "id" },
        { id: "user_id", title: "user_id" },
        { id: "kyc_id", title: "kyc_id" },
        { id: "createdAt", title: "createdAt" },
        { id: "updatedAt", title: "updatedAt" }
      ],
    });
    //const date=  Math.floor(new Date().getTime() / 1000);
    //var date=  (new Date("2013-03-10T02:00:00Z")).getTime();
    //date.toISOString().substring(0, 10);
    
    //var date = json.lastUpdated
    //console.log("-------------------->",date)
    const records_Profile = [];
    var idKycs= [];
    var idUsers=[];
    var idUsersMongo= [];
    var counterkycs= 0;


/*     function toTimeZone(time, zone) {
      var format = 'YYYY/MM/DD HH:mm:ss ZZ';
      return moment(time, format).tz(zone).format(format);
  } */


    for (let i = 0; i < lengthDocuments; i++) {
        if (json.tier[i] >= 1){
          idUsers.push(i +1) 
          counterkycs ++
          idKycs.push(counterkycs)

          }/* else{
            idKycs.push(undefined)
          } */
          
        idUsersMongo.push(json._id[i])
      }




var TrueKyc

   // for (let i = 0; i < lengthDocTier0ne; i++) {
    for (let i = 0; i < lengthDocuments; i++) {

      if (idUsers.indexOf(i+1) == -1){
        // usuarios que no tienen KYC
        TrueKyc = 0
      }else{
        // KYC tiene valor, hay datos
        TrueKyc = idKycs[i]
      }

      // otros usuarios que no tienen KYC
      if(idKycs[i] == undefined){
        TrueKyc = 0
      }

        records_Profile.push({
            id: i+1,
            user_id: i+1,
            kyc_id: TrueKyc,
            /* createdAt: date, 
            updatedAt: date */
            createdAt: json.lastSession[i].toISOString(), 
            updatedAt: json.lastSession[i].toISOString()
            
            //updatedAt: json.updatedAt[i]
            });

    }


    csvProfile.writeRecords(records_Profile).then(() => {
      console.log("Se ha creado exitosamente la tabla Profile");
    });

    // Exportamos los id de los usuarios y tambien el tamaño de documentos
    return [idUsers, counterkycs, idUsersMongo];
  } catch (e) {
    console.log("Error ejecutando La Tabla Profile Formato CSV", e);
  }
}

// Exportamos los modelos
module.exports = {
    runTableProfile,
};
