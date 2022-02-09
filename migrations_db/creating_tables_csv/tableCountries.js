const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const moment = require("moment");

/********************************************************************
 * Tabla Countries
 * id se relaciona con el campo de mongo y el titulo con postgres
 * Vamos a sacar todos los paisesy chequeamos que no esten repetidos
 ********************************************************************/

async function runTableCountries(json, lengthDocuments) {
  try {
    console.log(`* Creando la Tabla Countries en Formato CSV`);

    const csvCountries = createCsvWriter({
      path: "./csv_files_and_csv_to_postgre/countries.csv", // path del archivo csv
      header: [
        { id: "name", title: "name" },
        { id: "active", title: "active" },
        { id: "endAt", title: "endAt" },
        { id: "createdAt", title: "createdAt" },
        { id: "updatedAt", title: "updatedAt" },
      ],
    });
    const date = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");

    // Llenamos la tabla
    records_Countries = [
      {
        id: 1,
        name: "Australia",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 2,
        name: "Austria",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 3,
        name: "Azerbaiyán",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 4,
        name: "Anguilla",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 5,
        name: "Argentina",
        active: true,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 6,
        name: "Armenia",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 7,
        name: "Bielorrusia",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 8,
        name: "Belice",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 9,
        name: "Bélgica",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 10,
        name: "Bermudas",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 11,
        name: "Bulgaria",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 12,
        name: "Brasil",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 13,
        name: "Reino Unido",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 14,
        name: "Hungría",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 15,
        name: "Vietnam",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 16,
        name: "Haiti",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 17,
        name: "Guadalupe",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 18,
        name: "Alemania",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 19,
        name: "Países Bajos, Holanda",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 20,
        name: "Grecia",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 21,
        name: "Georgia",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 22,
        name: "Dinamarca",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 23,
        name: "Egipto",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 24,
        name: "Israel",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 25,
        name: "India",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 26,
        name: "Irán",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 27,
        name: "Irlanda",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 28,
        name: "España",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 29,
        name: "Italia",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 30,
        name: "Kazajstán",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 31,
        name: "Camerún",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 32,
        name: "Canadá",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 33,
        name: "Chipre",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 34,
        name: "Kirguistán",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 35,
        name: "China",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 36,
        name: "Costa Rica",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 37,
        name: "Kuwait",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 38,
        name: "Letonia",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 39,
        name: "Libia",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 40,
        name: "Lituania",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 41,
        name: "Luxemburgo",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 42,
        name: "México",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 43,
        name: "Moldavia",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 44,
        name: "Mónaco",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 45,
        name: "Nueva Zelanda",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 46,
        name: "Noruega",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 47,
        name: "Polonia",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 48,
        name: "Portugal",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 49,
        name: "Reunión",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 50,
        name: "Rusia",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 51,
        name: "El Salvador",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 52,
        name: "Eslovaquia",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 53,
        name: "Eslovenia",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 54,
        name: "Surinam",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 55,
        name: "Estados Unidos",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 56,
        name: "Tadjikistan",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 57,
        name: "Turkmenistan",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 58,
        name: "Islas Turcas y Caicos",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 59,
        name: "Turquía",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 60,
        name: "Uganda",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 61,
        name: "Uzbekistán",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 62,
        name: "Ucrania",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 63,
        name: "Finlandia",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 64,
        name: "Francia",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 65,
        name: "República Checa",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 66,
        name: "Suiza",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 67,
        name: "Suecia",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 68,
        name: "Estonia",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 69,
        name: "Corea del Sur",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 70,
        name: "Japón",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 71,
        name: "Croacia",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 72,
        name: "Rumanía",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 73,
        name: "Hong Kong",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 74,
        name: "Indonesia",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 75,
        name: "Jordania",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 76,
        name: "Malasia",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 77,
        name: "Singapur",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 78,
        name: "Taiwan",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 79,
        name: "Bosnia y Herzegovina",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 80,
        name: "Bahamas",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 81,
        name: "Chile",
        active: true,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 82,
        name: "Colombia",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 83,
        name: "Islandia",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 84,
        name: "Corea del Norte",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 85,
        name: "Macedonia",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 86,
        name: "Malta",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 87,
        name: "Pakistán",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 88,
        name: "Papúa-Nueva Guinea",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 89,
        name: "Perú",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 90,
        name: "Filipinas",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 91,
        name: "Arabia Saudita",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 92,
        name: "Tailandia",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 93,
        name: "Emiratos árabes Unidos",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 94,
        name: "Groenlandia",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 95,
        name: "Venezuela",
        active: true,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 96,
        name: "Zimbabwe",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 97,
        name: "Kenia",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 98,
        name: "Algeria",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 99,
        name: "Líbano",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 100,
        name: "Botsuana",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 101,
        name: "Tanzania",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 102,
        name: "Namibia",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 103,
        name: "Ecuador",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 104,
        name: "Marruecos",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 105,
        name: "Ghana",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 106,
        name: "Siria",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 107,
        name: "Nepal",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 108,
        name: "Mauritania",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 109,
        name: "Seychelles",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 110,
        name: "Paraguay",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 111,
        name: "Uruguay",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 112,
        name: "Congo (Brazzaville)",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 113,
        name: "Cuba",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 114,
        name: "Albania",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 115,
        name: "Nigeria",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 116,
        name: "Zambia",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 117,
        name: "Mozambique",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 118,
        name: "Angola",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 119,
        name: "Sri Lanka",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 120,
        name: "Etiopía",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 121,
        name: "Túnez",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 122,
        name: "Bolivia",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 123,
        name: "Panamá",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 124,
        name: "Malawi",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 125,
        name: "Liechtenstein",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 126,
        name: "Bahrein",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 127,
        name: "Barbados",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 128,
        name: "Chad",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 129,
        name: "Man, Isla de",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 130,
        name: "Jamaica",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 131,
        name: "Malí",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 132,
        name: "Madagascar",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 133,
        name: "Senegal",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 134,
        name: "Togo",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 135,
        name: "Honduras",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 136,
        name: "República Dominicana",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 137,
        name: "Mongolia",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 138,
        name: "Irak",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 139,
        name: "Sudáfrica",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 140,
        name: "Aruba",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 141,
        name: "Gibraltar",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 142,
        name: "Afganistán",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 143,
        name: "Andorra",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 144,
        name: "Antigua y Barbuda",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 145,
        name: "Bangladesh",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 146,
        name: "Benín",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 147,
        name: "Bután",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 148,
        name: "Islas Virgenes Británicas",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 149,
        name: "Brunéi",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 150,
        name: "Burkina Faso",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 151,
        name: "Burundi",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 152,
        name: "Camboya",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 153,
        name: "Cabo Verde",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 154,
        name: "Comores",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 155,
        name: "Congo (Kinshasa)",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 156,
        name: "Cook, Islas",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 157,
        name: "Costa de Marfil",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 158,
        name: "Djibouti, Yibuti",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 159,
        name: "Timor Oriental",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 160,
        name: "Guinea Ecuatorial",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 161,
        name: "Eritrea",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 162,
        name: "Feroe, Islas",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 163,
        name: "Fiyi",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 164,
        name: "Polinesia Francesa",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 165,
        name: "Gabón",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 166,
        name: "Gambia",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 167,
        name: "Granada",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 168,
        name: "Guatemala",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 169,
        name: "Guernsey",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 170,
        name: "Guinea",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 171,
        name: "Guinea-Bissau",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 172,
        name: "Guyana",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 173,
        name: "Jersey",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 174,
        name: "Kiribati",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 175,
        name: "Laos",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 176,
        name: "Lesotho",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 177,
        name: "Liberia",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 178,
        name: "Maldivas",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 179,
        name: "Martinica",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 180,
        name: "Mauricio",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 181,
        name: "Myanmar",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 182,
        name: "Nauru",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 183,
        name: "Antillas Holandesas",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 184,
        name: "Nueva Caledonia",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 185,
        name: "Nicaragua",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 186,
        name: "Níger",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 187,
        name: "Norfolk Island",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 188,
        name: "Omán",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 189,
        name: "Isla Pitcairn",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 190,
        name: "Qatar",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 191,
        name: "Ruanda",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 192,
        name: "Santa Elena",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 193,
        name: "San Cristobal y Nevis",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 194,
        name: "Santa Lucía",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 195,
        name: "San Pedro y Miquelón",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 196,
        name: "San Vincente y Granadinas",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 197,
        name: "Samoa",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 198,
        name: "San Marino",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 199,
        name: "San Tomé y Príncipe",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 200,
        name: "Serbia y Montenegro",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 201,
        name: "Sierra Leona",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 202,
        name: "Islas Salomón",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 203,
        name: "Somalia",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 204,
        name: "Sudán",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 205,
        name: "Swazilandia",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 206,
        name: "Tokelau",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 207,
        name: "Tonga",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 208,
        name: "Trinidad y Tobago",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 209,
        name: "Tuvalu",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 210,
        name: "Vanuatu",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 211,
        name: "Wallis y Futuna",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 212,
        name: "Sáhara Occidental",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 213,
        name: "Yemen",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 214,
        name: "Puerto Rico",
        active: false,
        endAt: "NULL",
        createdAt: date,
        updatedAt: date,
      },
    ];

    csvCountries.writeRecords(records_Countries).then(() => {
      console.log("Se ha creado exitosamente la tabla Countries");
    });

    //console.log(`------------------------------------------------------`);
    return true;
  } catch (e) {
    console.log("Error ejecutando La Tabla Countries Formato CSV", e);
  }
}

// Exportamos los modelos
module.exports = {
  runTableCountries,
};