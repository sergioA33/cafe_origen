diccionario de datos:

 id: number, numero que identifica cada venta
 fecha: string, fecha en que se hizo la venta
 cliente: string, codigo del cliente
 producto: string, nombre del producto
 ciudad: string, ciudad donde se hizo la venta
 cantidad: number, cantidad de productos vendidos
 precio: number, precio del producto

-----caso de bordes-----

En el registro 5 la ciudad aparece como medellin en minuscula. Mi decision es corregirla mas adelante para que todas las ciudades tengan el mismo formato.

En el registro 8 la cantidad aparece en 0. Mi decision es revisar ese dato porque no hubo productos vendidos.

Algunos clientes aparecen varias veces, como C01 y C02. Mi decision es dejar esos datos porque un mismo cliente puede comprar varias veces.

-----------//---------