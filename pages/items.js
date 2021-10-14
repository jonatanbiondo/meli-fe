import Head from 'next/head' 
import SearchBox from '../components/SearchBox' 
import {api} from "../utils/api"
import styles from '../styles/Items.module.scss'
import Breadcrum from "../components/Breadcrum"
import Resultlist from "../components/Resultlist"

export default function Items({items, categories, query}) {
  

   

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
              
           
          {
          (items.length >0 )? 
              <Resultlist items={items} />
              : ''
          }

          

        </div>

         
      </main>

      
    </div>
  )
}


 export async function getServerSideProps({query}) {
    const queryString = query.query 


    const res = await api.get("/api/items", {params:{query:queryString}})
     

    return {
      props: {
          items: res.data.items,
          categories:res.data.categories,
          query: queryString
      }, 
    }
  }
  