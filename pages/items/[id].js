import { useRouter } from 'next/dist/client/router'
import Head from 'next/head' 
import SearchBox from '../../components/SearchBox' 
import {api} from "../../utils/api"
import styles from '../../styles/Product.module.scss'
import Breadcrum from "../../components/Breadcrum"
import ShowItem from "../../components/ShowItem"

export default function Items({item, categories, query}) {
  

  const router = useRouter()

  let title = (router.isFallback)? "Cargando Producto ..." : item.title
 

  return (
    <div>
      <Head>
        <title> {title} | MercadoLibre</title>
        <meta name="description" content={"Lista de resultados de busqueda : " + query }  />
        <link rel="icon" href="/Logo_ML.png" />
      </Head>
     
      <header>
        <SearchBox query={query}/>
      </header>

      <main className={styles.main}>
        {(router.isFallback)?
          (<div>Cargando Producto</div>):
          (<div className={styles.main_container}>      
              <Breadcrum items={categories} />
              <div className={styles.item_container} >
                <ShowItem item={item} />
              </div>
          </div>)
        }
        
      </main>    
    </div>
  )
}


 export async function getStaticProps({params}) {
   
    const id = params.id   

    const response = await api.get(`/api/items/${id}`)
    const {data} = response 

    return {
      props: {
          item:  data.item,
          categories: data.item.categories
      },
      revalidate:1000
    }
  }

  export async function getStaticPaths() {
    return {
      paths: [],
      fallback: true
    };
  }
  