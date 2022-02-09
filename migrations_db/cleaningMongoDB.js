"use strict";
// script para hacer limpieza en la base de datos de Mongo
const mongoose = require("mongoose");
// Conexión a la Base de Datos MONGO
const db_name = "coindorDB"; // Nombre de la base de datos
const uri = "mongodb://localhost/" + db_name;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//mongoose.set("useCreateIndex", true);
const db = mongoose.createConnection(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Modelos
const userModel = require("./models_for_mongoose/userOld"); //especial para estescript
const accountModel = require("./models_for_mongoose/account");
const coinModel = require("./models_for_mongoose/coin");
const txModel = require("./models_for_mongoose/tx");


async function dataReading() {
  try {
    console.log(`\n*************************************************`);
    console.log(`Leemos la Coleccion User de Mongo`);
    console.log(`\n* Uniendo Usuarios duplicados`);
    // Query para buscar los usuarios
    const findUser = await userModel.userSchema.find();
    var jsonUser = new Object();
    jsonUser.identityNumber = [];

    findUser.forEach(function (myDoc) {
      jsonUser.identityNumber.push(myDoc.identityNumber);
    });

//**************************************************************
// Buscando cedulas repetidas... deberia ser unica

    var identityNumber_uniques = [];
    var identityNumber_repeated = [];

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

    console.log("cedulas repetidas", identityNumber_repeated)
//**************************************************************

  for (let i = 0; i < identityNumber_repeated.length; i++) {
    // Querys
     const findUserRepeatCI = await userModel.userSchema.find({ identityNumber: identityNumber_repeated[i]});

      console.log("cedula repetida", identityNumber_repeated[0])
      var user1 = findUserRepeatCI[0];
      var user2 = findUserRepeatCI[1];
      const inhUser = user1.name === "INH" ? user1 : user2;
      const veinteUser = user1.name !== "INH" ? user1 : user2; 
  
      const newData = {};
      newData.coinsOwned = [];
      [
        "name",
        "surname",
        "password",
        "secondName",
        "secondSurname",
        "identityNumber",
        "idCardReleaseDate",
        "idCardReleaseCountry",
        "idCardExpiryDate",
        "country",
        "birthDate",
        "kyc",
      ].forEach((key) => {
        if (veinteUser[key] && veinteUser[key] !== "")
          newData[key] = veinteUser[key];
      });
  
      newData.coinsOwned = [];
      veinteUser.coinsOwned.forEach(coin => {
        const inhUserCoin = inhUser.coinsOwned.find((c) => c.id === coin.id);
        if (inhUserCoin) {
          newData.coinsOwned.push({
            id: coin.id,
            amount: (inhUserCoin.amount || 0) + (coin.amount || 0),
            amountDeposits:
              (inhUserCoin.amountDeposits || 0) + (coin.amountDeposits || 0),
            amountWithdraws:
              (inhUserCoin.amountWithdraws || 0) + (coin.amountWithdraws || 0),
            monthlyChangeAmount:
              (inhUserCoin.monthlyChangeAmount || 0) +
              (coin.monthlyChangeAmount || 0),
            dailyAmount: (inhUserCoin.dailyAmount || 0) + (coin.dailyAmount || 0),
            monthlyAmount:
              (inhUserCoin.monthlyAmount || 0) + (coin.monthlyAmount || 0),
            lastUpdated: new Date(),
            lastChangeUpdated: new Date(),
          });
        } else {
          newData.coinsOwned.push(coin);
        }
      });
  
      inhUser.coinsOwned.forEach((coin) => {
        if (!newData.coinsOwned.map((c) => c.id).includes(coin.id)) {
          newData.coinsOwned.push(coin);
        }
      });
  
      // Querys
      
      if (inhUser._id != null){
        let b =await userModel.userSchema.updateMany({_id : inhUser._id} ,{$set: newData});
      }
  
      // Updates txs
      let c =await txModel.TxSchema.updateMany(
        { userId: veinteUser._id },
        { $set: { userId: inhUser._id } }
      );
  
      // Updates accounts
      let d =await coinModel.CoinSchema.updateMany(
        { userId: veinteUser._id },
        { $set: { userId: inhUser._id } }
      );
  
      let e =await userModel.userSchema.findByIdAndDelete( veinteUser._id); 
    }
  
//**************************************************************
    // Eliminando cuentas con data faker
    //buscamos y elimnamos

    console.log(`\n* Eliminando Datos Faker en la coleccion Account`);
    await accountModel.AccountSchema.findByIdAndDelete("0102");
    await accountModel.AccountSchema.findByIdAndDelete("0191888888888888888888888888888888");
    await accountModel.AccountSchema.findByIdAndDelete("1234567");
    await accountModel.AccountSchema.findByIdAndDelete("12345678");
    await accountModel.AccountSchema.deleteMany( {userId : "5db500c49ec91700126c8a7e"});  
    


//**************************************************************
     // Eliminando usuarios que tengan email con el dominio @yopmail
     console.log(`\n* Eliminando usuarios que tengan email con el dominio @yopmail`);
    
    const findUserEmails = await userModel.userSchema.find({email:{ $regex : /@yopmail/, $options:"i"}});
    var jsonUserEmails = new Object();
    jsonUserEmails._id = [];

    findUserEmails.forEach(function (myDoc) {
      jsonUserEmails._id.push(myDoc._id);
    });
    console.log ("user email @yopmail", jsonUserEmails)

    // Obtenemos los id de cada usuario con ese dominio de correo y ahora los eliminamos
    for (let i = 0; i < jsonUserEmails._id.length; i++){
      await userModel.userSchema.findByIdAndDelete(jsonUserEmails._id[i]);
    }  

//**************************************************************
// Eliminando lista de Usuarios con correos falsos, a petecion de David

    const email_faker = ["acevedoeddya@gmail.com","acp1982@gmail.com",
    "adacalm79@hotmail.com", "albaluzojeda166@gmail.com",
    "alexadergmp@gmail.com", "andresguzman0626@hotmail.com",
    "andrivelas@gamil.com", "angeljimbello1@gamil.com",
    "bandresjulic@gmail.com", "barriosbohórquez@hotmail.com",
    "bungoga@gmail.com", "camachoedddya@gmail.com",
    "carl0sb0rr3er0@gmail.com", "carl0sb0rr3ro@gmail.com",
    "cc.nn08@mail.com", "cc40721297@hotmail.com",
    "chikitommatos@hotmail.com", "cnavarrogarcia176@hotmail.com",
    "dg2566gonza@gmail.com", "duranprospero405@gmail.com",
    "edward.121314@hotmail.com", "efrenherrrera71@hotmail.com",
    "enderchevvez@gmail.com", "enderchevvez@mail.com",
    "ernesto020387@gmail.com", "evetdgardeportevoley@gmail.com",
    "fasotofria@gamil.com", "fperezjaime13@mail.com",
    "franciscoapo@gmail.com", "geminis2katty@hotmail.com",
    "gguitianguille@gmail.com", "henryhernandev@hotmail.com",
    "herry1951polanco@gmail.com", "icarrasque!_02@hotmail.com",
    "icarrasquel!_02@hotmail.com", "jeancarlos170685@gmail.com",
    "jeancvargasc@gmail.com", "jeimo3c@gmail.com",
    "joanquevedo7728@gmail.com", "joelitorosario@hotmail.com",
    "josecabalhip@gmail.com", "josecar2050@hotmail.com",
    "jpzarany@hotmail.com", "juanmabenfa86@hotmail.com",
    "keinyerberthgerman@gmail.com", "leivygarcias46@gmail.com",
    "leobsanjobathanenrique@gmail.com", "lornimadera34@gmail.com",
    "luisalbertoarevalo@yahoo.es", "luisalbertoquintero@gmail.com",
    "luislibertad2104@gmail.com", "luisyermanabreu825@gmail.com",
    "manuelalejandrosifonte@gmail.com", "marcomadera@yahoo.es",
    "maryoris_1707@hotmail.com", "merbinsoncoraspe@gmail.com",
    "mhernandezrios508@gmail.com", "miguel.elmejor@hotmail.com.ar",
    "nhutado2801@hotmail.com", "nuñez.486@gmail.com",
    "pachodepaula7@gmail.com", "perniaemilia9@gmail.com",
    "promeraro88@gmail.com", "rafaelchacon_160@hotmail.com",
    "repuestos_63_10@hotmail.com", "rojasimilio@gmail.com",
    "roriguezluis1409@gamil.com", "saacarlos75@hotmail.com",
    "samalesrob@hotmail.com", "santandersalvado44@gmail.com",
    "servicoyreparacionjlr@gmail.com", "taconeo@gmail.com",
    "tamycielo67@gmail.com", "tapdron13@gmail.com",
    "test@gmail.com", "tonyajaca@hotmail.com",
    "toto_music_4@hotmail.com", "vpja_4577@gmail.com",
    "willarias_123@hotmail.com", "wwilmerjosefigue@gmail.com",
    "yendeere@gmail.com", "yndirapabono@gmail.com",
    "yoanvasquez@gamil.com", "yolvelisjosefinafernandez@gmail.com",
    "yyeisondanielbastidasgonzalez@gmail.com", "zailetplazola@hotmail.com"
  ]

  for (let i = 0; i < email_faker.length; i++){
   var a= await userModel.userSchema.find({email: email_faker[i]});
   //console.log(a, email_faker[i])
  }  


//**************************************************************
// Se buscan los usuarios que tengan nivel 2 y se cambia a 1 (Nivel 2 es un Error)

  var findTier2= await userModel.userSchema.find({tier: 2});
  console.log("usuarios con tier 2", findTier2)

  // Actualizamos a Nivel 1
  for (let i = 0; i < findTier2.length; i++){
    await userModel.userSchema.updateMany({_id: findTier2[i]._id}, {tier: 1});
   } 



    return true; 

  } catch (e) {
    console.log("Error leyendo la base de datos", e);
  }
}

function executeScript(callback) {
  callback();
}
executeScript(dataReading);

// Forzamos la salida de la ejecucion de script por tiempo
setTimeout(function () {
  return process.exit(1);
}, 20000); // cambiar tiempo
