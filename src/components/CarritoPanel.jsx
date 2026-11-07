function CarritoPanel({ carrito, quitar, vaciar }) {
  const total = carrito.reduce(
    (suma, producto) => suma + producto.price,
    0
  );

  return (
    <aside className="carrito">
      <h3>🛒 Carrito ({carrito.length})</h3>

      {carrito.length === 0 ? (
        <p>Carrito vacío</p>
      ) : (
        <>
          <ul>
            {carrito.map((producto) => (
              <li key={producto.id}>
                <img src={producto.thumbnail} alt={producto.title} />

                <span>{producto.title}</span>

                <button onClick={() => quitar(producto.id)}>
                  Quitar
                </button>
              </li>
            ))}
          </ul>

          <button onClick={vaciar}>
            Vaciar carrito
          </button>
        </>
      )}

      <p className="total">
        Total: $ {total.toFixed(2)}
      </p>
    </aside>
  );
}

export default CarritoPanel;