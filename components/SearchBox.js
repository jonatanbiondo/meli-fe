import InputSearch from './InputSearch'
import Logo from './Logo'
import styles from './SearchBox.module.scss'

export default function SearchBox() {
  return (
    <div className={styles.SearchBoxWrapper} >
      <div className={styles.SearchBox} >
        <Logo />
        <InputSearch />
      </div>
    </div>
  )
}
