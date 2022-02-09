 
* Creamos la carpeta 
```
mkdir tables-postgres
```

</br>

* nos ubicamos en la carpeta e inicializamos npm
```
cd tables-postgres
```
```
npm init -y
```

</br>

* instalamos dependencias del ORM de node sequelize y dependencias de postgres

```
npm i --save sequelize sequelize-cli pg pg-hstore postgres
```

</br>

Para ver la ayuda de sequelize

```
npx sequelize --help
```

</br>

* Inicializamos nuestro proyecto en sequelize

```
npx sequelize init
```

Esto crea la carpeta config, donde esta la conexion a postgres

</br>

```
npx sequelize model-generate --help
```

</br>

* Veamos la ayuda para generar un modelo para una tabla

```
npx sequelize model:generate --help
```

</br>

* Creamos un modelo


```
npx sequelize model:generate --name nombre_de_la_tabla --attributes name:STRING,email:STRING
``` 


******  Para hacer la migracion

npx sequelize db:migrate




</br>

Los archivos relacionados con esto es la carpeta config, carpeta migrations, models.  
Siguientdo este tutorial se pueden levantar las migraciones usando sequelize  

mas informacion : https://www.youtube.com/watch?v=60wglb8OZRQ&t=761s

</br>
