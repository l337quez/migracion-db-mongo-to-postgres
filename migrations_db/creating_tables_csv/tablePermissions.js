const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const moment= require('moment')

/********************************************************************
 * Tabla Permission
 * id se relaciona con el campo de mongo y el titulo con postgres
 ********************************************************************/

async function runTablePermissions() {
  try {
    console.log(`* Creando la Tabla Permission en Formato CSV`);

    const csvPermissions = createCsvWriter({
      path: "./csv_files_and_csv_to_postgre/permissions.csv", // path del archivo csv
      header: [
        { id: "id", title: "id" },
        { id: "name", title: "name" },
        { id: "code", title: "code" },
        { id: "active", title: "active" },
        { id: "action_id", title: "action_id" },
        { id: "content_type_id", title: "content_type_id" },
        { id: "createdAt", title: "createdAt" },
        { id: "updatedAt", title: "updatedAt" },
      ],
    });
    const date =  moment(new Date()).format('YYYY-MM-DD HH:mm:ss'); 
    const records_permissions = [
      
      {
        id:1,
        name: 'can create coin name',
        code: 'create_coin_name_ves',
        active: true,
        action_id: 'c',
        content_type_id: 1,
        createdAt: date,
        updatedAt: date
      },
      {
        id: 2,
        name: 'can read coin name',
        code: 'read_coin_name_ves',
        active: true,
        action_id: 'r',
        content_type_id: 1,
        createdAt: date,
        updatedAt: date
      },
      {
        id: 3,
        name: 'can update coin name',
        code: 'update_coin_name_ves',
        active: true,
        action_id: 'u',
        content_type_id: 1,
        createdAt: date,
        updatedAt: date
      },
      {
        id: 4,
        name: 'can delete coin name',
        code: 'delete_coin_name_ves',
        active: true,
        action_id: 'd',
        content_type_id: 1,
        createdAt: date,
        updatedAt: date
      },
      {
        id:5,
        name: 'can create coin prefix',
        code: 'create_coin_prefix_ves',
        active: true,
        action_id: 'c',
        content_type_id: 1,
        createdAt: date,
        updatedAt: date
      },
      {
        id:6,
        name: 'can read coin prefix',
        code: 'read_coin_prefix_ves',
        active: true,
        action_id: 'r',
        content_type_id: 1,
        createdAt: date,
        updatedAt: date
      },
      {
        id:7,
        name: 'can update coin prefix',
        code: 'update_coin_prefix_ves',
        active: true,
        action_id: 'u',
        content_type_id: 1,
        createdAt: date,
        updatedAt: date
      },
      {
        id:8,
        name: 'can delete coin prefix',
        code: 'delete_coin_prefix_ves',
        active: true,
        action_id: 'd',
        content_type_id: 1,
        createdAt: date,
        updatedAt: date
      },
      {
        id:9,
        name: 'can create coin code',
        code: 'create_coin_code_ves',
        active: true,
        action_id: 'c',
        content_type_id: 1,
        createdAt: date,
        updatedAt: date
      },
      {
        id:10,
        name: 'can read coin code',
        code: 'read_coin_code_ves',
        active: true,
        action_id: 'r',
        content_type_id: 1,
        createdAt: date,
        updatedAt: date
      },
      {
        id:11,
        name: 'can update coin code',
        code: 'update_coin_code_ves',
        active: true,
        action_id: 'u',
        content_type_id: 1,
        createdAt: date,
        updatedAt: date
      },
      {
        id:12,
        name: 'can delete coin code',
        code: 'delete_coin_code_ves',
        active: true,
        action_id: 'd',
        content_type_id: 1,
        createdAt: date,
        updatedAt: date
      },
      {
        id:13,
        name: 'can create coin image',
        code: 'create_coin_image_ves',
        active: true,
        action_id: 'c',
        content_type_id: 1,
        createdAt: date,
        updatedAt: date
      },
      {
        id:14,
        name: 'can read coin image',
        code: 'read_coin_image_ves',
        active: true,
        action_id: 'r',
        content_type_id: 1,
        createdAt: date,
        updatedAt: date
      },
      {
        id:15,
        name: 'can update coin image',
        code: 'update_coin_image_ves',
        active: true,
        action_id: 'u',
        content_type_id: 1,
        createdAt: date,
        updatedAt: date
      },
      {
        id:16,
        name: 'can delete coin image',
        code: 'delete_coin_image_ves',
        active: true,
        action_id: 'd',
        content_type_id: 1,
        createdAt: date,
        updatedAt: date
      },
      {
        id:17,
        name: 'can create coin sell rate',
        code: 'create_coin_sell_rate_ves',
        active: true,
        action_id: 'c',
        content_type_id: 1,
        createdAt: date,
        updatedAt: date
      },
      {
        id:18,
        name: 'can read coin sell rate',
        code: 'read_coin_sell_rate_ves',
        active: true,
        action_id: 'r',
        content_type_id: 1,
        createdAt: date,
        updatedAt: date
      },
      {
        id:19,
        name: 'can update coin sell rate',
        code: 'update_coin_sell_rate_ves',
        active: true,
        action_id: 'u',
        content_type_id: 1,
        createdAt: date,
        updatedAt: date
      },
      {
        id:20,
        name: 'can delete coin sell rate',
        code: 'delete_coin_sell_rate_ves',
        active: true,
        action_id: 'd',
        content_type_id: 1,
        createdAt: date,
        updatedAt: date
      },
      {
        id:21,
        name: 'can create coin buy rate',
        code: 'create_coin_buy_rate_ves',
        active: true,
        action_id: 'c',
        content_type_id: 1,
        createdAt: date,
        updatedAt: date
      },
      {
        id:22,
        name: 'can read coin buy rate',
        code: 'read_coin_buy_rate_ves',
        active: true,
        action_id: 'r',
        content_type_id: 1,
        createdAt: date,
        updatedAt: date
      },
      {
        id:23,
        name: 'can update coin buy rate',
        code: 'update_coin_buy_rate_ves',
        active: true,
        action_id: 'u',
        content_type_id: 1,
        createdAt: date,
        updatedAt: date
      },
      {
        id:24,
        name: 'can delete coin buy rate',
        code: 'delete_coin_buy_rate_ves',
        active: true,
        action_id: 'd',
        content_type_id: 1,
        createdAt: date,
        updatedAt: date
      },
      {
        id:25,
        name: 'can create coin payment method',
        code: 'create_coin_payment_method_ves',
        active: true,
        action_id: 'c',
        content_type_id: 1,
        createdAt: date,
        updatedAt: date
      },
      {
        id:26,
        name: 'can read coin payment method',
        code: 'read_coin_payment_method_ves',
        active: true,
        action_id: 'r',
        content_type_id: 1,
        createdAt: date,
        updatedAt: date
      },
      {
        id:27,
        name: 'can update coin payment method',
        code: 'update_coin_payment_method_ves',
        active: true,
        action_id: 'u',
        content_type_id: 1,
        createdAt: date,
        updatedAt: date
      },
      {
        id:28,
        name: 'can delete coin payment method',
        code: 'delete_coin_payment_method_ves',
        active: true,
        action_id: 'd',
        content_type_id: 1,
        createdAt: date,
        updatedAt: date
      },
      {
        id:29,
        name: 'can create coin active',
        code: 'create_coin_active_ves',
        active: true,
        action_id: 'c',
        content_type_id: 1,
        createdAt: date,
        updatedAt: date
      },
      {
        id:30,
        name: 'can read coin active',
        code: 'read_coin_active_ves',
        active: true,
        action_id: 'r',
        content_type_id: 1,
        createdAt: date,
        updatedAt: date
      },
      {
        id:31,
        name: 'can update coin active',
        code: 'update_coin_active_ves',
        active: true,
        action_id: 'u',
        content_type_id: 1,
        createdAt: date,
        updatedAt: date
      },
      {
        id:32,
        name: 'can delete coin active',
        code: 'delete_coin_active_ves',
        active: true,
        action_id: 'd',
        content_type_id: 1,
        createdAt: date,
        updatedAt: date
      },
      {
        id:33,
        name: 'can create coin name',
        code: 'create_coin_name_usd',
        active: true,
        action_id: 'c',
        content_type_id: 2,
        createdAt: date,
        updatedAt: date
      },
      {
        id:34,
        name: 'can read coin name',
        code: 'read_coin_name_usd',
        active: true,
        action_id: 'r',
        content_type_id: 2,
        createdAt: date,
        updatedAt: date
      },
      {
        id:35,
        name: 'can update coin name',
        code: 'update_coin_name_usd',
        active: true,
        action_id: 'u',
        content_type_id: 2,
        createdAt: date,
        updatedAt: date
      },
      {
        id:36,
        name: 'can delete coin name',
        code: 'delete_coin_name_usd',
        active: true,
        action_id: 'd',
        content_type_id: 2,
        createdAt: date,
        updatedAt: date
      },
      {
        id:37,
        name: 'can create coin prefix',
        code: 'create_coin_prefix_usd',
        active: true,
        action_id: 'c',
        content_type_id: 2,
        createdAt: date,
        updatedAt: date
      },
      {
        id:38,
        name: 'can read coin prefix',
        code: 'read_coin_prefix_usd',
        active: true,
        action_id: 'r',
        content_type_id: 2,
        createdAt: date,
        updatedAt: date
      },
      {
        id:39,
        name: 'can update coin prefix',
        code: 'update_coin_prefix_usd',
        active: true,
        action_id: 'u',
        content_type_id: 2,
        createdAt: date,
        updatedAt: date
      },
      {
        id:40,
        name: 'can delete coin prefix',
        code: 'delete_coin_prefix_usd',
        active: true,
        action_id: 'd',
        content_type_id: 2,
        createdAt: date,
        updatedAt: date
      },
      {
        id:41,
        name: 'can create coin code',
        code: 'create_coin_code_usd',
        active: true,
        action_id: 'c',
        content_type_id: 2,
        createdAt: date,
        updatedAt: date
      },
      {
        id:42,
        name: 'can read coin code',
        code: 'read_coin_code_usd',
        active: true,
        action_id: 'r',
        content_type_id: 2,
        createdAt: date,
        updatedAt: date
      },
      {
        id:43,
        name: 'can update coin code',
        code: 'update_coin_code_usd',
        active: true,
        action_id: 'u',
        content_type_id: 2,
        createdAt: date,
        updatedAt: date
      },
      {
        id:44,
        name: 'can delete coin code',
        code: 'delete_coin_code_usd',
        active: true,
        action_id: 'd',
        content_type_id: 2,
        createdAt: date,
        updatedAt: date
      },
      {
        id:45,
        name: 'can create coin image',
        code: 'create_coin_image_usd',
        active: true,
        action_id: 'c',
        content_type_id: 2,
        createdAt: date,
        updatedAt: date
      },
      {
        id:46,
        name: 'can read coin image',
        code: 'read_coin_image_usd',
        active: true,
        action_id: 'r',
        content_type_id: 2,
        createdAt: date,
        updatedAt: date
      },
      {
        id:47,
        name: 'can update coin image',
        code: 'update_coin_image_usd',
        active: true,
        action_id: 'u',
        content_type_id: 2,
        createdAt: date,
        updatedAt: date
      },
      {
        id:48,
        name: 'can delete coin image',
        code: 'delete_coin_image_usd',
        active: true,
        action_id: 'd',
        content_type_id: 2,
        createdAt: date,
        updatedAt: date
      },
      {
        id:49,
        name: 'can create coin sell rate',
        code: 'create_coin_sell_rate_usd',
        active: true,
        action_id: 'c',
        content_type_id: 2,
        createdAt: date,
        updatedAt: date
      },
      {
        id:50,
        name: 'can read coin sell rate',
        code: 'read_coin_sell_rate_usd',
        active: true,
        action_id: 'r',
        content_type_id: 2,
        createdAt: date,
        updatedAt: date
      },
      {
        id:51,
        name: 'can update coin sell rate',
        code: 'update_coin_sell_rate_usd',
        active: true,
        action_id: 'u',
        content_type_id: 2,
        createdAt: date,
        updatedAt: date
      },
      {
        id:52,
        name: 'can delete coin sell rate',
        code: 'delete_coin_sell_rate_usd',
        active: true,
        action_id: 'd',
        content_type_id: 2,
        createdAt: date,
        updatedAt: date
      },
      {
        id:53,
        name: 'can create coin buy rate',
        code: 'create_coin_buy_rate_usd',
        active: true,
        action_id: 'c',
        content_type_id: 2,
        createdAt: date,
        updatedAt: date
      },
      {
        id:54,
        name: 'can read coin buy rate',
        code: 'read_coin_buy_rate_usd',
        active: true,
        action_id: 'r',
        content_type_id: 2,
        createdAt: date,
        updatedAt: date
      },
      {
        id:55,
        name: 'can update coin buy rate',
        code: 'update_coin_buy_rate_usd',
        active: true,
        action_id: 'u',
        content_type_id: 2,
        createdAt: date,
        updatedAt: date
      },
      {
        id:56,
        name: 'can delete coin buy rate',
        code: 'delete_coin_buy_rate_usd',
        active: true,
        action_id: 'd',
        content_type_id: 2,
        createdAt: date,
        updatedAt: date
      },
      {
        id:57,
        name: 'can create coin payment method',
        code: 'create_coin_payment_method_usd',
        active: true,
        action_id: 'c',
        content_type_id: 2,
        createdAt: date,
        updatedAt: date
      },
      {
        id:58,
        name: 'can read coin payment method',
        code: 'read_coin_payment_method_usd',
        active: true,
        action_id: 'r',
        content_type_id: 2,
        createdAt: date,
        updatedAt: date
      },
      {
        id:59,
        name: 'can update coin payment method',
        code: 'update_coin_payment_method_usd',
        active: true,
        action_id: 'u',
        content_type_id: 2,
        createdAt: date,
        updatedAt: date
      },
      {
        id:60,
        name: 'can delete coin payment method',
        code: 'delete_coin_payment_method_usd',
        active: true,
        action_id: 'd',
        content_type_id: 2,
        createdAt: date,
        updatedAt: date
      },
      {
        id:61,
        name: 'can create coin active',
        code: 'create_coin_active_usd',
        active: true,
        action_id: 'c',
        content_type_id: 2,
        createdAt: date,
        updatedAt: date
      },
      {
        id:62,
        name: 'can read coin active',
        code: 'read_coin_active_usd',
        active: true,
        action_id: 'r',
        content_type_id: 2,
        createdAt: date,
        updatedAt: date
      },
      {
        id:63,
        name: 'can update coin active',
        code: 'update_coin_active_usd',
        active: true,
        action_id: 'u',
        content_type_id: 2,
        createdAt: date,
        updatedAt: date
      },
      {
        id:64,
        name: 'can delete coin active',
        code: 'delete_coin_active_usd',
        active: true,
        action_id: 'd',
        content_type_id: 2,
        createdAt: date,
        updatedAt: date
      },
      {
        id:65,
        name: 'can create coin name',
        code: 'create_coin_name_eur',
        active: true,
        action_id: 'c',
        content_type_id: 3,
        createdAt: date,
        updatedAt: date
      },
      {
        id:66,
        name: 'can read coin name',
        code: 'read_coin_name_eur',
        active: true,
        action_id: 'r',
        content_type_id: 3,
        createdAt: date,
        updatedAt: date
      },
      {
        id:67,
        name: 'can update coin name',
        code: 'update_coin_name_eur',
        active: true,
        action_id: 'u',
        content_type_id: 3,
        createdAt: date,
        updatedAt: date
      },
      {
        id:68,
        name: 'can delete coin name',
        code: 'delete_coin_name_eur',
        active: true,
        action_id: 'd',
        content_type_id: 3,
        createdAt: date,
        updatedAt: date
      },
      {
        id:69,
        name: 'can create coin prefix',
        code: 'create_coin_prefix_eur',
        active: true,
        action_id: 'c',
        content_type_id: 3,
        createdAt: date,
        updatedAt: date
      },
      {
        id:70,
        name: 'can read coin prefix',
        code: 'read_coin_prefix_eur',
        active: true,
        action_id: 'r',
        content_type_id: 3,
        createdAt: date,
        updatedAt: date
      },
      {
        id:71,
        name: 'can update coin prefix',
        code: 'update_coin_prefix_eur',
        active: true,
        action_id: 'u',
        content_type_id: 3,
        createdAt: date,
        updatedAt: date
      },
      {
        id:72,
        name: 'can delete coin prefix',
        code: 'delete_coin_prefix_eur',
        active: true,
        action_id: 'd',
        content_type_id: 3,
        createdAt: date,
        updatedAt: date
      },
      {
        id:73,
        name: 'can create coin code',
        code: 'create_coin_code_eur',
        active: true,
        action_id: 'c',
        content_type_id: 3,
        createdAt: date,
        updatedAt: date
      },
      {
        id:74,
        name: 'can read coin code',
        code: 'read_coin_code_eur',
        active: true,
        action_id: 'r',
        content_type_id: 3,
        createdAt: date,
        updatedAt: date
      },
      {
        id:75,
        name: 'can update coin code',
        code: 'update_coin_code_eur',
        active: true,
        action_id: 'u',
        content_type_id: 3,
        createdAt: date,
        updatedAt: date
      },
      {
        id:76,
        name: 'can delete coin code',
        code: 'delete_coin_code_eur',
        active: true,
        action_id: 'd',
        content_type_id: 3,
        createdAt: date,
        updatedAt: date
      },
      {
        id:77,
        name: 'can create coin image',
        code: 'create_coin_image_eur',
        active: true,
        action_id: 'c',
        content_type_id: 3,
        createdAt: date,
        updatedAt: date
      },
      {
        id:78,
        name: 'can read coin image',
        code: 'read_coin_image_eur',
        active: true,
        action_id: 'r',
        content_type_id: 3,
        createdAt: date,
        updatedAt: date
      },
      {
        id:79,
        name: 'can update coin image',
        code: 'update_coin_image_eur',
        active: true,
        action_id: 'u',
        content_type_id: 3,
        createdAt: date,
        updatedAt: date
      },
      {
        id:80,
        name: 'can delete coin image',
        code: 'delete_coin_image_eur',
        active: true,
        action_id: 'd',
        content_type_id: 3,
        createdAt: date,
        updatedAt: date
      },
      {
        id:81,
        name: 'can create coin sell rate',
        code: 'create_coin_sell_rate_eur',
        active: true,
        action_id: 'c',
        content_type_id: 3,
        createdAt: date,
        updatedAt: date
      },
      {
        id:82,
        name: 'can read coin sell rate',
        code: 'read_coin_sell_rate_eur',
        active: true,
        action_id: 'r',
        content_type_id: 3,
        createdAt: date,
        updatedAt: date
      },
      {
        id:83,
        name: 'can update coin sell rate',
        code: 'update_coin_sell_rate_eur',
        active: true,
        action_id: 'u',
        content_type_id: 3,
        createdAt: date,
        updatedAt: date
      },
      {
        id:84,
        name: 'can delete coin sell rate',
        code: 'delete_coin_sell_rate_eur',
        active: true,
        action_id: 'd',
        content_type_id: 3,
        createdAt: date,
        updatedAt: date
      },
      {
        id:85,
        name: 'can create coin buy rate',
        code: 'create_coin_buy_rate_eur',
        active: true,
        action_id: 'c',
        content_type_id: 3,
        createdAt: date,
        updatedAt: date
      },
      {
        id:86,
        name: 'can read coin buy rate',
        code: 'read_coin_buy_rate_eur',
        active: true,
        action_id: 'r',
        content_type_id: 3,
        createdAt: date,
        updatedAt: date
      },
      {
        id:87,
        name: 'can update coin buy rate',
        code: 'update_coin_buy_rate_eur',
        active: true,
        action_id: 'u',
        content_type_id: 3,
        createdAt: date,
        updatedAt: date
      },
      {
        id:88,
        name: 'can delete coin buy rate',
        code: 'delete_coin_buy_rate_eur',
        active: true,
        action_id: 'd',
        content_type_id: 3,
        createdAt: date,
        updatedAt: date
      },
      {
        id:89,
        name: 'can create coin payment method',
        code: 'create_coin_payment_method_eur',
        active: true,
        action_id: 'c',
        content_type_id: 3,
        createdAt: date,
        updatedAt: date
      },
      {
        id:90,
        name: 'can read coin payment method',
        code: 'read_coin_payment_method_eur',
        active: true,
        action_id: 'r',
        content_type_id: 3,
        createdAt: date,
        updatedAt: date
      },
      {
        id:91,
        name: 'can update coin payment method',
        code: 'update_coin_payment_method_eur',
        active: true,
        action_id: 'u',
        content_type_id: 3,
        createdAt: date,
        updatedAt: date
      },
      {
        id:92,
        name: 'can delete coin payment method',
        code: 'delete_coin_payment_method_eur',
        active: true,
        action_id: 'd',
        content_type_id: 3,
        createdAt: date,
        updatedAt: date
      },
      {
        id:93,
        name: 'can create coin active',
        code: 'create_coin_active_eur',
        active: true,
        action_id: 'c',
        content_type_id: 3,
        createdAt: date,
        updatedAt: date
      },
      {
        id:94,
        name: 'can read coin active',
        code: 'read_coin_active_eur',
        active: true,
        action_id: 'r',
        content_type_id: 3,
        createdAt: date,
        updatedAt: date
      },
      {
        id:95,
        name: 'can update coin active',
        code: 'update_coin_active_eur',
        active: true,
        action_id: 'u',
        content_type_id: 3,
        createdAt: date,
        updatedAt: date
      },
      {
        id:96,
        name: 'can delete coin active',
        code: 'delete_coin_active_eur',
        active: true,
        action_id: 'd',
        content_type_id: 3,
        createdAt: date,
        updatedAt: date
      },
      {
        id:97,
        name: 'can create coin name',
        code: 'create_coin_name_clp',
        active: true,
        action_id: 'c',
        content_type_id: 4,
        createdAt: date,
        updatedAt: date
      },
      {
        id:98,
        name: 'can read coin name',
        code: 'read_coin_name_clp',
        active: true,
        action_id: 'r',
        content_type_id: 4,
        createdAt: date,
        updatedAt: date
      },
      {
        id:99,
        name: 'can update coin name',
        code: 'update_coin_name_clp',
        active: true,
        action_id: 'u',
        content_type_id: 4,
        createdAt: date,
        updatedAt: date
      },
      {
        id:100,
        name: 'can delete coin name',
        code: 'delete_coin_name_clp',
        active: true,
        action_id: 'd',
        content_type_id: 4,
        createdAt: date,
        updatedAt: date
      },
      {
        id:101,
        name: 'can create coin prefix',
        code: 'create_coin_prefix_clp',
        active: true,
        action_id: 'c',
        content_type_id: 4,
        createdAt: date,
        updatedAt: date
      },
      {
        id:102,
        name: 'can read coin prefix',
        code: 'read_coin_prefix_clp',
        active: true,
        action_id: 'r',
        content_type_id: 4,
        createdAt: date,
        updatedAt: date
      },
      {
        id:103,
        name: 'can update coin prefix',
        code: 'update_coin_prefix_clp',
        active: true,
        action_id: 'u',
        content_type_id: 4,
        createdAt: date,
        updatedAt: date
      },
      {
        id:104,
        name: 'can delete coin prefix',
        code: 'delete_coin_prefix_clp',
        active: true,
        action_id: 'd',
        content_type_id: 4,
        createdAt: date,
        updatedAt: date
      },
      {
        id:105,
        name: 'can create coin code',
        code: 'create_coin_code_clp',
        active: true,
        action_id: 'c',
        content_type_id: 4,
        createdAt: date,
        updatedAt: date
      },
      {
        id:106,
        name: 'can read coin code',
        code: 'read_coin_code_clp',
        active: true,
        action_id: 'r',
        content_type_id: 4,
        createdAt: date,
        updatedAt: date
      },
      {
        id:107,
        name: 'can update coin code',
        code: 'update_coin_code_clp',
        active: true,
        action_id: 'u',
        content_type_id: 4,
        createdAt: date,
        updatedAt: date
      },
      {
        id:108,
        name: 'can delete coin code',
        code: 'delete_coin_code_clp',
        active: true,
        action_id: 'd',
        content_type_id: 4,
        createdAt: date,
        updatedAt: date
      },
      {
        id:109,
        name: 'can create coin image',
        code: 'create_coin_image_clp',
        active: true,
        action_id: 'c',
        content_type_id: 4,
        createdAt: date,
        updatedAt: date
      },
      {
        id:110,
        name: 'can read coin image',
        code: 'read_coin_image_clp',
        active: true,
        action_id: 'r',
        content_type_id: 4,
        createdAt: date,
        updatedAt: date
      },
      {
        id:111,
        name: 'can update coin image',
        code: 'update_coin_image_clp',
        active: true,
        action_id: 'u',
        content_type_id: 4,
        createdAt: date,
        updatedAt: date
      },
      {
        id:112,
        name: 'can delete coin image',
        code: 'delete_coin_image_clp',
        active: true,
        action_id: 'd',
        content_type_id: 4,
        createdAt: date,
        updatedAt: date
      },
      {
        id:113,
        name: 'can create coin sell rate',
        code: 'create_coin_sell_rate_clp',
        active: true,
        action_id: 'c',
        content_type_id: 4,
        createdAt: date,
        updatedAt: date
      },
      {
        id:114,
        name: 'can read coin sell rate',
        code: 'read_coin_sell_rate_clp',
        active: true,
        action_id: 'r',
        content_type_id: 4,
        createdAt: date,
        updatedAt: date
      },
      {
        id:115,
        name: 'can update coin sell rate',
        code: 'update_coin_sell_rate_clp',
        active: true,
        action_id: 'u',
        content_type_id: 4,
        createdAt: date,
        updatedAt: date
      },
      {
        id:116,
        name: 'can delete coin sell rate',
        code: 'delete_coin_sell_rate_clp',
        active: true,
        action_id: 'd',
        content_type_id: 4,
        createdAt: date,
        updatedAt: date
      },
      {
        id:117,
        name: 'can create coin buy rate',
        code: 'create_coin_buy_rate_clp',
        active: true,
        action_id: 'c',
        content_type_id: 4,
        createdAt: date,
        updatedAt: date
      },
      {
        id:118,
        name: 'can read coin buy rate',
        code: 'read_coin_buy_rate_clp',
        active: true,
        action_id: 'r',
        content_type_id: 4,
        createdAt: date,
        updatedAt: date
      },
      {
        id:119,
        name: 'can update coin buy rate',
        code: 'update_coin_buy_rate_clp',
        active: true,
        action_id: 'u',
        content_type_id: 4,
        createdAt: date,
        updatedAt: date
      },
      {
        id:120,
        name: 'can delete coin buy rate',
        code: 'delete_coin_buy_rate_clp',
        active: true,
        action_id: 'd',
        content_type_id: 4,
        createdAt: date,
        updatedAt: date
      },
      {
        id:121,
        name: 'can create coin payment method',
        code: 'create_coin_payment_method_clp',
        active: true,
        action_id: 'c',
        content_type_id: 4,
        createdAt: date,
        updatedAt: date
      },
      {
        id:122,
        name: 'can read coin payment method',
        code: 'read_coin_payment_method_clp',
        active: true,
        action_id: 'r',
        content_type_id: 4,
        createdAt: date,
        updatedAt: date
      },
      {
        id:123,
        name: 'can update coin payment method',
        code: 'update_coin_payment_method_clp',
        active: true,
        action_id: 'u',
        content_type_id: 4,
        createdAt: date,
        updatedAt: date
      },
      {
        id:124,
        name: 'can delete coin payment method',
        code: 'delete_coin_payment_method_clp',
        active: true,
        action_id: 'd',
        content_type_id: 4,
        createdAt: date,
        updatedAt: date
      },
      {
        id:125,
        name: 'can create coin active',
        code: 'create_coin_active_clp',
        active: true,
        action_id: 'c',
        content_type_id: 4,
        createdAt: date,
        updatedAt: date
      },
      {
        id:126,
        name: 'can read coin active',
        code: 'read_coin_active_clp',
        active: true,
        action_id: 'r',
        content_type_id: 4,
        createdAt: date,
        updatedAt: date
      },
      {
        id:127,
        name: 'can update coin active',
        code: 'update_coin_active_clp',
        active: true,
        action_id: 'u',
        content_type_id: 4,
        createdAt: date,
        updatedAt: date
      },
      {
        id:128,
        name: 'can delete coin active',
        code: 'delete_coin_active_clp',
        active: true,
        action_id: 'd',
        content_type_id: 4,
        createdAt: date,
        updatedAt: date
      },
      {
        id:129,
        name: 'can create coin name',
        code: 'create_coin_name_ars',
        active: true,
        action_id: 'c',
        content_type_id: 5,
        createdAt: date,
        updatedAt: date
      },
      {
        id:130,
        name: 'can read coin name',
        code: 'read_coin_name_ars',
        active: true,
        action_id: 'r',
        content_type_id: 5,
        createdAt: date,
        updatedAt: date
      },
      {
        id:131,
        name: 'can update coin name',
        code: 'update_coin_name_ars',
        active: true,
        action_id: 'u',
        content_type_id: 5,
        createdAt: date,
        updatedAt: date
      },
      {
        id:132,
        name: 'can delete coin name',
        code: 'delete_coin_name_ars',
        active: true,
        action_id: 'd',
        content_type_id: 5,
        createdAt: date,
        updatedAt: date
      },
      {
        id:133,
        name: 'can create coin prefix',
        code: 'create_coin_prefix_ars',
        active: true,
        action_id: 'c',
        content_type_id: 5,
        createdAt: date,
        updatedAt: date
      },
      {
        id:134,
        name: 'can read coin prefix',
        code: 'read_coin_prefix_ars',
        active: true,
        action_id: 'r',
        content_type_id: 5,
        createdAt: date,
        updatedAt: date
      },
      {
        id:135,
        name: 'can update coin prefix',
        code: 'update_coin_prefix_ars',
        active: true,
        action_id: 'u',
        content_type_id: 5,
        createdAt: date,
        updatedAt: date
      },
      {
        id:136,
        name: 'can delete coin prefix',
        code: 'delete_coin_prefix_ars',
        active: true,
        action_id: 'd',
        content_type_id: 5,
        createdAt: date,
        updatedAt: date
      },
      {
        id:137,
        name: 'can create coin code',
        code: 'create_coin_code_ars',
        active: true,
        action_id: 'c',
        content_type_id: 5,
        createdAt: date,
        updatedAt: date
      },
      {
        id:138,
        name: 'can read coin code',
        code: 'read_coin_code_ars',
        active: true,
        action_id: 'r',
        content_type_id: 5,
        createdAt: date,
        updatedAt: date
      },
      {
        id:139,
        name: 'can update coin code',
        code: 'update_coin_code_ars',
        active: true,
        action_id: 'u',
        content_type_id: 5,
        createdAt: date,
        updatedAt: date
      },
      {
        id:140,
        name: 'can delete coin code',
        code: 'delete_coin_code_ars',
        active: true,
        action_id: 'd',
        content_type_id: 5,
        createdAt: date,
        updatedAt: date
      },
      {
        id:141,
        name: 'can create coin image',
        code: 'create_coin_image_ars',
        active: true,
        action_id: 'c',
        content_type_id: 5,
        createdAt: date,
        updatedAt: date
      },
      {
        id:142,
        name: 'can read coin image',
        code: 'read_coin_image_ars',
        active: true,
        action_id: 'r',
        content_type_id: 5,
        createdAt: date,
        updatedAt: date
      },
      {
        id:143,
        name: 'can update coin image',
        code: 'update_coin_image_ars',
        active: true,
        action_id: 'u',
        content_type_id: 5,
        createdAt: date,
        updatedAt: date
      },
      {
        id:144,
        name: 'can delete coin image',
        code: 'delete_coin_image_ars',
        active: true,
        action_id: 'd',
        content_type_id: 5,
        createdAt: date,
        updatedAt: date
      },
      {
        id:145,
        name: 'can create coin sell rate',
        code: 'create_coin_sell_rate_ars',
        active: true,
        action_id: 'c',
        content_type_id: 5,
        createdAt: date,
        updatedAt: date
      },
      {
        id:146,
        name: 'can read coin sell rate',
        code: 'read_coin_sell_rate_ars',
        active: true,
        action_id: 'r',
        content_type_id: 5,
        createdAt: date,
        updatedAt: date
      },
      {
        id:147,
        name: 'can update coin sell rate',
        code: 'update_coin_sell_rate_ars',
        active: true,
        action_id: 'u',
        content_type_id: 5,
        createdAt: date,
        updatedAt: date
      },
      {
        id:148,
        name: 'can delete coin sell rate',
        code: 'delete_coin_sell_rate_ars',
        active: true,
        action_id: 'd',
        content_type_id: 5,
        createdAt: date,
        updatedAt: date
      },
      {
        id:149,
        name: 'can create coin buy rate',
        code: 'create_coin_buy_rate_ars',
        active: true,
        action_id: 'c',
        content_type_id: 5,
        createdAt: date,
        updatedAt: date
      },
      {
        id:150,
        name: 'can read coin buy rate',
        code: 'read_coin_buy_rate_ars',
        active: true,
        action_id: 'r',
        content_type_id: 5,
        createdAt: date,
        updatedAt: date
      },
      {
        id: 151,
        name: 'can update coin buy rate',
        code: 'update_coin_buy_rate_ars',
        active: true,
        action_id: 'u',
        content_type_id: 5,
        createdAt: date,
        updatedAt: date
      },
      {
        id:152,
        name: 'can delete coin buy rate',
        code: 'delete_coin_buy_rate_ars',
        active: true,
        action_id: 'd',
        content_type_id: 5,
        createdAt: date,
        updatedAt: date
      },
      {
        id:153,
        name: 'can create coin payment method',
        code: 'create_coin_payment_method_ars',
        active: true,
        action_id: 'c',
        content_type_id: 5,
        createdAt: date,
        updatedAt: date
      },
      {
        id:154,
        name: 'can read coin payment method',
        code: 'read_coin_payment_method_ars',
        active: true,
        action_id: 'r',
        content_type_id: 5,
        createdAt: date,
        updatedAt: date
      },
      {
        id:155,
        name: 'can update coin payment method',
        code: 'update_coin_payment_method_ars',
        active: true,
        action_id: 'u',
        content_type_id: 5,
        createdAt: date,
        updatedAt: date
      },
      {
        id:156,
        name: 'can delete coin payment method',
        code: 'delete_coin_payment_method_ars',
        active: true,
        action_id: 'd',
        content_type_id: 5,
        createdAt: date,
        updatedAt: date
      },
      {
        id:157,
        name: 'can create coin active',
        code: 'create_coin_active_ars',
        active: true,
        action_id: 'c',
        content_type_id: 5,
        createdAt: date,
        updatedAt: date
      },
      {
        id:158,
        name: 'can read coin active',
        code: 'read_coin_active_ars',
        active: true,
        action_id: 'r',
        content_type_id: 5,
        createdAt: date,
        updatedAt: date
      },
      {
        id:159,
        name: 'can update coin active',
        code: 'update_coin_active_ars',
        active: true,
        action_id: 'u',
        content_type_id: 5,
        createdAt: date,
        updatedAt: date
      },
      {
        id:160,
        name: 'can delete coin active',
        code: 'delete_coin_active_ars',
        active: true,
        action_id: 'd',
        content_type_id: 5,
        createdAt: date,
        updatedAt: date
      },
      {
        id:161,
        name: 'can create coin name',
        code: 'create_coin_name_btc',
        active: true,
        action_id: 'c',
        content_type_id: 6,
        createdAt: date,
        updatedAt: date
      },
      {
        id:162,
        name: 'can read coin name',
        code: 'read_coin_name_btc',
        active: true,
        action_id: 'r',
        content_type_id: 6,
        createdAt: date,
        updatedAt: date
      },
      {
        id:163,
        name: 'can update coin name',
        code: 'update_coin_name_btc',
        active: true,
        action_id: 'u',
        content_type_id: 6,
        createdAt: date,
        updatedAt: date
      },
      {
        id:164,
        name: 'can delete coin name',
        code: 'delete_coin_name_btc',
        active: true,
        action_id: 'd',
        content_type_id: 6,
        createdAt: date,
        updatedAt: date
      },
      {
        id:165,
        name: 'can create coin prefix',
        code: 'create_coin_prefix_btc',
        active: true,
        action_id: 'c',
        content_type_id: 6,
        createdAt: date,
        updatedAt: date
      },
      {
        id:166,
        name: 'can read coin prefix',
        code: 'read_coin_prefix_btc',
        active: true,
        action_id: 'r',
        content_type_id: 6,
        createdAt: date,
        updatedAt: date
      },
      {
        id:167,
        name: 'can update coin prefix',
        code: 'update_coin_prefix_btc',
        active: true,
        action_id: 'u',
        content_type_id: 6,
        createdAt: date,
        updatedAt: date
      },
      {
        id:168,
        name: 'can delete coin prefix',
        code: 'delete_coin_prefix_btc',
        active: true,
        action_id: 'd',
        content_type_id: 6,
        createdAt: date,
        updatedAt: date
      },
      {
        id:169,
        name: 'can create coin code',
        code: 'create_coin_code_btc',
        active: true,
        action_id: 'c',
        content_type_id: 6,
        createdAt: date,
        updatedAt: date
      },
      {
        id:170,
        name: 'can read coin code',
        code: 'read_coin_code_btc',
        active: true,
        action_id: 'r',
        content_type_id: 6,
        createdAt: date,
        updatedAt: date
      },
      {
        id:171,
        name: 'can update coin code',
        code: 'update_coin_code_btc',
        active: true,
        action_id: 'u',
        content_type_id: 6,
        createdAt: date,
        updatedAt: date
      },
      {
        id:172,
        name: 'can delete coin code',
        code: 'delete_coin_code_btc',
        active: true,
        action_id: 'd',
        content_type_id: 6,
        createdAt: date,
        updatedAt: date
      },
      {
        id:173,
        name: 'can create coin image',
        code: 'create_coin_image_btc',
        active: true,
        action_id: 'c',
        content_type_id: 6,
        createdAt: date,
        updatedAt: date
      },
      {
        id:174,
        name: 'can read coin image',
        code: 'read_coin_image_btc',
        active: true,
        action_id: 'r',
        content_type_id: 6,
        createdAt: date,
        updatedAt: date
      },
      {
        id:175,
        name: 'can update coin image',
        code: 'update_coin_image_btc',
        active: true,
        action_id: 'u',
        content_type_id: 6,
        createdAt: date,
        updatedAt: date
      },
      {
        id:176,
        name: 'can delete coin image',
        code: 'delete_coin_image_btc',
        active: true,
        action_id: 'd',
        content_type_id: 6,
        createdAt: date,
        updatedAt: date
      },
      {
        id:177,
        name: 'can create coin sell rate',
        code: 'create_coin_sell_rate_btc',
        active: true,
        action_id: 'c',
        content_type_id: 6,
        createdAt: date,
        updatedAt: date
      },
      {
        id:178,
        name: 'can read coin sell rate',
        code: 'read_coin_sell_rate_btc',
        active: true,
        action_id: 'r',
        content_type_id: 6,
        createdAt: date,
        updatedAt: date
      },
      {
        id:179,
        name: 'can update coin sell rate',
        code: 'update_coin_sell_rate_btc',
        active: true,
        action_id: 'u',
        content_type_id: 6,
        createdAt: date,
        updatedAt: date
      },
      {
        id:180,
        name: 'can delete coin sell rate',
        code: 'delete_coin_sell_rate_btc',
        active: true,
        action_id: 'd',
        content_type_id: 6,
        createdAt: date,
        updatedAt: date
      },
      {
        id:181,
        name: 'can create coin buy rate',
        code: 'create_coin_buy_rate_btc',
        active: true,
        action_id: 'c',
        content_type_id: 6,
        createdAt: date,
        updatedAt: date
      },
      {
        id:182,
        name: 'can read coin buy rate',
        code: 'read_coin_buy_rate_btc',
        active: true,
        action_id: 'r',
        content_type_id: 6,
        createdAt: date,
        updatedAt: date
      },
      {
        id:183,
        name: 'can update coin buy rate',
        code: 'update_coin_buy_rate_btc',
        active: true,
        action_id: 'u',
        content_type_id: 6,
        createdAt: date,
        updatedAt: date
      },
      {
        id:184,
        name: 'can delete coin buy rate',
        code: 'delete_coin_buy_rate_btc',
        active: true,
        action_id: 'd',
        content_type_id: 6,
        createdAt: date,
        updatedAt: date
      },
      {
        id:185,
        name: 'can create coin payment method',
        code: 'create_coin_payment_method_btc',
        active: true,
        action_id: 'c',
        content_type_id: 6,
        createdAt: date,
        updatedAt: date
      },
      {
        id:186,
        name: 'can read coin payment method',
        code: 'read_coin_payment_method_btc',
        active: true,
        action_id: 'r',
        content_type_id: 6,
        createdAt: date,
        updatedAt: date
      },
      {
        id:187,
        name: 'can update coin payment method',
        code: 'update_coin_payment_method_btc',
        active: true,
        action_id: 'u',
        content_type_id: 6,
        createdAt: date,
        updatedAt: date
      },
      {
        id:188,
        name: 'can delete coin payment method',
        code: 'delete_coin_payment_method_btc',
        active: true,
        action_id: 'd',
        content_type_id: 6,
        createdAt: date,
        updatedAt: date
      },
      {
        id:189,
        name: 'can create coin active',
        code: 'create_coin_active_btc',
        active: true,
        action_id: 'c',
        content_type_id: 6,
        createdAt: date,
        updatedAt: date
      },
      {
        id:190,
        name: 'can read coin active',
        code: 'read_coin_active_btc',
        active: true,
        action_id: 'r',
        content_type_id: 6,
        createdAt: date,
        updatedAt: date
      },
      {
        id:191,
        name: 'can update coin active',
        code: 'update_coin_active_btc',
        active: true,
        action_id: 'u',
        content_type_id: 6,
        createdAt: date,
        updatedAt: date
      },
      {
        id:192,
        name: 'can delete coin active',
        code: 'delete_coin_active_btc',
        active: true,
        action_id: 'd',
        content_type_id: 6,
        createdAt: date,
        updatedAt: date
      },
      {
        id:193,
        name: 'can create coin name',
        code: 'create_coin_name_eth',
        active: true,
        action_id: 'c',
        content_type_id: 7,
        createdAt: date,
        updatedAt: date
      },
      {
        id:194,
        name: 'can read coin name',
        code: 'read_coin_name_eth',
        active: true,
        action_id: 'r',
        content_type_id: 7,
        createdAt: date,
        updatedAt: date
      },
      {
        id:195,
        name: 'can update coin name',
        code: 'update_coin_name_eth',
        active: true,
        action_id: 'u',
        content_type_id: 7,
        createdAt: date,
        updatedAt: date
      },
      {
        id:196,
        name: 'can delete coin name',
        code: 'delete_coin_name_eth',
        active: true,
        action_id: 'd',
        content_type_id: 7,
        createdAt: date,
        updatedAt: date
      },
      {
        id:197,
        name: 'can create coin prefix',
        code: 'create_coin_prefix_eth',
        active: true,
        action_id: 'c',
        content_type_id: 7,
        createdAt: date,
        updatedAt: date
      },
      {
        id:198,
        name: 'can read coin prefix',
        code: 'read_coin_prefix_eth',
        active: true,
        action_id: 'r',
        content_type_id: 7,
        createdAt: date,
        updatedAt: date
      },
      {
        id:199,
        name: 'can update coin prefix',
        code: 'update_coin_prefix_eth',
        active: true,
        action_id: 'u',
        content_type_id: 7,
        createdAt: date,
        updatedAt: date
      },
      {
        id:200,
        name: 'can delete coin prefix',
        code: 'delete_coin_prefix_eth',
        active: true,
        action_id: 'd',
        content_type_id: 7,
        createdAt: date,
        updatedAt: date
      },
      {
        id:201,
        name: 'can create coin code',
        code: 'create_coin_code_eth',
        active: true,
        action_id: 'c',
        content_type_id: 7,
        createdAt: date,
        updatedAt: date
      },
      {
        id:202,
        name: 'can read coin code',
        code: 'read_coin_code_eth',
        active: true,
        action_id: 'r',
        content_type_id: 7,
        createdAt: date,
        updatedAt: date
      },
      {
        id:203,
        name: 'can update coin code',
        code: 'update_coin_code_eth',
        active: true,
        action_id: 'u',
        content_type_id: 7,
        createdAt: date,
        updatedAt: date
      },
      {
        id:204,
        name: 'can delete coin code',
        code: 'delete_coin_code_eth',
        active: true,
        action_id: 'd',
        content_type_id: 7,
        createdAt: date,
        updatedAt: date
      },
      {
        id:205,
        name: 'can create coin image',
        code: 'create_coin_image_eth',
        active: true,
        action_id: 'c',
        content_type_id: 7,
        createdAt: date,
        updatedAt: date
      },
      {
        id:206,
        name: 'can read coin image',
        code: 'read_coin_image_eth',
        active: true,
        action_id: 'r',
        content_type_id: 7,
        createdAt: date,
        updatedAt: date
      },
      {
        id:207,
        name: 'can update coin image',
        code: 'update_coin_image_eth',
        active: true,
        action_id: 'u',
        content_type_id: 7,
        createdAt: date,
        updatedAt: date
      },
      {
        id:208,
        name: 'can delete coin image',
        code: 'delete_coin_image_eth',
        active: true,
        action_id: 'd',
        content_type_id: 7,
        createdAt: date,
        updatedAt: date
      },
      {
        id:209,
        name: 'can create coin sell rate',
        code: 'create_coin_sell_rate_eth',
        active: true,
        action_id: 'c',
        content_type_id: 7,
        createdAt: date,
        updatedAt: date
      },
      {
        id:210,
        name: 'can read coin sell rate',
        code: 'read_coin_sell_rate_eth',
        active: true,
        action_id: 'r',
        content_type_id: 7,
        createdAt: date,
        updatedAt: date
      },
      {
        id:211,
        name: 'can update coin sell rate',
        code: 'update_coin_sell_rate_eth',
        active: true,
        action_id: 'u',
        content_type_id: 7,
        createdAt: date,
        updatedAt: date
      },
      {
        id:212,
        name: 'can delete coin sell rate',
        code: 'delete_coin_sell_rate_eth',
        active: true,
        action_id: 'd',
        content_type_id: 7,
        createdAt: date,
        updatedAt: date
      },
      {
        id:213,
        name: 'can create coin buy rate',
        code: 'create_coin_buy_rate_eth',
        active: true,
        action_id: 'c',
        content_type_id: 7,
        createdAt: date,
        updatedAt: date
      },
      {
        id:214,
        name: 'can read coin buy rate',
        code: 'read_coin_buy_rate_eth',
        active: true,
        action_id: 'r',
        content_type_id: 7,
        createdAt: date,
        updatedAt: date
      },
      {
        id:215,
        name: 'can update coin buy rate',
        code: 'update_coin_buy_rate_eth',
        active: true,
        action_id: 'u',
        content_type_id: 7,
        createdAt: date,
        updatedAt: date
      },
      {
        id:216,
        name: 'can delete coin buy rate',
        code: 'delete_coin_buy_rate_eth',
        active: true,
        action_id: 'd',
        content_type_id: 7,
        createdAt: date,
        updatedAt: date
      },
      {
        id:217,
        name: 'can create coin payment method',
        code: 'create_coin_payment_method_eth',
        active: true,
        action_id: 'c',
        content_type_id: 7,
        createdAt: date,
        updatedAt: date
      },
      {
        id:218,
        name: 'can read coin payment method',
        code: 'read_coin_payment_method_eth',
        active: true,
        action_id: 'r',
        content_type_id: 7,
        createdAt: date,
        updatedAt: date
      },
      {
        id:219,
        name: 'can update coin payment method',
        code: 'update_coin_payment_method_eth',
        active: true,
        action_id: 'u',
        content_type_id: 7,
        createdAt: date,
        updatedAt: date
      },
      {
        id:220,
        name: 'can delete coin payment method',
        code: 'delete_coin_payment_method_eth',
        active: true,
        action_id: 'd',
        content_type_id: 7,
        createdAt: date,
        updatedAt: date
      },
      {
        id:221,
        name: 'can create coin active',
        code: 'create_coin_active_eth',
        active: true,
        action_id: 'c',
        content_type_id: 7,
        createdAt: date,
        updatedAt: date
      },
      {
        id:222,
        name: 'can read coin active',
        code: 'read_coin_active_eth',
        active: true,
        action_id: 'r',
        content_type_id: 7,
        createdAt: date,
        updatedAt: date
      },
      {
        id:223,
        name: 'can update coin active',
        code: 'update_coin_active_eth',
        active: true,
        action_id: 'u',
        content_type_id: 7,
        createdAt: date,
        updatedAt: date
      },
      {
        id:224,
        name: 'can delete coin active',
        code: 'delete_coin_active_eth',
        active: true,
        action_id: 'd',
        content_type_id: 7,
        createdAt: date,
        updatedAt: date
      },
      {
        id:225,
        name: 'can create coin name',
        code: 'create_coin_name_ltc',
        active: true,
        action_id: 'c',
        content_type_id: 8,
        createdAt: date,
        updatedAt: date
      },
      {
        id:226,
        name: 'can read coin name',
        code: 'read_coin_name_ltc',
        active: true,
        action_id: 'r',
        content_type_id: 8,
        createdAt: date,
        updatedAt: date
      },
      {
        id:227,
        name: 'can update coin name',
        code: 'update_coin_name_ltc',
        active: true,
        action_id: 'u',
        content_type_id: 8,
        createdAt: date,
        updatedAt: date
      },
      {
        id:228,
        name: 'can delete coin name',
        code: 'delete_coin_name_ltc',
        active: true,
        action_id: 'd',
        content_type_id: 8,
        createdAt: date,
        updatedAt: date
      },
      {
        id:229,
        name: 'can create coin prefix',
        code: 'create_coin_prefix_ltc',
        active: true,
        action_id: 'c',
        content_type_id: 8,
        createdAt: date,
        updatedAt: date
      },
      {
        id:230,
        name: 'can read coin prefix',
        code: 'read_coin_prefix_ltc',
        active: true,
        action_id: 'r',
        content_type_id: 8,
        createdAt: date,
        updatedAt: date
      },
      {
        id:231,
        name: 'can update coin prefix',
        code: 'update_coin_prefix_ltc',
        active: true,
        action_id: 'u',
        content_type_id: 8,
        createdAt: date,
        updatedAt: date
      },
      {
        id:232,
        name: 'can delete coin prefix',
        code: 'delete_coin_prefix_ltc',
        active: true,
        action_id: 'd',
        content_type_id: 8,
        createdAt: date,
        updatedAt: date
      },
      {
        id:233,
        name: 'can create coin code',
        code: 'create_coin_code_ltc',
        active: true,
        action_id: 'c',
        content_type_id: 8,
        createdAt: date,
        updatedAt: date
      },
      {
        id:234,
        name: 'can read coin code',
        code: 'read_coin_code_ltc',
        active: true,
        action_id: 'r',
        content_type_id: 8,
        createdAt: date,
        updatedAt: date
      },
      {
        id:235,
        name: 'can update coin code',
        code: 'update_coin_code_ltc',
        active: true,
        action_id: 'u',
        content_type_id: 8,
        createdAt: date,
        updatedAt: date
      },
      {
        id:236,
        name: 'can delete coin code',
        code: 'delete_coin_code_ltc',
        active: true,
        action_id: 'd',
        content_type_id: 8,
        createdAt: date,
        updatedAt: date
      },
      {
        id:237,
        name: 'can create coin image',
        code: 'create_coin_image_ltc',
        active: true,
        action_id: 'c',
        content_type_id: 8,
        createdAt: date,
        updatedAt: date
      },
      {
        id:238,
        name: 'can read coin image',
        code: 'read_coin_image_ltc',
        active: true,
        action_id: 'r',
        content_type_id: 8,
        createdAt: date,
        updatedAt: date
      },
      {
        id:239,
        name: 'can update coin image',
        code: 'update_coin_image_ltc',
        active: true,
        action_id: 'u',
        content_type_id: 8,
        createdAt: date,
        updatedAt: date
      },
      {
        id:240,
        name: 'can delete coin image',
        code: 'delete_coin_image_ltc',
        active: true,
        action_id: 'd',
        content_type_id: 8,
        createdAt: date,
        updatedAt: date
      },
      {
        id:241,
        name: 'can create coin sell rate',
        code: 'create_coin_sell_rate_ltc',
        active: true,
        action_id: 'c',
        content_type_id: 8,
        createdAt: date,
        updatedAt: date
      },
      {
        id:242,
        name: 'can read coin sell rate',
        code: 'read_coin_sell_rate_ltc',
        active: true,
        action_id: 'r',
        content_type_id: 8,
        createdAt: date,
        updatedAt: date
      },
      {
        id:243,
        name: 'can update coin sell rate',
        code: 'update_coin_sell_rate_ltc',
        active: true,
        action_id: 'u',
        content_type_id: 8,
        createdAt: date,
        updatedAt: date
      },
      {
        id:244,
        name: 'can delete coin sell rate',
        code: 'delete_coin_sell_rate_ltc',
        active: true,
        action_id: 'd',
        content_type_id: 8,
        createdAt: date,
        updatedAt: date
      },
      {
        id:245,
        name: 'can create coin buy rate',
        code: 'create_coin_buy_rate_ltc',
        active: true,
        action_id: 'c',
        content_type_id: 8,
        createdAt: date,
        updatedAt: date
      },
      {
        id:246,
        name: 'can read coin buy rate',
        code: 'read_coin_buy_rate_ltc',
        active: true,
        action_id: 'r',
        content_type_id: 8,
        createdAt: date,
        updatedAt: date
      },
      {
        id:247,
        name: 'can update coin buy rate',
        code: 'update_coin_buy_rate_ltc',
        active: true,
        action_id: 'u',
        content_type_id: 8,
        createdAt: date,
        updatedAt: date
      },
      {
        id:248,
        name: 'can delete coin buy rate',
        code: 'delete_coin_buy_rate_ltc',
        active: true,
        action_id: 'd',
        content_type_id: 8,
        createdAt: date,
        updatedAt: date
      },
      {
        id:249,
        name: 'can create coin payment method',
        code: 'create_coin_payment_method_ltc',
        active: true,
        action_id: 'c',
        content_type_id: 8,
        createdAt: date,
        updatedAt: date
      },
      {
        id:250,
        name: 'can read coin payment method',
        code: 'read_coin_payment_method_ltc',
        active: true,
        action_id: 'r',
        content_type_id: 8,
        createdAt: date,
        updatedAt: date
      },
      {
        id:251,
        name: 'can update coin payment method',
        code: 'update_coin_payment_method_ltc',
        active: true,
        action_id: 'u',
        content_type_id: 8,
        createdAt: date,
        updatedAt: date
      },
      {
        id:252,
        name: 'can delete coin payment method',
        code: 'delete_coin_payment_method_ltc',
        active: true,
        action_id: 'd',
        content_type_id: 8,
        createdAt: date,
        updatedAt: date
      },
      {
        id:253,
        name: 'can create coin active',
        code: 'create_coin_active_ltc',
        active: true,
        action_id: 'c',
        content_type_id: 8,
        createdAt: date,
        updatedAt: date
      },
      {
        id:254,
        name: 'can read coin active',
        code: 'read_coin_active_ltc',
        active: true,
        action_id: 'r',
        content_type_id: 8,
        createdAt: date,
        updatedAt: date
      },
      {
        id:255,
        name: 'can update coin active',
        code: 'update_coin_active_ltc',
        active: true,
        action_id: 'u',
        content_type_id: 8,
        createdAt: date,
        updatedAt: date
      },
      {
        id:256,
        name: 'can delete coin active',
        code: 'delete_coin_active_ltc',
        active: true,
        action_id: 'd',
        content_type_id: 8,
        createdAt: date,
        updatedAt: date
      },
      {
        id:257,
        name: 'can create coin name',
        code: 'create_coin_name_dash',
        active: true,
        action_id: 'c',
        content_type_id: 9,
        createdAt: date,
        updatedAt: date
      },
      {
        id:258,
        name: 'can read coin name',
        code: 'read_coin_name_dash',
        active: true,
        action_id: 'r',
        content_type_id: 9,
        createdAt: date,
        updatedAt: date
      },
      {
        id:259,
        name: 'can update coin name',
        code: 'update_coin_name_dash',
        active: true,
        action_id: 'u',
        content_type_id: 9,
        createdAt: date,
        updatedAt: date
      },
      {
        id:260,
        name: 'can delete coin name',
        code: 'delete_coin_name_dash',
        active: true,
        action_id: 'd',
        content_type_id: 9,
        createdAt: date,
        updatedAt: date
      },
      {
        id:261,
        name: 'can create coin prefix',
        code: 'create_coin_prefix_dash',
        active: true,
        action_id: 'c',
        content_type_id: 9,
        createdAt: date,
        updatedAt: date
      },
      {
        id:262,
        name: 'can read coin prefix',
        code: 'read_coin_prefix_dash',
        active: true,
        action_id: 'r',
        content_type_id: 9,
        createdAt: date,
        updatedAt: date
      },
      {
        id:263,
        name: 'can update coin prefix',
        code: 'update_coin_prefix_dash',
        active: true,
        action_id: 'u',
        content_type_id: 9,
        createdAt: date,
        updatedAt: date
      },
      {
        id:264,
        name: 'can delete coin prefix',
        code: 'delete_coin_prefix_dash',
        active: true,
        action_id: 'd',
        content_type_id: 9,
        createdAt: date,
        updatedAt: date
      },
      {
        id:265,
        name: 'can create coin code',
        code: 'create_coin_code_dash',
        active: true,
        action_id: 'c',
        content_type_id: 9,
        createdAt: date,
        updatedAt: date
      },
      {
        id:266,
        name: 'can read coin code',
        code: 'read_coin_code_dash',
        active: true,
        action_id: 'r',
        content_type_id: 9,
        createdAt: date,
        updatedAt: date
      },
      {
        id:267,
        name: 'can update coin code',
        code: 'update_coin_code_dash',
        active: true,
        action_id: 'u',
        content_type_id: 9,
        createdAt: date,
        updatedAt: date
      },
      {
        id:268,
        name: 'can delete coin code',
        code: 'delete_coin_code_dash',
        active: true,
        action_id: 'd',
        content_type_id: 9,
        createdAt: date,
        updatedAt: date
      },
      {
        id:269,
        name: 'can create coin image',
        code: 'create_coin_image_dash',
        active: true,
        action_id: 'c',
        content_type_id: 9,
        createdAt: date,
        updatedAt: date
      },
      {
        id:270,
        name: 'can read coin image',
        code: 'read_coin_image_dash',
        active: true,
        action_id: 'r',
        content_type_id: 9,
        createdAt: date,
        updatedAt: date
      },
      {
        id:271,
        name: 'can update coin image',
        code: 'update_coin_image_dash',
        active: true,
        action_id: 'u',
        content_type_id: 9,
        createdAt: date,
        updatedAt: date
      },
      {
        id:272,
        name: 'can delete coin image',
        code: 'delete_coin_image_dash',
        active: true,
        action_id: 'd',
        content_type_id: 9,
        createdAt: date,
        updatedAt: date
      },
      {
        id:273,
        name: 'can create coin sell rate',
        code: 'create_coin_sell_rate_dash',
        active: true,
        action_id: 'c',
        content_type_id: 9,
        createdAt: date,
        updatedAt: date
      },
      {
        id:274,
        name: 'can read coin sell rate',
        code: 'read_coin_sell_rate_dash',
        active: true,
        action_id: 'r',
        content_type_id: 9,
        createdAt: date,
        updatedAt: date
      },
      {
        id:275,
        name: 'can update coin sell rate',
        code: 'update_coin_sell_rate_dash',
        active: true,
        action_id: 'u',
        content_type_id: 9,
        createdAt: date,
        updatedAt: date
      },
      {
        id:276,
        name: 'can delete coin sell rate',
        code: 'delete_coin_sell_rate_dash',
        active: true,
        action_id: 'd',
        content_type_id: 9,
        createdAt: date,
        updatedAt: date
      },
      {
        id:277,
        name: 'can create coin buy rate',
        code: 'create_coin_buy_rate_dash',
        active: true,
        action_id: 'c',
        content_type_id: 9,
        createdAt: date,
        updatedAt: date
      },
      {
        id:278,
        name: 'can read coin buy rate',
        code: 'read_coin_buy_rate_dash',
        active: true,
        action_id: 'r',
        content_type_id: 9,
        createdAt: date,
        updatedAt: date
      },
      {
        id:279,
        name: 'can update coin buy rate',
        code: 'update_coin_buy_rate_dash',
        active: true,
        action_id: 'u',
        content_type_id: 9,
        createdAt: date,
        updatedAt: date
      },
      {
        id:280,
        name: 'can delete coin buy rate',
        code: 'delete_coin_buy_rate_dash',
        active: true,
        action_id: 'd',
        content_type_id: 9,
        createdAt: date,
        updatedAt: date
      },
      {
        id:281,
        name: 'can create coin payment method',
        code: 'create_coin_payment_method_dash',
        active: true,
        action_id: 'c',
        content_type_id: 9,
        createdAt: date,
        updatedAt: date
      },
      {
        id:282,
        name: 'can read coin payment method',
        code: 'read_coin_payment_method_dash',
        active: true,
        action_id: 'r',
        content_type_id: 9,
        createdAt: date,
        updatedAt: date
      },
      {
        id:283,
        name: 'can update coin payment method',
        code: 'update_coin_payment_method_dash',
        active: true,
        action_id: 'u',
        content_type_id: 9,
        createdAt: date,
        updatedAt: date
      },
      {
        id:284,
        name: 'can delete coin payment method',
        code: 'delete_coin_payment_method_dash',
        active: true,
        action_id: 'd',
        content_type_id: 9,
        createdAt: date,
        updatedAt: date
      },
      {
        id:285,
        name: 'can create coin active',
        code: 'create_coin_active_dash',
        active: true,
        action_id: 'c',
        content_type_id: 9,
        createdAt: date,
        updatedAt: date
      },
      {
        id:286,
        name: 'can read coin active',
        code: 'read_coin_active_dash',
        active: true,
        action_id: 'r',
        content_type_id: 9,
        createdAt: date,
        updatedAt: date
      },
      {
        id:287,
        name: 'can update coin active',
        code: 'update_coin_active_dash',
        active: true,
        action_id: 'u',
        content_type_id: 9,
        createdAt: date,
        updatedAt: date
      },
      {
        id:288,
        name: 'can delete coin active',
        code: 'delete_coin_active_dash',
        active: true,
        action_id: 'd',
        content_type_id: 9,
        createdAt: date,
        updatedAt: date
      },
      {
        id:289,
        name: 'can create coin name',
        code: 'create_coin_name_ptr',
        active: true,
        action_id: 'c',
        content_type_id: 10,
        createdAt: date,
        updatedAt: date
      },
      {
        id:290,
        name: 'can read coin name',
        code: 'read_coin_name_ptr',
        active: true,
        action_id: 'r',
        content_type_id: 10,
        createdAt: date,
        updatedAt: date
      },
      {
        id:291,
        name: 'can update coin name',
        code: 'update_coin_name_ptr',
        active: true,
        action_id: 'u',
        content_type_id: 10,
        createdAt: date,
        updatedAt: date
      },
      {
        id:292,
        name: 'can delete coin name',
        code: 'delete_coin_name_ptr',
        active: true,
        action_id: 'd',
        content_type_id: 10,
        createdAt: date,
        updatedAt: date
      },
      {
        id:293,
        name: 'can create coin prefix',
        code: 'create_coin_prefix_ptr',
        active: true,
        action_id: 'c',
        content_type_id: 10,
        createdAt: date,
        updatedAt: date
      },
      {
        id:294,
        name: 'can read coin prefix',
        code: 'read_coin_prefix_ptr',
        active: true,
        action_id: 'r',
        content_type_id: 10,
        createdAt: date,
        updatedAt: date
      },
      {
        id:295,
        name: 'can update coin prefix',
        code: 'update_coin_prefix_ptr',
        active: true,
        action_id: 'u',
        content_type_id: 10,
        createdAt: date,
        updatedAt: date
      },
      {
        id:296,
        name: 'can delete coin prefix',
        code: 'delete_coin_prefix_ptr',
        active: true,
        action_id: 'd',
        content_type_id: 10,
        createdAt: date,
        updatedAt: date
      },
      {
        id:297,
        name: 'can create coin code',
        code: 'create_coin_code_ptr',
        active: true,
        action_id: 'c',
        content_type_id: 10,
        createdAt: date,
        updatedAt: date
      },
      {
        id:298,
        name: 'can read coin code',
        code: 'read_coin_code_ptr',
        active: true,
        action_id: 'r',
        content_type_id: 10,
        createdAt: date,
        updatedAt: date
      },
      {
        id:299,
        name: 'can update coin code',
        code: 'update_coin_code_ptr',
        active: true,
        action_id: 'u',
        content_type_id: 10,
        createdAt: date,
        updatedAt: date
      },
      {
        id:300,
        name: 'can delete coin code',
        code: 'delete_coin_code_ptr',
        active: true,
        action_id: 'd',
        content_type_id: 10,
        createdAt: date,
        updatedAt: date
      },
      {
        id:301,
        name: 'can create coin image',
        code: 'create_coin_image_ptr',
        active: true,
        action_id: 'c',
        content_type_id: 10,
        createdAt: date,
        updatedAt: date
      },
      {
        id:302,
        name: 'can read coin image',
        code: 'read_coin_image_ptr',
        active: true,
        action_id: 'r',
        content_type_id: 10,
        createdAt: date,
        updatedAt: date
      },
      {
        id:303,
        name: 'can update coin image',
        code: 'update_coin_image_ptr',
        active: true,
        action_id: 'u',
        content_type_id: 10,
        createdAt: date,
        updatedAt: date
      },
      {
        id:304,
        name: 'can delete coin image',
        code: 'delete_coin_image_ptr',
        active: true,
        action_id: 'd',
        content_type_id: 10,
        createdAt: date,
        updatedAt: date
      },
      {
        id:305,
        name: 'can create coin sell rate',
        code: 'create_coin_sell_rate_ptr',
        active: true,
        action_id: 'c',
        content_type_id: 10,
        createdAt: date,
        updatedAt: date
      },
      {
        id:306,
        name: 'can read coin sell rate',
        code: 'read_coin_sell_rate_ptr',
        active: true,
        action_id: 'r',
        content_type_id: 10,
        createdAt: date,
        updatedAt: date
      },
      {
        id:307,
        name: 'can update coin sell rate',
        code: 'update_coin_sell_rate_ptr',
        active: true,
        action_id: 'u',
        content_type_id: 10,
        createdAt: date,
        updatedAt: date
      },
      {
        id:308,
        name: 'can delete coin sell rate',
        code: 'delete_coin_sell_rate_ptr',
        active: true,
        action_id: 'd',
        content_type_id: 10,
        createdAt: date,
        updatedAt: date
      },
      {
        id:309,
        name: 'can create coin buy rate',
        code: 'create_coin_buy_rate_ptr',
        active: true,
        action_id: 'c',
        content_type_id: 10,
        createdAt: date,
        updatedAt: date
      },
      {
        id:310,
        name: 'can read coin buy rate',
        code: 'read_coin_buy_rate_ptr',
        active: true,
        action_id: 'r',
        content_type_id: 10,
        createdAt: date,
        updatedAt: date
      },
      {
        id:311,
        name: 'can update coin buy rate',
        code: 'update_coin_buy_rate_ptr',
        active: true,
        action_id: 'u',
        content_type_id: 10,
        createdAt: date,
        updatedAt: date
      },
      {
        id:312,
        name: 'can delete coin buy rate',
        code: 'delete_coin_buy_rate_ptr',
        active: true,
        action_id: 'd',
        content_type_id: 10,
        createdAt: date,
        updatedAt: date
      },
      {
        id:313,
        name: 'can create coin payment method',
        code: 'create_coin_payment_method_ptr',
        active: true,
        action_id: 'c',
        content_type_id: 10,
        createdAt: date,
        updatedAt: date
      },
      {
        id:314,
        name: 'can read coin payment method',
        code: 'read_coin_payment_method_ptr',
        active: true,
        action_id: 'r',
        content_type_id: 10,
        createdAt: date,
        updatedAt: date
      },
      {
        id:315,
        name: 'can update coin payment method',
        code: 'update_coin_payment_method_ptr',
        active: true,
        action_id: 'u',
        content_type_id: 10,
        createdAt: date,
        updatedAt: date
      },
      {
        id:316,
        name: 'can delete coin payment method',
        code: 'delete_coin_payment_method_ptr',
        active: true,
        action_id: 'd',
        content_type_id: 10,
        createdAt: date,
        updatedAt: date
      },
      {
        id:317,
        name: 'can create coin active',
        code: 'create_coin_active_ptr',
        active: true,
        action_id: 'c',
        content_type_id: 10,
        createdAt: date,
        updatedAt: date
      },
      {
        id:318,
        name: 'can read coin active',
        code: 'read_coin_active_ptr',
        active: true,
        action_id: 'r',
        content_type_id: 10,
        createdAt: date,
        updatedAt: date
      },
      {
        id:319,
        name: 'can update coin active',
        code: 'update_coin_active_ptr',
        active: true,
        action_id: 'u',
        content_type_id: 10,
        createdAt: date,
        updatedAt: date
      },
      {
        id:320,
        name: 'can delete coin active',
        code: 'delete_coin_active_ptr',
        active: true,
        action_id: 'd',
        content_type_id: 10,
        createdAt: date,
        updatedAt: date
      },
      {
        id:321,
        name: 'can create payment method name',
        code: 'create_payment_method_name',
        active: true,
        action_id: 'c',
        content_type_id: 11,
        createdAt: date,
        updatedAt: date
      },
      {
        id:322,
        name: 'can read payment method name',
        code: 'read_payment_method_name',
        active: true,
        action_id: 'r',
        content_type_id: 11,
        createdAt: date,
        updatedAt: date
      },
      {
        id:323,
        name: 'can update payment method name',
        code: 'update_payment_method_name',
        active: true,
        action_id: 'u',
        content_type_id: 11,
        createdAt: date,
        updatedAt: date
      },
      {
        id:324,
        name: 'can delete payment method name',
        code: 'delete_payment_method_name',
        active: true,
        action_id: 'd',
        content_type_id: 11,
        createdAt: date,
        updatedAt: date
      },
      {
        id:325,
        name: 'can create payment method active',
        code: 'create_payment_method_active',
        active: true,
        action_id: 'c',
        content_type_id: 11,
        createdAt: date,
        updatedAt: date
      },
      
      {
        id:326,
        name: 'can read payment method active',
        code: 'read_payment_method_active',
        active: true,
        action_id: 'r',
        content_type_id: 11,
        createdAt: date,
        updatedAt: date
      },
      {
        id:327,
        name: 'can update payment method active',
        code: 'update_payment_method_active',
        active: true,
        action_id: 'u',
        content_type_id: 11,
        createdAt: date,
        updatedAt: date
      },
      {
        id:328,
        name: 'can delete payment method active',
        code: 'delete_payment_method_active',
        active: true,
        action_id: 'd',
        content_type_id: 11,
        createdAt: date,
        updatedAt: date
      },
 

  // Permisos de User
      {
        id:329,
        name: 'can create user name',
        code: 'create_user_name',
        active: true,
        action_id: 'c',
        content_type_id: 12,
        createdAt: date,
        updatedAt: date
      },
      {
        id:330,
        name: 'can read user name',
        code: 'read_user_name',
        active: true,
        action_id: 'r',
        content_type_id: 12,
        createdAt: date,
        updatedAt: date
      },
      {
        id:331,
        name: 'can update user name',
        code: 'read_update_name',
        active: true,
        action_id: 'u',
        content_type_id: 12,
        createdAt: date,
        updatedAt: date
      },
      {
        id:332,
        name: 'can delete user name',
        code: 'read_delete_name',
        active: true,
        action_id: 'd',
        content_type_id: 12,
        createdAt: date,
        updatedAt: date
      },
      {
        id:333,
        name: 'can create user password',
        code: 'create_user_password',
        active: true,
        action_id: 'c',
        content_type_id: 12,
        createdAt: date,
        updatedAt: date
      },
      {
        id:334,
        name: 'can read user password',
        code: 'read_user_password',
        active: true,
        action_id: 'r',
        content_type_id: 12,
        createdAt: date,
        updatedAt: date
      },
      {
        id:335,
        name: 'can update user password',
        code: 'read_update_password',
        active: true,
        action_id: 'u',
        content_type_id: 12,
        createdAt: date,
        updatedAt: date
      },
      {
        id:336,
        name: 'can delete user password',
        code: 'read_delete_password',
        active: true,
        action_id: 'd',
        content_type_id: 12,
        createdAt: date,
        updatedAt: date
      },
      {
        id:337,
        name: 'can create user role_id',
        code: 'create_user_role_id',
        active: true,
        action_id: 'c',
        content_type_id: 12,
        createdAt: date,
        updatedAt: date
      },
      {
        id:338,
        name: 'can read user role_id',
        code: 'read_user_role_id',
        active: true,
        action_id: 'r',
        content_type_id: 12,
        createdAt: date,
        updatedAt: date
      },
      {
        id:339,
        name: 'can update user role_id',
        code: 'read_update_role_id',
        active: true,
        action_id: 'u',
        content_type_id: 12,
        createdAt: date,
        updatedAt: date
      },
      {
        id:340,
        name: 'can delete user role_id',
        code: 'read_delete_role_id',
        active: true,
        action_id: 'd',
        content_type_id: 12,
        createdAt: date,
        updatedAt: date
      },
      {
        id:341,
        name: 'can create user tier',
        code: 'create_user_tier',
        active: true,
        action_id: 'c',
        content_type_id: 12,
        createdAt: date,
        updatedAt: date
      },
      {
        id:342,
        name: 'can read user tier',
        code: 'read_user_tier',
        active: true,
        action_id: 'r',
        content_type_id: 12,
        createdAt: date,
        updatedAt: date
      },
      {
        id:343,
        name: 'can update user tier',
        code: 'read_update_tier',
        active: true,
        action_id: 'u',
        content_type_id: 12,
        createdAt: date,
        updatedAt: date
      },
      {
        id:344,
        name: 'can delete user tier',
        code: 'read_delete_tier',
        active: true,
        action_id: 'd',
        content_type_id: 12,
        createdAt: date,
        updatedAt: date
      },
      {
        id:345,
        name: 'can create user auth_id',
        code: 'create_user_auth_id',
        active: true,
        action_id: 'c',
        content_type_id: 12,
        createdAt: date,
        updatedAt: date
      },
      {
        id:346,
        name: 'can read user auth_id',
        code: 'read_user_auth_id',
        active: true,
        action_id: 'r',
        content_type_id: 12,
        createdAt: date,
        updatedAt: date
      },
      {
        id:347,
        name: 'can update user auth_id',
        code: 'read_update_auth_id',
        active: true,
        action_id: 'u',
        content_type_id: 12,
        createdAt: date,
        updatedAt: date
      },
      {
        id:348,
        name: 'can delete user auth_id',
        code: 'read_delete_auth_id',
        active: true,
        action_id: 'd',
        content_type_id: 12,
        createdAt: date,
        updatedAt: date
      },
      {
        id:349,
        name: 'can create user uu_id',
        code: 'create_user_uu_id',
        active: true,
        action_id: 'c',
        content_type_id: 12,
        createdAt: date,
        updatedAt: date
      },
      {
        id:350,
        name: 'can read user uu_id',
        code: 'read_user_uu_id',
        active: true,
        action_id: 'r',
        content_type_id: 12,
        createdAt: date,
        updatedAt: date
      },
      {
        id:351,
        name: 'can update user uu_id',
        code: 'read_update_uu_id',
        active: true,
        action_id: 'u',
        content_type_id: 12,
        createdAt: date,
        updatedAt: date
      },
      {
        id:352,
        name: 'can delete user uu_id',
        code: 'read_delete_uu_id',
        active: true,
        action_id: 'd',
        content_type_id: 12,
        createdAt: date,
        updatedAt: date
      },
      {
        id:353,
        name: 'can create user active',
        code: 'create_user_active',
        active: true,
        action_id: 'c',
        content_type_id: 12,
        createdAt: date,
        updatedAt: date
      },
      {
        id:354,
        name: 'can read user active',
        code: 'read_user_active',
        active: true,
        action_id: 'r',
        content_type_id: 12,
        createdAt: date,
        updatedAt: date
      },
      {
        id:355,
        name: 'can update user active',
        code: 'read_update_active',
        active: true,
        action_id: 'u',
        content_type_id: 12,
        createdAt: date,
        updatedAt: date
      },
      {
        id:356,
        name: 'can delete user active',
        code: 'read_delete_active',
        active: true,
        action_id: 'd',
        content_type_id: 12,
        createdAt: date,
        updatedAt: date
      },
      {
        id:357,
        name: 'can create user status_id',
        code: 'create_user_status_id',
        active: true,
        action_id: 'c',
        content_type_id: 12,
        createdAt: date,
        updatedAt: date
      },
      {
        id:358,
        name: 'can read user status_id',
        code: 'read_user_status_id',
        active: true,
        action_id: 'r',
        content_type_id: 12,
        createdAt: date,
        updatedAt: date
      },
      {
        id:359,
        name: 'can update user status_id',
        code: 'read_update_status_id',
        active: true,
        action_id: 'u',
        content_type_id: 12,
        createdAt: date,
        updatedAt: date
      },
      {
        id:360,
        name: 'can delete user status_id',
        code: 'read_delete_status_id',
        active: true,
        action_id: 'd',
        content_type_id: 12,
        createdAt: date,
        updatedAt: date
      },
      {
        id:361,
        name: 'can create user last_login',
        code: 'create_user_last_login',
        active: true,
        action_id: 'c',
        content_type_id: 12,
        createdAt: date,
        updatedAt: date
      },
      {
        id:362,
        name: 'can read user last_login',
        code: 'read_user_last_login',
        active: true,
        action_id: 'r',
        content_type_id: 12,
        createdAt: date,
        updatedAt: date
      },
      {
        id:363,
        name: 'can update user last_login',
        code: 'read_update_last_login',
        active: true,
        action_id: 'u',
        content_type_id: 12,
        createdAt: date,
        updatedAt: date
      },
      {
        id:364,
        name: 'can delete user last_login',
        code: 'read_delete_last_login',
        active: true,
        action_id: 'd',
        content_type_id: 12,
        createdAt: date,
        updatedAt: date
      },









      
];
    

    csvPermissions.writeRecords(records_permissions).then(() => {
      console.log("Se ha creado exitosamente la tabla Permission");
    });

    //console.log(`------------------------------------------------------`);
    return true;
  } catch (e) {
    console.log("Error ejecutando La Tabla Permission Formato CSV", e);
  }
}

// Exportamos los modelos
module.exports = {
    runTablePermissions,
};
