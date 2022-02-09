const moment= require('moment')
const date=  Math.floor(new Date().getTime() / 1000);

records_Countries = [

    {
      id: 1,   
      name: 'Australia',
      active: false,
      createdAt: date
    },
    {
      id: 2,   
      name: 'Austria',
      active: false,
      createdAt: date
    },
    {
      id: 3,   
      name: 'Azerbaiyán',
      active: false,
      createdAt: date
    },
    {
      id: 4,   
      name: 'Anguilla',
      active: false,
      createdAt: date
    },
    {
      id: 5,   
      name: 'Argentina',
      active: true,
      createdAt: date
    },
    {
      id: 6,   
      name: 'Armenia',
      active: false,
      createdAt: date
    },
    {
      id: 7,   
      name: 'Bielorrusia',
      active: false,
      createdAt: date
    },
    {
      id: 8,   
      name: 'Belice',
      active: false,
      createdAt: date
    },
    {
      id: 9,   
      name: 'Bélgica',
      active: false,
      createdAt: date
    },
    {
      id: 10,  
      name: 'Bermudas',
      active: false,
      createdAt: date
    },
    {
      id: 11,  
      name: 'Bulgaria',
      active: false,
      createdAt: date
    },
    {
      id: 12,  
      name: 'Brasil',
      active: false,
      createdAt: date
    },
    {
      id: 13,  
      name: 'Reino Unido',
      active: false,
      createdAt: date
    },
    {
      id: 14,  
      name: 'Hungría',
      active: false,
      createdAt: date
    },
    {
      id: 15,  
      name: 'Vietnam',
      active: false,
      createdAt: date
    },
    {
      id: 16,  
      name: 'Haiti',
      active: false,
      createdAt: date
    },
    {
      id: 17,  
      name: 'Guadalupe',
      active: false,
      createdAt: date
    },
    {
      id: 18,  
      name: 'Alemania',
      active: false,
      createdAt: date
    },
    {
      id: 19,  
      name: 'Países Bajos, Holanda',
      active: false,
      createdAt: date
    },
    {
      id: 20,  
      name: 'Grecia',
      active: false,
      createdAt: date
    },
    {
      id: 21,  
      name: 'Georgia',
      active: false,
      createdAt: date
    },
    {
      id: 22,  
      name: 'Dinamarca',
      active: false,
      createdAt: date
    },
    {
      id: 23,  
      name: 'Egipto',
      active: false,
      createdAt: date
    },
    {
      id: 24,  
      name: 'Israel',
      active: false,
      createdAt: date
    },
    {
      id: 25,  
      name: 'India',
      active: false,
      createdAt: date
    },
    {
      id: 26,  
      name: 'Irán',
      active: false,
      createdAt: date
    },
    {
      id: 27,  
      name: 'Irlanda',
      active: false,
      createdAt: date
    },
    {
      id: 28,  
      name: 'España',
      active: false,
      createdAt: date
    },
    {
      id: 29,  
      name: 'Italia',
      active: false,
      createdAt: date
    },
    {
      id: 30,  
      name: 'Kazajstán',
      active: false,
      createdAt: date
    },
    {
      id: 31,  
      name: 'Camerún',
      active: false,
      createdAt: date
    },
    {
      id: 32,  
      name: 'Canadá',
      active: false,
      createdAt: date
    },
    {
      id: 33,  
      name: 'Chipre',
      active: false,
      createdAt: date
    },
    {
      id: 34,  
      name: 'Kirguistán',
      active: false,
      createdAt: date
    },
    {
      id: 35,  
      name: 'China',
      active: false,
      createdAt: date
    },
    {
      id: 36,  
      name: 'Costa Rica',
      active: false,
      createdAt: date
    },
    {
      id: 37,  
      name: 'Kuwait',
      active: false,
      createdAt: date
    },
    {
      id: 38,  
      name: 'Letonia',
      active: false,
      createdAt: date
    },
    {
      id: 39,  
      name: 'Libia',
      active: false,
      createdAt: date
    },
    {
      id: 40,  
      name: 'Lituania',
      active: false,
      createdAt: date
    },
    {
      id: 41,  
      name: 'Luxemburgo',
      active: false,
      createdAt: date
    },
    {
      id: 42,  
      name: 'México',
      active: false,
      createdAt: date
    },
    {
      id: 43,  
      name: 'Moldavia',
      active: false,
      createdAt: date
    },
    {
      id: 44,  
      name: 'Mónaco',
      active: false,
      createdAt: date
    },
    {
      id: 45,  
      name: 'Nueva Zelanda',
      active: false,
      createdAt: date
    },
    {
      id: 46,  
      name: 'Noruega',
      active: false,
      createdAt: date
    },
    {
      id: 47,  
      name: 'Polonia',
      active: false,
      createdAt: date
    },
    {
      id: 48,  
      name: 'Portugal',
      active: false,
      createdAt: date
    },
    {
      id: 49,  
      name: 'Reunión',
      active: false,
      createdAt: date
    },
    {
      id: 50,  
      name: 'Rusia',
      active: false,
      createdAt: date
    },
    {
      id: 51,  
      name: 'El Salvador',
      active: false,
      createdAt: date
    },
    {
      id: 52,  
      name: 'Eslovaquia',
      active: false,
      createdAt: date
    },
    {
      id: 53,  
      name: 'Eslovenia',
      active: false,
      createdAt: date
    },
    {
      id: 54,  
      name: 'Surinam',
      active: false,
      createdAt: date
    },
    {
      id: 55,  
      name: 'Estados Unidos',
      active: false,
      createdAt: date
    },
    {
      id: 56,  
      name: 'Tadjikistan',
      active: false,
      createdAt: date
    },
    {
      id: 57,  
      name: 'Turkmenistan',
      active: false,
      createdAt: date
    },
    {
      id: 58,  
      name: 'Islas Turcas y Caicos',
      active: false,
      createdAt: date
    },
    {
      id: 59,  
      name: 'Turquía',
      active: false,
      createdAt: date
    },
    {
      id: 60,  
      name: 'Uganda',
      active: false,
      createdAt: date
    },
    {
      id: 61,  
      name: 'Uzbekistán',
      active: false,
      createdAt: date
    },
    {
      id: 62,  
      name: 'Ucrania',
      active: false,
      createdAt: date
    },
    {
      id: 63,  
      name: 'Finlandia',
      active: false,
      createdAt: date
    },
    {
      id: 64,  
      name: 'Francia',
      active: false,
      createdAt: date
    },
    {
      id: 65,  
      name: 'República Checa',
      active: false,
      createdAt: date
    },
    {
      id: 66,  
      name: 'Suiza',
      active: false,
      createdAt: date
    },
    {
      id: 67,  
      name: 'Suecia',
      active: false,
      createdAt: date
    },
    {
      id: 68,  
      name: 'Estonia',
      active: false,
      createdAt: date
    },
    {
      id: 69,  
      name: 'Corea del Sur',
      active: false,
      createdAt: date
    },
    {
      id: 70,  
      name: 'Japón',
      active: false,
      createdAt: date
    },
    {
      id: 71,  
      name: 'Croacia',
      active: false,
      createdAt: date
    },
    {
      id: 72,  
      name: 'Rumanía',
      active: false,
      createdAt: date
    },
    {
      id: 73,  
      name: 'Hong Kong',
      active: false,
      createdAt: date
    },
    {
      id: 74,  
      name: 'Indonesia',
      active: false,
      createdAt: date
    },
    {
      id: 75,  
      name: 'Jordania',
      active: false,
      createdAt: date
    },
    {
      id: 76,  
      name: 'Malasia',
      active: false,
      createdAt: date
    },
    {
      id: 77,  
      name: 'Singapur',
      active: false,
      createdAt: date
    },
    {
      id: 78,  
      name: 'Taiwan',
      active: false,
      createdAt: date
    },
    {
      id: 79,  
      name: 'Bosnia y Herzegovina',
      active: false,
      createdAt: date
    },
    {
      id: 80,  
      name: 'Bahamas',
      active: false,
      createdAt: date
    },
    {
      id: 81,  
      name: 'Chile',
      active: true,
      createdAt: date
    },
    {
      id: 82,  
      name: 'Colombia',
      active: false,
      createdAt: date
    },
    {
      id: 83,  
      name: 'Islandia',
      active: false,
      createdAt: date
    },
    {
      id: 84,  
      name: 'Corea del Norte',
      active: false,
      createdAt: date
    },
    {
      id: 85,  
      name: 'Macedonia',
      active: false,
      createdAt: date
    },
    {
      id: 86,  
      name: 'Malta',
      active: false,
      createdAt: date
    },
    {
      id: 87,  
      name: 'Pakistán',
      active: false,
      createdAt: date
    },
    {
      id: 88,  
      name: 'Papúa-Nueva Guinea',
      active: false,
      createdAt: date
    },
    {
      id: 89,  
      name: 'Perú',
      active: false,
      createdAt: date
    },
    {
      id: 90,  
      name: 'Filipinas',
      active: false,
      createdAt: date
    },
    {
      id: 91,  
      name: 'Arabia Saudita',
      active: false,
      createdAt: date
    },
    {
      id: 92,  
      name: 'Tailandia',
      active: false,
      createdAt: date
    },
    {
      id: 93,  
      name: 'Emiratos árabes Unidos',
      active: false,
      createdAt: date
    },
    {
      id: 94,  
      name: 'Groenlandia',
      active: false,
      createdAt: date
    },
    {
      id: 95,  
      name: 'Venezuela',
      active: true,
      createdAt: date
    },
    {
      id: 96,  
      name: 'Zimbabwe',
      active: false,
      createdAt: date
    },
    {
      id: 97,  
      name: 'Kenia',
      active: false,
      createdAt: date
    },
    {
      id: 98,  
      name: 'Algeria',
      active: false,
      createdAt: date
    },
    {
      id: 99,  
      name: 'Líbano',
      active: false,
      createdAt: date
    },
    {
      id: 100, 
      name: 'Botsuana',
      active: false,
      createdAt: date
    },
    {
      id: 101, 
      name: 'Tanzania',
      active: false,
      createdAt: date
    },
    {
      id: 102, 
      name: 'Namibia',
      active: false,
      createdAt: date
    },
    {
      id: 103, 
      name: 'Ecuador',
      active: false,
      createdAt: date
    },
    {
      id: 104, 
      name: 'Marruecos',
      active: false,
      createdAt: date
    },
    {
      id: 105, 
      name: 'Ghana',
      active: false,
      createdAt: date
    },
    {
      id: 106, 
      name: 'Siria',
      active: false,
      createdAt: date
    },
    {
      id: 107, 
      name: 'Nepal',
      active: false,
      createdAt: date
    },
    {
      id: 108, 
      name: 'Mauritania',
      active: false,
      createdAt: date
    },
    {
      id: 109, 
      name: 'Seychelles',
      active: false,
      createdAt: date
    },
    {
      id: 110, 
      name: 'Paraguay',
      active: false,
      createdAt: date
    },
    {
      id: 111, 
      name: 'Uruguay',
      active: false,
      createdAt: date
    },
    {
      id: 112, 
      name: 'Congo (Brazzaville)',
      active: false,
      createdAt: date
    },
    {
      id: 113, 
      name: 'Cuba',
      active: false,
      createdAt: date
    },
    {
      id: 114, 
      name: 'Albania',
      active: false,
      createdAt: date
    },
    {
      id: 115, 
      name: 'Nigeria',
      active: false,
      createdAt: date
    },
    {
      id: 116, 
      name: 'Zambia',
      active: false,
      createdAt: date
    },
    {
      id: 117, 
      name: 'Mozambique',
      active: false,
      createdAt: date
    },
    {
      id: 118, 
      name: 'Angola',
      active: false,
      createdAt: date
    },
    {
      id: 119, 
      name: 'Sri Lanka',
      active: false,
      createdAt: date
    },
    {
      id: 120, 
      name: 'Etiopía',
      active: false,
      createdAt: date
    },
    {
      id: 121, 
      name: 'Túnez',
      active: false,
      createdAt: date
    },
    {
      id: 122, 
      name: 'Bolivia',
      active: false,
      createdAt: date
    },
    {
      id: 123, 
      name: 'Panamá',
      active: false,
      createdAt: date
    },
    {
      id: 124, 
      name: 'Malawi',
      active: false,
      createdAt: date
    },
    {
      id: 125, 
      name: 'Liechtenstein',
      active: false,
      createdAt: date
    },
    {
      id: 126, 
      name: 'Bahrein',
      active: false,
      createdAt: date
    },
    {
      id: 127, 
      name: 'Barbados',
      active: false,
      createdAt: date
    },
    {
      id: 128, 
      name: 'Chad',
      active: false,
      createdAt: date
    },
    {
      id: 129, 
      name: 'Man, Isla de',
      active: false,
      createdAt: date
    },
    {
      id: 130, 
      name: 'Jamaica',
      active: false,
      createdAt: date
    },
    {
      id: 131, 
      name: 'Malí',
      active: false,
      createdAt: date
    },
    {
      id: 132, 
      name: 'Madagascar',
      active: false,
      createdAt: date
    },
    {
      id: 133, 
      name: 'Senegal',
      active: false,
      createdAt: date
    },
    {
      id: 134, 
      name: 'Togo',
      active: false,
      createdAt: date
    },
    {
      id: 135, 
      name: 'Honduras',
      active: false,
      createdAt: date
    },
    {
      id: 136, 
      name: 'República Dominicana',
      active: false,
      createdAt: date
    },
    {
      id: 137, 
      name: 'Mongolia',
      active: false,
      createdAt: date
    },
    {
      id: 138, 
      name: 'Irak',
      active: false,
      createdAt: date
    },
    {
      id: 139, 
      name: 'Sudáfrica',
      active: false,
      createdAt: date
    },
    {
      id: 140, 
      name: 'Aruba',
      active: false,
      createdAt: date
    },
    {
      id: 141, 
      name: 'Gibraltar',
      active: false,
      createdAt: date
    },
    {
      id: 142, 
      name: 'Afganistán',
      active: false,
      createdAt: date
    },
    {
      id: 143, 
      name: 'Andorra',
      active: false,
      createdAt: date
    },
    {
      id: 144, 
      name: 'Antigua y Barbuda',
      active: false,
      createdAt: date
    },
    {
      id: 145, 
      name: 'Bangladesh',
      active: false,
      createdAt: date
    },
    {
      id: 146, 
      name: 'Benín',
      active: false,
      createdAt: date
    },
    {
      id: 147, 
      name: 'Bután',
      active: false,
      createdAt: date
    },
    {
      id: 148, 
      name: 'Islas Virgenes Británicas',
      active: false,
      createdAt: date
    },
    {
      id: 149, 
      name: 'Brunéi',
      active: false,
      createdAt: date
    },
    {
      id: 150, 
      name: 'Burkina Faso',
      active: false,
      createdAt: date
    },
    {
      id: 151, 
      name: 'Burundi',
      active: false,
      createdAt: date
    },
    {
      id: 152, 
      name: 'Camboya',
      active: false,
      createdAt: date
    },
    {
      id: 153, 
      name: 'Cabo Verde',
      active: false,
      createdAt: date
    },
    {
      id: 154, 
      name: 'Comores',
      active: false,
      createdAt: date
    },
    {
      id: 155, 
      name: 'Congo (Kinshasa)',
      active: false,
      createdAt: date
    },
    {
      id: 156, 
      name: 'Cook, Islas',
      active: false,
      createdAt: date
    },
    {
      id: 157, 
      name: 'Costa de Marfil',
      active: false,
      createdAt: date
    },
    {
      id: 158, 
      name: 'Djibouti, Yibuti',
      active: false,
      createdAt: date
    },
    {
      id: 159, 
      name: 'Timor Oriental',
      active: false,
      createdAt: date
    },
    {
      id: 160, 
      name: 'Guinea Ecuatorial',
      active: false,
      createdAt: date
    },
    {
      id: 161, 
      name: 'Eritrea',
      active: false,
      createdAt: date
    },
    {
      id: 162, 
      name: 'Feroe, Islas',
      active: false,
      createdAt: date
    },
    {
      id: 163, 
      name: 'Fiyi',
      active: false,
      createdAt: date
    },
    {
      id: 164, 
      name: 'Polinesia Francesa',
      active: false,
      createdAt: date
    },
    {
      id: 165, 
      name: 'Gabón',
      active: false,
      createdAt: date
    },
    {
      id: 166, 
      name: 'Gambia',
      active: false,
      createdAt: date
    },
    {
      id: 167, 
      name: 'Granada',
      active: false,
      createdAt: date
    },
    {
      id: 168, 
      name: 'Guatemala',
      active: false,
      createdAt: date
    },
    {
      id: 169, 
      name: 'Guernsey',
      active: false,
      createdAt: date
    },
    {
      id: 170, 
      name: 'Guinea',
      active: false,
      createdAt: date
    },
    {
      id: 171, 
      name: 'Guinea-Bissau',
      active: false,
      createdAt: date
    },
    {
      id: 172, 
      name: 'Guyana',
      active: false,
      createdAt: date
    },
    {
      id: 173, 
      name: 'Jersey',
      active: false,
      createdAt: date
    },
    {
      id: 174, 
      name: 'Kiribati',
      active: false,
      createdAt: date
    },
    {
      id: 175, 
      name: 'Laos',
      active: false,
      createdAt: date
    },
    {
      id: 176, 
      name: 'Lesotho',
      active: false,
      createdAt: date
    },
    {
      id: 177, 
      name: 'Liberia',
      active: false,
      createdAt: date
    },
    {
      id: 178, 
      name: 'Maldivas',
      active: false,
      createdAt: date
    },
    {
      id: 179, 
      name: 'Martinica',
      active: false,
      createdAt: date
    },
    {
      id: 180, 
      name: 'Mauricio',
      active: false,
      createdAt: date
    },
    {
      id: 181, 
      name: 'Myanmar',
      active: false,
      createdAt: date
    },
    {
      id: 182, 
      name: 'Nauru',
      active: false,
      createdAt: date
    },
    {
      id: 183, 
      name: 'Antillas Holandesas',
      active: false,
      createdAt: date
    },
    {
      id: 184, 
      name: 'Nueva Caledonia',
      active: false,
      createdAt: date
    },
    {
      id: 185, 
      name: 'Nicaragua',
      active: false,
      createdAt: date
    },
    {
      id: 186, 
      name: 'Níger',
      active: false,
      createdAt: date
    },
    {
      id: 187, 
      name: 'Norfolk Island',
      active: false,
      createdAt: date
    },
    {
      id: 188, 
      name: 'Omán',
      active: false,
      createdAt: date
    },
    {
      id: 189, 
      name: 'Isla Pitcairn',
      active: false,
      createdAt: date
    },
    {
      id: 190, 
      name: 'Qatar',
      active: false,
      createdAt: date
    },
    {
      id: 191, 
      name: 'Ruanda',
      active: false,
      createdAt: date
    },
    {
      id: 192, 
      name: 'Santa Elena',
      active: false,
      createdAt: date
    },
    {
      id: 193, 
      name: 'San Cristobal y Nevis',
      active: false,
      createdAt: date
    },
    {
      id: 194, 
      name: 'Santa Lucía',
      active: false,
      createdAt: date
    },
    {
      id: 195, 
      name: 'San Pedro y Miquelón',
      active: false,
      createdAt: date
    },
    {
      id: 196, 
      name: 'San Vincente y Granadinas',
      active: false,
      createdAt: date
    },
    {
      id: 197, 
      name: 'Samoa',
      active: false,
      createdAt: date
    },
    {
      id: 198, 
      name: 'San Marino',
      active: false,
      createdAt: date
    },
    {
      id: 199, 
      name: 'San Tomé y Príncipe',
      active: false,
      createdAt: date
    },
    {
      id: 200, 
      name: 'Serbia y Montenegro',
      active: false,
      createdAt: date
    },
    {
      id: 201, 
      name: 'Sierra Leona',
      active: false,
      createdAt: date
    },
    {
      id: 202, 
      name: 'Islas Salomón',
      active: false,
      createdAt: date
    },
    {
      id: 203, 
      name: 'Somalia',
      active: false,
      createdAt: date
    },
    {
      id: 204, 
      name: 'Sudán',
      active: false,
      createdAt: date
    },
    {
      id: 205, 
      name: 'Swazilandia',
      active: false,
      createdAt: date
    },
    {
      id: 206, 
      name: 'Tokelau',
      active: false,
      createdAt: date
    },
    {
      id: 207, 
      name: 'Tonga',
      active: false,
      createdAt: date
    },
    {
      id: 208, 
      name: 'Trinidad y Tobago',
      active: false,
      createdAt: date
    },
    {
      id: 209, 
      name: 'Tuvalu',
      active: false,
      createdAt: date
    },
    {
      id: 210, 
      name: 'Vanuatu',
      active: false,
      createdAt: date
    },
    {
      id: 211, 
      name: 'Wallis y Futuna',
      active: false,
      createdAt: date
    },
    {
      id: 212, 
      name: 'Sáhara Occidental',
      active: false,
      createdAt: date
    },
    {
      id: 213, 
      name: 'Yemen',
      active: false,
      createdAt: date
    },
    {
      id: 214, 
      name: 'Puerto Rico',
      active: false,
      createdAt: date
    }]

onlyCountries = [];
    for (let i = 0; i < records_Countries.length; i++) {
        onlyCountries.push(records_Countries[i].name)
    }



// Exportamos los modelos
module.exports = {
  onlyCountries
};
