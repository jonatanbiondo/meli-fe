import Head from 'next/head' 
import SearchBox from '../../components/SearchBox' 
import {api} from "../../utils/api"
import styles from '../../styles/Product.module.scss'
import Breadcrum from "../../components/Breadcrum"
import ShowItem from "../../components/ShowItem"

export default function Items({item, categories, query}) {
  
 

  return (
    <div>

      <Head>
        <title>Caja de Busqueda</title>
        <meta name="description" content={"Lista de resultados de busqueda : " + query }  />
        <link rel="icon" href="/Logo_ML.png" />
      </Head>

      <header>
        <SearchBox query={query}/>
      </header>

      <main className={styles.main}>

        <div className={styles.main_container}>
          
            <Breadcrum items={categories} />
            <div className={styles.item_container} >
              <ShowItem item={item} />
            </div>

        </div>

         
      </main>

      
    </div>
  )
}


 export async function getServerSideProps({params}) {
   
    const id = params.id   

    const response = await api.get(`/api/items/${id}`)
    
    const {data} = response
     
    console.log(data)
    return {
      props: {
          item:  data.item,
          categories:[]
      }, 
    }
  }
  