import Head from 'next/head'
import Image from 'next/image' 
import SearchBox from '../components/SearchBox'
import styles from '../styles/Home.module.scss' 

export default function Home() {
  return (
    <div >
      <Head>
        <title>Caja de Busqueda</title>
        <meta name="description" content="Home Challenge MercadoLibre" />
        <link rel="icon" href="/Logo_ML.png" />
      </Head>

      <main >
        <SearchBox />
      </main>
      
    </div>
  )
}
