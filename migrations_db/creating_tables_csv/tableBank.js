const { CoinSchema } = require("../models_for_mongoose/coin");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const moment= require('moment')


//====================================================================

class Dictionary {
  constructor () {
    this.items = {}
  }
    
  has (key) {
    return this.items.hasOwnProperty(key)	
  }

  set (key, value) {
    this.items[key] = value
  }
  
  get (key) {
    return this.has(key) ? this.items[key] : undefined
  }
  
  values () {
    const values = []
    for (let key in this.items) {
      if (this.has(key)) {
        values.push(this.items[key])
      }
    }
    return values
  }

  size () {
    return Object.keys(this.items).length
  }
  
  keys () {
    const keys = []
    for (let key in this.items) {
    	keys.push(keys)
    }
		return keys
   }
  
  getItems () {
    return this.items
  }
}


/********************************************************************
 * Tabla Bank
 * id se relaciona con el campo de mongo y el titulo con postgres
 ********************************************************************/

async function runTableBank(json, lengthDocuments) {
  try {
    console.log(`* Creando la Tabla Bank en Formato CSV`);

    const csvBank = createCsvWriter({
      path: "./csv_files_and_csv_to_postgre/banks.csv", // path del archivo csv
      header: [
        { id: "prefix", title: "prefix" },
        { id: "name", title: "name" },
        { id: "active", title: "active" },
        { id: "country_id", title: "country_id" },
        { id: "createdAt", title: "createdAt" },
        { id: "updatedAt", title: "updatedAt" },
      ],
    });
    const records_bank = []; // para llenar la tabla
    const values_country_table = [];
    var id_crountry_db = [];
    const date=  Math.floor(new Date().getTime() / 1000);
    

    // llamamos al script que contiene todos los paises
    const countriesList = require("./countriesList");

    // Asignamos id real al pais de cada respectivo banco
    for (let i = 0; i < lengthDocuments; i++) { // paises de los bancos
      for (let j = 0; j < countriesList.onlyCountries.length; j++) { // todos los paises
        if (json.country[i] == countriesList.onlyCountries[j] ){
          id_crountry_db.push( j+1);
        } 
      }
    }

    // Limitamos para que no guarde nombres de bancos repetidos
    var resumen_bank_name = [];
    var resumen_country_id= [];
    var resumen_prefix= [];

    // Llenamos la array sin nombres repetios
    for (let i = 0; i < lengthDocuments; i++) {
        var find_name_bank = resumen_bank_name.findIndex(
          (x) => x === json.bankName[i]
        );

        // el primero que se encuentre sera guardado, repetido no guarda
        if (find_name_bank == -1) { // -1 es el valor cuando no se encuentra
          resumen_bank_name.push(json.bankName[i]); //guardamos el nombre que no esta
          //console.log(json.country[i])
          resumen_country_id.push(id_crountry_db[i] +1)

        
          // No permitimos que esten estos nombres, porque estan repetidos  --> countries_rep
          var countries_rep = ["Venezuela","Occidental de Descuento", "Nacional de Crédito","Fondo Común"] 
          if (json.type[i] != "MOVIL" && countries_rep.indexOf(json.bankName[i]) == -1){
            var prefix_real = json._id[i].slice(0,4);// los primeros 4 numeros de la cuenta
            resumen_prefix.push(prefix_real)
          }
        }
    }



//***************************************************************************
// eliminamos los id_country de los bank name eliminados, Manualmente
//array.splice(indice,numero de elementos);
resumen_country_id.splice(resumen_bank_name.indexOf('Nacional de Crédito'),1);
resumen_country_id.splice(resumen_bank_name.indexOf('Occidental de Descuento'),1);
resumen_country_id.splice(resumen_bank_name.indexOf('Venezuela'),1);
resumen_country_id.splice(resumen_bank_name.indexOf('Fondo Común'),1);

// Eliminamos bancos repetidos y "conocidos" manualmente con la siguiente funcion
// ejem. 'Venezuela (BDV)' es lo mismo que 'Venezuela' 
function removeItemFromArr( arr, item ) {
  return arr.filter( function( e ) {
      return e !== item;
  } );
};
resumen_bank_name= removeItemFromArr( resumen_bank_name, 'Venezuela');
resumen_bank_name= removeItemFromArr( resumen_bank_name,  'Occidental de Descuento');
resumen_bank_name= removeItemFromArr( resumen_bank_name,  'Nacional de Crédito');
resumen_bank_name= removeItemFromArr( resumen_bank_name,  'Fondo Común');

// Fin d rutina eliminar bancos repetidos
//***************************************************************************

    for (let i = 0; i < resumen_bank_name.length; i++) {
        records_bank.push({
          prefix: resumen_prefix[i],
          name: resumen_bank_name[i],
          active: true,
          country_id: resumen_country_id[i],
          createdAt: date,
          updatedAt: date
        });
      
    }

    csvBank.writeRecords(records_bank).then(() => {
      console.log("Se ha creado exitosamente la tabla Bank");
    });

    //console.log(`------------------------------------------------------`);
    return resumen_bank_name;
  } catch (e) {
    console.log("Error ejecutando La Tabla Bank Formato CSV", e);
  }
}

// Exportamos los modelos
module.exports = {
  runTableBank,
};
