# Challenge MercadoLibre FrontEnd
## Descripción
Para completar el Test práctico del area de FrontEnd utilicé Next.js, React, SCSS y axios. 
El proyecto fue creado utilizando la herramienta [create-next-app](https://nextjs.org/docs/api-reference/create-next-app)
 
Para los endpoints necesarios, utilicé la facilidad que brinda Nextjs de crear endpoint dentro de un directorio especial, estos  archivos dentro del directorio /pages/api funcionan como controllers. 
## Pantallas

Los archivos respectivos de cada pagina se encuentra en el directorio /pages:
Los paths en la aplicacion responden a lo solicitado

 - pages/index.js => Caja de Búsqueda
 - pages/items.js => Resultados de busqueda
 - pages/items/[id].js =>Detalle del producto

## Endpoint APIs
Los archivos respectivos a casa endpoint se encuentran en el directorio /pages/api.
Los paths en la aplicacion responden a lo solicitado

 - pages/api/items.js => Listado de items segun la query
 - pages/api/items/[id].js => Obtiene los datos de un producto + descripcion + breadcrum de categorias

 
Se puede encontrar deployado en Vercel en la siguiente URL: [Challenge MELI](https://meli-fe-sooty.vercel.app/)

## Instalación
 1. Clonar proyecto
 2.  ejecutar `cd meli-fe`
 3. ejecutar `npm install`
    

## Ejecución
 
### Modo Desarrollo
En el directorio raiz ejecutar
   
     npm run dev
   
 ### Modo Produccion
 1. En el directorio raiz ejecutar

     npm run build

     npm run start

 2. Acceder a http://localhost:3000


