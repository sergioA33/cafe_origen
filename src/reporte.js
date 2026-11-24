const { ventas } = require("./datos");

const {
    ventasValidas,
    resumenVentas,
    totalPorCiudad,
    unidadesPorProducto,
    topProductosPorValor
} = require("./analitica");

console.log("REPORTE DE CAFE ORIGEN");

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

console.log("cantidad de ventas originales:");
console.log(ventas.length);

console.log("prueba de inmutabilidad:");

if (ventas.length === 12) {
    console.log("cantidad de ventas: OK");
} else {
 console.log("cantidad de ventas: DIFERENTE");
}
console.table(ventas);
console.log("total de ventas originales:", ventas.length);