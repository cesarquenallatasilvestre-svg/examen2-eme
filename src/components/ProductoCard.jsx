function ProductoCard({ producto, agregar, agregado }) {
  return (
    <div className={`card ${agregado ? "en-carrito" : ""}`}>
      <img src={producto.thumbnail} alt={producto.title} />

      <h4>{producto.title}</h4>

      <p className="categoria">{producto.category}</p>

      <p className="precio">
        $ {producto.price.toFixed(2)}
      </p>

      <button
        onClick={() => agregar(producto)}
        disabled={agregado}
      >
        {agregado ? "Agregado" : "Agregar"}
      </button>
    </div>
  );
}

export default ProductoCard;