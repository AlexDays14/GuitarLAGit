import Link from "next/link";
import Image from 'next/image'
import { formatearFecha } from "../helpers";
import styles from '../styles/Entrada.module.css'

const Entrada = ({entrada}) => {

    const {id, titulo, resumen, imagen, published_at, url} = entrada;

    return (
        <article className={styles.card}>
            <Image priority="true" layout="responsive" width={800} height={600} src={imagen.url} alt={titulo}/>
            <div className={styles.contenido}>
                <h3>{titulo}</h3>
                <p className={styles.fecha}>{formatearFecha(published_at)}</p>
                <p className={styles.resumen}>{resumen}</p>
                <Link href={`/blog/${url}`}>
                    <a className={styles.enlace}>Ver</a>
                </Link>
            </div>
            
        </article>
    )
}

export default Entrada