import ProductoCard from "./ProductoCard";

function ProductoList({ productos, agregar, carrito }) {
  return (
    <div className="grid">
      {productos.map((producto) => (
        <ProductoCard
          key={producto.id}
          producto={producto}
          agregar={agregar}
          agregado={carrito.some(
            (item) => item.id === producto.id
          )}
        />
      ))}
    </div>
  );
}

export default ProductoList;