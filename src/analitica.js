
function valorVenta(venta) {
    return venta.cantidad * venta.precio;
}

function totalVendido(ventas) {
    let total = 0;

    for (const venta of ventas) {
        if (venta.cantidad > 0) {
            total = total + valorVenta(venta);
        }
    }

    return total;
}

function totalUnidades(ventas) {
    let unidades = 0;

    for (const venta of ventas) {
        if (venta.cantidad > 0) {
            unidades = unidades + venta.cantidad;
        }
    }

    return unidades;
}

function ventaMayorValor(ventas) {
    let mayor = null;

    for (const venta of ventas) {
        if (venta.cantidad > 0) {
            if (mayor === null || valorVenta(venta) > valorVenta(mayor)) {
                mayor = venta;
            }
        }
    }

    return mayor;
}

function ventasDeCiudad(ventas, ciudad) {
    let resultado = [];

    for (const venta of ventas) {
        if (
            venta.cantidad > 0 &&
            venta.ciudad.trim().toLowerCase() === ciudad.trim().toLowerCase()
        ) {
            resultado.push(venta);
        }
    }

    return resultado;
}

function promedioPorVenta(ventas) {
    let total = 0;
    let contador = 0;

    for (const venta of ventas) {
        if (venta.cantidad > 0) {
            total = total + valorVenta(venta);
            contador = contador + 1;
        }
    }

    if (contador === 0) {
        return 0;
    }

    return total / contador;
}

module.exports = {
    valorVenta,
    totalVendido,
    totalUnidades,
    ventaMayorValor,
    ventasDeCiudad,
    promedioPorVenta
};
