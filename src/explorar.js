
const { ventas } = require("./datos");

console.log("cantidad de registros:", ventas.length);

console.log("primer registro:");
console.log(ventas[0]);

console.log("ultimo registro:");
console.log(ventas[ventas.length - 1]);

console.log("producto de la posicion 4:");
console.log(ventas[4].producto);

console.log("tabla completa:");
console.table(ventas);
