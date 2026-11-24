

const { ventas } = require("./datos");
const {
    totalVendido,
    totalUnidades,
    ventaMayorValor,
    ventasDeCiudad,
    promedioPorVenta
} = require("./analitica");

console.log("total vendido:");
console.log(totalVendido(ventas));

console.log("unidades vendidas:");
console.log(totalUnidades(ventas));

console.log("venta mayor:");
console.log(ventaMayorValor(ventas));

console.log("ventas de medellin:");
console.table(ventasDeCiudad(ventas, "Medellín"));

console.log("promedio por venta:");
console.log(promedioPorVenta(ventas));

console.log("pruebas con una venta:");
console.log(totalVendido([ventas[0]]));
console.log(totalUnidades([ventas[0]]));
console.log(ventaMayorValor([ventas[0]]));
console.log(promedioPorVenta([ventas[0]]));

console.log("pruebas con arreglo vacio:");
console.log(totalVendido([]));
console.log(totalUnidades([]));
console.log(ventaMayorValor([]));
console.log(ventasDeCiudad([], "Medellín"));
console.log(promedioPorVenta([]));

const {
    ventasValidas,
    resumenVentas,
    totalPorCiudad,
    unidadesPorProducto,
    topProductosPorValor
} = require("./analitica");

console.log("ventas validas:");
console.table(ventasValidas(ventas));

console.log("resumen de ventas:");
console.table(resumenVentas(ventas));

console.log("total por ciudad:");
console.log(totalPorCiudad(ventas));

console.log("unidades por producto:");
console.log(unidadesPorProducto(ventas));

console.log("top 3 productos:");
console.log(topProductosPorValor(ventas, 3));
