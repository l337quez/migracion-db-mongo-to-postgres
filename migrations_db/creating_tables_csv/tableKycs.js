const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const moment= require('moment')

/********************************************************************
 * Tabla Kycs
 * id se relaciona con el campo de mongo y el titulo con postgres
 ********************************************************************/

async function runTableKycs(json, documentsLength) {

  try {
    console.log(`* Creando la Tabla Kycs en Formato CSV`);
    
    const csvKycs = createCsvWriter({
        path: "./csv_files_and_csv_to_postgre/kycs.csv", // path del archivo csv
        header: [
          { id: "id", title: "id" },
          { id: "identityNumber", title: "dni" },
          { id: "name", title: "name" },
          { id: "secondName", title: "secondName" },
          { id: "surname", title: "surname" },
          { id: "secondSurname", title: "secondSurname" },
          { id: "fiscal_number", title: "fiscal_number" },
          { id: "description", title: "description" },
          { id: "birth_date", title: "birth_date" },
          { id: "birth_country_id", title: "birth_country_id" },
          { id: "phone", title: "phone" },
          { id: "movil_phone", title: "movil_phone" },
          { id: "fax", title: "fax" },
          { id: "dni_creation_date", title: "dni_creation_date" },
          { id: "dni_expiration_date", title: "dni_expiration_date" },
          { id: "address_id", title: "address_id" },
          { id: "type_kyc_id", title: "type_kyc_id" },
          { id: "type_user_id", title: "type_user_id" },
          { id: "office_id", title: "office_id" },
          { id: "createdAt", title: "createdAt" },
          { id: "updatedAt", title: "updatedAt" }
        ],
      });
      const records_Kycs = [];

      var date
      var userId = [];
      var type_kyc
      var dniExpirationDate = [];
      var birthDate = [];
      var dniCreationDate = [];
      var id_country 

            
      for (let i = 0; i < documentsLength; i++){

        date = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
        if (json.kyc[i].tier0.updatedAt != undefined){
          date=json.kyc[i].tier0.updatedAt.toISOString()
        }

        if (json.idCardExpiryDate[i] != undefined ){
          dniExpirationDate.push(moment(json.idCardExpiryDate[i].getTime() ).format('YYYY-MM-DD HH:mm:ss'))
          dniCreationDate.push(moment(json.idCardReleaseDate[i].getTime() ).format('YYYY-MM-DD HH:mm:ss'))
          birthDate.push(moment(json.birthDate[i].getTime() ).format('YYYY-MM-DD HH:mm:ss'))

        }else{
            // Agregamos campos undefined a las fechas de los user que son tier=0
            dniExpirationDate.push(date)
            dniCreationDate.push(date)
            birthDate.push(date)
        }
      }

      for (let i = 0; i < documentsLength; i++) {
        // Kyc existe cuando es nivel 1, tier =1
        if (json.tier[i] == 1){
          // id del usuario implicito
          userId.push(i +1); // aqui estan los id de los user que si tienen KYC
          type_kyc = 1 // 1 verif 1
        }else{
          //type_kyc = 0 // nulo
        }






        // agregamos el id del pais
        if (json.idCardReleaseCountry[i] == "Venezuela"){
          id_country = 95
        }        
        if (json.idCardReleaseCountry[i] == "Argentina"){
          id_country = 5
        }       
        if (json.idCardReleaseCountry[i] == "Colombia"){
          id_country = 82
        }     
        if (json.idCardReleaseCountry[i] == "Chile"){
          id_country = 81
        }      
        if (json.idCardReleaseCountry[i] == "Perú"){
          id_country = 89
        }    
        if (json.idCardReleaseCountry[i] == "Estados Unidos"){
          id_country = 55
        }    
        if (json.idCardReleaseCountry[i] == "Panamá"){
          id_country = 123
        }   
        if (json.idCardReleaseCountry[i] == "España"){
          id_country = 28
        }   
        if (json.idCardReleaseCountry[i] == "Cuba"){
          id_country = 113
        }   
        if (json.idCardReleaseCountry[i] == "India"){
          id_country = 25
        }
        if (json.idCardReleaseCountry[i] == undefined){
          id_country = 1000000
        }
        
        /* else{
          
          id_country = 0
        } */
        //console.log(json.idCardReleaseCountry[i])

          records_Kycs.push({
            id: i+1,
            name: json.name[i],
            surname: json.surname[i],
            secondName: json.secondName[i],
            secondSurname: json.secondSurname[i],
            identityNumber: json.identityNumber[i],
            birth_date: birthDate[i],
            dni_expiration_date: dniExpirationDate[i],
            dni_creation_date: dniCreationDate[i],
            birth_country_id: id_country, 
            //birth_country_id: json.idCardReleaseCountry[i],
            address_id: 1,    
            office_id: 1,
            type_user_id: 1, // 1 es natural
            type_kyc_id: 1, 
            createdAt: date,
            updatedAt: date
          });
       
      }
      csvKycs.writeRecords(records_Kycs).then(() => {
        console.log("Se ha creado exitosamente la tabla Kycs");
      });
  
    return true;
  } catch (e) {
    console.log("Error ejecutando La Tabla Kycs Formato CSV", e);
  }
}

// Exportamos los modelos
module.exports = {
    runTableKycs
};
