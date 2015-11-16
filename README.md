# Productos-Heroku-IV
App para almacenar productos

## Tutorial
Se debe usar "npm install" para instalar las dependencias.

Se abre con "npm start", y se puede comprobar en la direccion en local: http://localhost:5000/ .

Para añadir productos por ejemplo utilizamos este comando:
```
curl -X PUT http://127.0.0.1:5000/producto/Pollo/5/carne
```

Y ahora en la dirección http://localhost:5000/productos podemos ver los productos añadidos.

Si queremos buscar un producto en común podemos hacer ésto:
http://localhost:5000/producto/Pollo

Si no se encuentra en la base de datos, se indicará el error.
