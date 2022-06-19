import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
    return (
        <Layout
        pagina='Nosotros'
        >
            <main className="contenedor">
                <h2 className="heading">Nosotros</h2>

                <div className={styles.contenido}>

                    <Image priority="true" layout='responsive' width={600} height={450} src="/img/nosotros.jpg" alt="Nosotros"/>

                    <div>
                        <p className={styles.p}>
                        Namat consectetur dolor, cursus viverra augue. Pellentesque malesuada porttitor fermentum. Integer molestie suscipit leo, eu ultrices purus tempor at. Integer molestie suscipit leo, eu ultrices purus tempor at. Integer molestie suscipit leo, eu ultrices purus tempor at. Integer molestie suscipit leo, eu ultrices purus tempor at. 
                        </p>

                        <p className={styles.p}>
                        Namat consectetur dolor, cursus viverra augue. Pellentesque malesuada porttitor fermentum. Integer molestie suscipit leo, eu ultrices purus tempor at. Integer molestie suscipit leo, eu ultrices purus tempor at. 
                        </p>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default Nosotros