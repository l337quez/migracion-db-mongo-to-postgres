## Como ejecutar el proyecto
Documentacion por: Ronal Forero

</br>

Debemos instalar las dependencias, para eso ejecutamos
```
npm install
```

</br>

## Ejecutar el proyecto de testeo
El archivo principal es el index, con el siguiente comando ejecutaremos ese archivo. Esto es para usar los testers.
```
npm start
```

</br>


## Ejecutar las migraciones y levantar la base de datos postgres
con typeorm podemos generar multiples migraciones, por cada migracion va generar un archivo, a cada
migracion le podemos poner un nombre, con el flag -n le asignamos el nombre

```
npx ts-node ./node_modules/typeorm/cli.js migration:generate -n core_db
```

</br>

### Para generar la migracion 
para geenerar las queries se usa esto. Es importante indicar cual conexion se va usar con el flag -c
```
npx ts-node ./node_modules/typeorm/cli.js migration:run -c dbPsql
```

</br>

### Para correr la migracion creada
 este comando va a levantar la tabla de la ultima migracion que se haya creado
```
npx ts-node ./node_modules/typeorm/cli.js migration:run
```

#####################################################################################

## Otra informacion

</br>


### Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `ormconfig.json` file
3. Run `npm start` command

</br>

Note: you need file ormconfig.json, this file  dont load in repository, because it contains keys
Note: typeorm does not support version 4 or higher of monfodb 

</br>

### Inicializamos el proyecto asi para typeorm
```
npx typeorm init --name testing_migrations_db --database postgres
```


</br>

En la carpeta testing_migrations_and_up_db estan las migraciones de la base de datos, que las
usaremos para levantar las tablas en postgress y tambien tenemos una comunicacion dual de base de datos tanto para mongo como postregres para testear la migracion de la base de datos de Mongo a postgres.

</br>

instalamos dependencias:
Si bien en el comando anterior agregamos a postgres, ahora debemos agregar a mongo. Entonces npm install para que se instales las dependencias del package.json
```
npm install
```

</br>


## Luego instalamos el driver de Mongo
Nota: typeORM no soporta mongo version 4
```
npm install mongodb
```

</br>



