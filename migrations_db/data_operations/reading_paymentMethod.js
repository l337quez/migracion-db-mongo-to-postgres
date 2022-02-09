/********************************************************************
 * Data de PaymentMethod
 * Operacion con la data leida de mongo
 ********************************************************************/

async function doOperationPaymentMethod(findPaymentMethod) {

    try {
    console.log(`* Leemos Coleccion Payment Method de Mongo`);

    var jsonPaymentMethod = new Object();
    jsonPaymentMethod.type = [];

    findPaymentMethod.forEach(function (myDoc) {
        jsonPaymentMethod.type.push(myDoc.type);
    });

    return jsonPaymentMethod;
  } catch (e) {
    console.log("Error ejecutando el archivo reading Payment Method", e);
  }
}

// Exportamos los modelos
module.exports = {
    doOperationPaymentMethod,
};
