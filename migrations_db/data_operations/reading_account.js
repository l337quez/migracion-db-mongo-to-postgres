/********************************************************************
 * Data de Account
 * Operacion con la data leida de mongo
 * a partir de la coleccion Account sacamos datos para la tabla bank
 ********************************************************************/

async function doOperationAccount(findAccount) {
    try {
    console.log(`* Leemos Coleccion Account de Mongo`);

    var jsonAccount = new Object();
    jsonAccount._id = [];
    jsonAccount.coinId = [];
    jsonAccount.userId = [];
    jsonAccount.bankName = [];
    jsonAccount.address = [];
    jsonAccount.type = [];
    jsonAccount.country = [];
    jsonAccount.deleted = [];
    jsonAccount.countryPersonIdentifier = [];

    findAccount.forEach(function (myDoc) {
        jsonAccount._id.push(myDoc._id);
    });

    // Data para tabla Rate
    findAccount.forEach(function (myDoc) {
        jsonAccount.coinId.push(myDoc.coinId);
    });
    findAccount.forEach(function (myDoc) {
        jsonAccount.userId.push(myDoc.userId);
    });

    findAccount.forEach(function (myDoc) {
        jsonAccount.bankName.push(myDoc.bankName);
    });
    findAccount.forEach(function (myDoc) {
        jsonAccount.address.push(myDoc.address);
    });
    findAccount.forEach(function (myDoc) {
        jsonAccount.type.push(myDoc.type);
    });
    findAccount.forEach(function (myDoc) {
        jsonAccount.country.push(myDoc.country);
    });
    findAccount.forEach(function (myDoc) {
        jsonAccount.deleted.push(myDoc.deleted);
    });
    findAccount.forEach(function (myDoc) {
        jsonAccount.countryPersonIdentifier.push(myDoc.countryPersonIdentifier);
    });

    return jsonAccount;
  } catch (e) {
    console.log("Error ejecutando el archivo reading account", e);
  }
}

// Exportamos los modelos
module.exports = {
    doOperationAccount,
};
