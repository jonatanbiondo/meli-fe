import InputSearch from './InputSearch'
import Logo from './Logo'
import styles from './SearchBox.module.scss'

export default function SearchBox({query}) {
   
  return (
    <div className={styles.SearchBoxWrapper} >
      <div className={styles.SearchBox} >
        <Logo />
        <InputSearch  query={query}/>
      </div>
    </div>
  )
}
