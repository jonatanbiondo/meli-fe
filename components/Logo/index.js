 
import Link from 'next/link'
import styles from './Logo.module.scss' 


export default function Logo() {
  return (
    <div className={styles.navLogo} >
      <Link href="/" >Home MercadoLibre</Link>     
    </div>
  )
}
