import Head from 'next/head'
import Image from 'next/image' 
import axios from 'axios'
import SearchBox from '../components/SearchBox'
import styles from '../styles/Items.module.scss' 
import useSWR from 'swr'
import {api} from "../utils/api"

export default function Items({items, query}) {
  

    console.log(items)

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

      <main >
          Resultados:
        {items.map(item => {
            return <p key={item.id}>{item.title}</p>
        })}
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
  