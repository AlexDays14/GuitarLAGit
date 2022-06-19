import {useState, useEffect} from 'react'
import '../styles/normalize.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const [carrito, setCarrito] = useState([]);

  useEffect(() =>{
    const carritoLS = JSON.parse(localStorage.getItem('carrito')) ?? [];
    if(carritoLS.length !== 0){
      setCarrito(carritoLS)
    }
  }, [])

  useEffect(() =>{
    localStorage.setItem('carrito', JSON.stringify(carrito))
  }, [carrito])

  function agregarCarrito(producto){
    if(carrito.some(articulo => articulo._id === producto.id)){
      const carritoActualizado = carrito.map(guitarra => {
        if(guitarra._id === producto.id){
          guitarra.cantidad = producto.cantidad
        }
        return guitarra;
      })
      setCarrito(carritoActualizado);
    }else{
      setCarrito([...carrito, producto])
    }
  }

  function actualizarCantidad(producto){
    const carritoActualizado = carrito.map(articulo => {
      if(articulo._id === producto.id){
        articulo.cantidad = producto.cantidad
      }
      return articulo;
    })

    setCarrito(carritoActualizado);
  }

  function eliminarProducto(id){
    const carritoActualizado = carrito.filter(articulo => articulo._id !== id)
    setCarrito(carritoActualizado);
  }

  return <Component {...pageProps} carrito={carrito} agregarCarrito={agregarCarrito} actualizarCantidad={actualizarCantidad} eliminarProducto={eliminarProducto}/>
}

export default MyApp
