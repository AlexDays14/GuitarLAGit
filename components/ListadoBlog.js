import Entrada from "./Entrada"
import styles from '../styles/Blog.module.css'

const ListadoBlog = ({blog}) => {
    return (
        <>
            <h2 className="heading">Blog</h2>

            <div className={styles.blogs}>
                {blog.map(entrada => (
                    <Entrada
                        key={entrada.id}
                        entrada={entrada}
                    />
                ))}
            </div>
        </>
    )
}

export default ListadoBlog