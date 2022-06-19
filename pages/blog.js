import Layout from '../components/Layout'
import ListadoBlog from '../components/ListadoBlog'

const Blog = ({blog}) => {

    return (
        <Layout
        pagina='Blog'
        >
            <main className="contenedor">
                <ListadoBlog blog={blog}/>
            </main>
        </Layout>
    )
}

export async function getStaticProps(){

    const url = `${process.env.API_URL}/blogs?_sort=createdAt:desc`
    const respuesta = await fetch(url)
    const blog = await respuesta.json()

    return{
        props:{
            blog
        }
    }
}

export default Blog