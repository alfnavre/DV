# DV

1. Abrir el controlador del sistema "cmd".


2. Acceder a la ruta "~/DV-fuente/DV-fuente" e instalar la librería "d3" con el comando "npm install d3", "npm install express moment socket.io" y "npm init -y".



3. Tras la instalación de las librerías anteriores, acceder a la ruta "~/DV-fuente/DV-fuente/server" y lanzar el comando "node index.js".



4. Comprobar que se ha lanzado el servidor en el "localhost:3000/api/market".



5. Abrir otra ventana del "cmd" y entrar en la ruta "~/DV-fuente/DV-fuente/angular-d3" y lanzar el comando "ng serve --o".



6. Comprobar que las gráficas funcionan en el "localhost:4200".


Hemos representado 3 gráficas, 

 - La primera de ellas tiene el servidor montado, contendrá los datos de un mercado virtual, que se irán actualizando. Mostrando los datos  en tiempo real, actualizándolos cada 5 segundos.
 
 - La segunda el STACKED-BAR-CHART mostramos los datos de distribución de la población en USA en cada uno de los estados en función de la cohorte de edad.
 
 - La tercera el BAR-CHART mostramos los datos de ventas de 5 personas a través de un diagrama de barras.

