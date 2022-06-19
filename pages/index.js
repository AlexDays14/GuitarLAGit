
import Layout from '../components/Layout'
import Listado from '../components/Listado'
import ListadoBlog from '../components/ListadoBlog'
import Curso from '../components/Curso'

const Home = ({guitarras, curso, blog}) => {

    return (
        <Layout guitarra={guitarras[3]}>
            <main className="contenedor">
                <h1 className="heading">Nuestra Colección</h1>

                <Listado guitarras={guitarras}/>
            </main>

            <Curso curso={curso}/>

            <section className="contenedor">
                <ListadoBlog blog={blog}/>               
            </section>
        </Layout>
    )
}

export async function getServerSideProps(){
    const urlGuitarras = `${process.env.API_URL}/guitarras?_limit=6`
    const urlCursos = `${process.env.API_URL}/cursos`
    const urlBlog = `${process.env.API_URL}/blogs?_limit=3&_sort=created_at:desc`

    const [resGuitarras, resCursos, resBlog] = await Promise.all([
        fetch(urlGuitarras),
        fetch(urlCursos),
        fetch(urlBlog)
    ])

    const [guitarras, curso, blog] = await Promise.all([
        resGuitarras.json(),
        resCursos.json(),
        resBlog.json()
    ])

    return{
        props: {
            guitarras,
            curso,
            blog
        }
    }
}

export default Home
