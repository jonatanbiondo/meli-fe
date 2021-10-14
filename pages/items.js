import Head from 'next/head' 
import SearchBox from '../components/SearchBox' 
import {api} from "../utils/api"
import styles from '../styles/Items.module.scss'
import Breadcrum from "../components/Breadcrum"
import Resultlist from "../components/Resultlist"
import useSWR, { SWRConfig } from 'swr'
import { useRouter } from 'next/dist/client/router'


const fetcher = (url) => { return api.get(url).then((res) => { return res.data} ) };


function ItemsList(){
  const router = useRouter()
  const { data, error } = useSWR(`/api/items?query=${router.query.query}`)
 
  // there should be no `undefined` state
  console.log("Is data ready?", !!data);

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";


  return (
    <div>

      <Head>
        <title>{ router.query.query } |  MercadoLibre </title>
        <meta name="description" content={"Lista de resultados de busqueda : " + router.query.query }  />
        <link rel="icon" href="/Logo_ML.png" />
      </Head>

      <header>
        <SearchBox query={router.query.query}/>
      </header>

      <main className={styles.main}>
        <div className={styles.main_container}>       
          
          <Breadcrum items={data.categories} />            
           
          {
          (data.items.length >0 )? 
              <Resultlist items={data.items} />
              : ''
          }  

        </div>       
      </main>    
    </div>
  )
}



export default function Items({fallback}) { 
  return (
    <SWRConfig value={{ fallback }}>
      <ItemsList />
    </SWRConfig>
  )
}


 export async function getServerSideProps({query}) {
    const queryString = query.query 

    const url = `/api/items?query=${queryString}`
    let data = await fetcher(url)
     
    return {
      props: {    
          fallback:{
            [url]: data
          }
      }, 
    }
  }
  