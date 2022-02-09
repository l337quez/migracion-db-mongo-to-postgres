// By: Ing. Ronal Forero
 
### Dependencias:

mongoose     --------->      (interprete de mongo).  
csv-writer  --------->     (libreria para crear csv)  
fast-csv   --------->      (libreria para llevar data de csv a postgre)

</br>

npm install --save pg pg-hstore mongoose csv-writer sequelize sequelize-cli  
npm install fast-csv    

</br>

### Requerimientos:

Mongo debe tener importada la base de datos core_db, en tal caso que la base de datos tenga otro nombre debes asignarle el nombre a la constante db_name.

</br>

haga "npm install" para que instale todas las librerias y node modules

</br>

### Folders

* csv_files_and_csv_to_postgre:  donde se guardan todos los archivos csv generados con la data extraida de mongo
* models_for_mongoose:  Modelos que he creado para hacer la migracion. Estos modelos es para trabajar con mongoose
* creating_tables_csv: Los archivos dentro de esta carpetas son los encargados de crear la tabla y llenarla con sus datos respectivos


</br>



### Mas informacion
Los archivos migration, ejemplo: migrationUser.js son los encargados en llevar los datos del archivo csv a la tabla postgre. Los archivos table, ejemplo: tableCoins, son encargados en crear el archivo csv y llenarlo.


</br>

### Como iniciar la migracion de Mongo a CSV
El archivo principal es migration_mongo_to_postgre, porque tiene la conexion con mongoose y con las otras librerias, desde aqui se llaman a los otros archivos.

Para ejecutar el script para guardar la data en los archivos csv
```
npm run migration-mongo
```
o tambien se puede con este comando
```
node migrations_Mongo_to_csv.js
```

</br>

### Eliminar data de tablas de postgres

Si es necesario eliminar la data que esta en postgre, ejecutar este script. Hayq que tener en cuenta
que todas la data se elimina y cuando se vuelve a llenar los id no comienzan en cero, sino que siguen
donde habia quedado en adelante
```
node DeleteDataPostgre.js
```
```
npm run clean-tables
```

</br>

### Como iniciar la migracion de CSV a Postgress

Para llevar la data de los archivos CSV a Postgre ejecuatar este script
```
npm run migration-psql
```
o tambien se puede con este comando
```
node migrations_CSV_to_postgre.js
```
</br>

</br>


### Levantar Migraciones

Ejecutando el siguiente script se levantaran todas las tablas
```
node migrations_CSV_to_postgre.js
```

### Levantar las tablas con Sequelize
```
npx sequelize db:migrate
```

### Testeo de la base de datos.

El folder testing_migrations_db   es independiente, tiene su packege Json. Todo lo relacionado al testeo esta dentro. Se uso el ORM typescript
