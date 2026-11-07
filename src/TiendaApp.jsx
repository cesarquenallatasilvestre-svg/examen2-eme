import { useState } from "react";
import { useProductos } from "./hooks/useProductos";
import ProductoList from "./components/ProductoList";
import CarritoPanel from "./components/CarritoPanel";

function TiendaApp() {
  const { productos, cargando, error } = useProductos();

  const [carrito, setCarrito] = useState([]);

  const agregar = (producto) => {
    setCarrito((actual) => [...actual, producto]);
  };

  const quitar = (id) => {
    setCarrito((actual) =>
      actual.filter((producto) => producto.id !== id)
    );
  };

  const vaciar = () => {
    setCarrito([]);
  };

  if (cargando) {
    return <p className="mensaje">Cargando...</p>;
  }

  if (error) {
    return <p className="mensaje error">Error: {error}</p>;
  }

  return (
    <>
      <h1>Mini Tienda</h1>

      <div className="layout">
        <ProductoList
          productos={productos}
          agregar={agregar}
          carrito={carrito}
        />

        <CarritoPanel
          carrito={carrito}
          quitar={quitar}
          vaciar={vaciar}
        />
      </div>
    </>
  );
}

export default TiendaApp;