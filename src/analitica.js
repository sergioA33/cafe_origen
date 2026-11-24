
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

function ventasValidas(ventas) {
    return ventas.filter(venta => venta.cantidad > 0);
}
function resumenVentas(ventas) {
    let validas = ventasValidas(ventas);

    return validas.map(venta => ({
        id: venta.id,
        producto: venta.producto,
        ciudad: venta.ciudad.trim().toLowerCase(),
        total: venta.cantidad * venta.precio
    }));
}
function totalPorCiudad(ventas) {
    return ventasValidas(ventas).reduce((totales, venta) => {
        let ciudad = venta.ciudad.trim().toLowerCase();

        if (totales[ciudad] === undefined) {
            totales[ciudad] = 0;
        }

        totales[ciudad] += venta.cantidad * venta.precio;

        return totales;
    }, {});
}

function unidadesPorProducto(ventas) {
    return ventasValidas(ventas).reduce((unidades, venta) => {
        let producto = venta.producto;

        if (unidades[producto] === undefined) {
            unidades[producto] = 0;
        }

        unidades[producto] += venta.cantidad;

        return unidades;
    }, {});
}

function topProductosPorValor(ventas, k) {
    let totales = ventasValidas(ventas).reduce((resultado, venta) => {
        let producto = venta.producto;

        if (resultado[producto] === undefined) {
            resultado[producto] = 0;
        }

        resultado[producto] += venta.cantidad * venta.precio;

        return resultado;
    }, {});

    let productos = [...Object.entries(totales)];

    productos.sort((a, b) => b[1] - a[1]);

    return productos.slice(0, k).map(producto => producto[0]);
}


module.exports = {
    valorVenta,
    totalVendido,
    totalUnidades,
    ventaMayorValor,
    ventasDeCiudad,
    promedioPorVenta,
    ventasValidas,
    resumenVentas,
    totalPorCiudad,
    unidadesPorProducto,
    topProductosPorValor
};
