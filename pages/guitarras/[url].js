import { useState } from "react";
import Image from "next/image";
import Layout from "../../components/Layout";
import styles from '../../styles/Guitarra.module.css'

const Producto = ({guitarra, agregarCarrito}) => {

    const [cantidad, setCantidad] = useState(1);

    const {nombre, imagen, precio, descripcion, id} = guitarra[0]

    function handleSubmit(e){
        e.preventDefault();

        if(cantidad < 1){
            alert('Cantidad no válida')
            return;
        }

        const guitarraSeleccionada = {
            id,
            imagen: imagen.url,
            nombre,
            precio,
            cantidad
        }

        agregarCarrito(guitarraSeleccionada)
    }

    return (
        <Layout pagina={`Guitarra ${nombre}`}>
            <div className={styles.guitarra_producto}>
                <div className={styles.imagen}>
                    <Image className={styles.imagen} priority="true" layout="responsive" width={179} height={403} src={imagen.url} alt={`Imagen Guitarra ${nombre}`}/>
                </div>

                <div className={styles.contenido}>
                    <h3>{nombre}</h3>
                    <p className={styles.descripcion_producto}>{descripcion}</p>
                    <p className={styles.precio}>${precio}</p>

                    <form onSubmit={handleSubmit} className={styles.formulario}>
                        <label>Cantidad:</label>

                        <select onChange={(e) => setCantidad(parseInt(e.target.value))} value={cantidad}>
                            <option value="">-- Seleccione --</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                        </select>

                        <input type="submit" value="Agregar al Carrito"/>
                    </form>
                </div>
            </div>
        </Layout>
        
    )
}

export async function getServerSideProps({query: {url}}){
    const urlGuitarra = `${process.env.API_URL}/guitarras?url=${url}`
    const respuesta = await fetch(urlGuitarra)
    const guitarra = await respuesta.json();

    return{
        props:{
            guitarra
        }
    }
}

export default Producto