/********************************************************************
 * Data de Coin
 * Operacion con la data leida de mongo
 * a partir de la coleccion coins sacamos datos para la tabla Rate
 ********************************************************************/

async function doOperationCoin(findCoin) {
    try {
    console.log(`* Leemos Coleccion Coin de Mongo`);

    var jsonCoin = new Object();
    jsonCoin.buyRate = [];
    jsonCoin.sellRate = [];

    // Data para tabla Rate
    findCoin.forEach(function (myDoc) {
      jsonCoin.buyRate.push(myDoc.buyRate);
    });
    findCoin.forEach(function (myDoc) {
      jsonCoin.sellRate.push(myDoc.sellRate);
    });

    return jsonCoin;
  } catch (e) {
    console.log("Error ejecutando el archivo reading coin", e);
  }
}

// Exportamos los modelos
module.exports = {
    doOperationCoin,
};
