
------mini reto 1 -----
diccionario de datos:

 id: number, numero que identifica cada venta
 fecha: string, fecha en que se hizo la venta
 cliente: string, codigo del cliente
 producto: string, nombre del producto
 ciudad: string, ciudad donde se hizo la venta
 cantidad: number, cantidad de productos vendidos
 precio: number, precio del producto

-----caso de bordes-----

En el registro 5 la ciudad aparece como medellin en minuscula. 
Mi decision es corregirla mas adelante para que todas las ciudades
tengan el mismo formato.

En el registro 8 la cantidad aparece en 0. Mi decision es revisar
ese dato porque no hubo productos vendidos.

Algunos clientes aparecen varias veces, como C01 y C02. Mi decision es
dejar esos datos porque un mismo cliente puede comprar varias veces.

---------mini reto 2--------
 plan de trabajo

patrones y resultado

totalVendido(ventas):
-patron usado: acumulador y filtro.
-resultado con todas las ventas: 985000.
-resultado con una venta: 84000.
-resultado con arreglo vacio: 0.

totalUnidades(ventas):
patron usado: acumulador y filtro.
-resultado con todas las ventas: 21.
-resultado con una venta: 2.
-resultado con arreglo vacio: 0.

ventaMayorValor(ventas):
patron usado: maximo y filtro.
-resultado con todas las ventas: 168000, id 10.
-resultado con una venta: 84000, id 1.
-resultado con arreglo vacio: null.

ventasDeCiudad(ventas, ciudad):
patron usado: filtro manual y comparacion de texto.
-resultado con medellin: 4 registros.
-resultado con una venta: devuelve esa venta si -pertenece a la ciudad buscada.
-resultado con arreglo vacio: [].

promedioPorVenta(ventas):
patron usado: acumulador y contador.
resultado con todas las ventas: 89545.45.
resultado con una venta: 84000.
resultado con arreglo vacio: 0.
trazas manuales

total vendido:
-se sumaron los valores de las 12 ventas.
-resultado final: 985000.

promedio por venta:
-se sumaron las ventas validas: 985000.
-se contaron 11 ventas validas.
-operacion: 985000 / 11.
-resultado final: 89545.45.

--------mini reto 3----

