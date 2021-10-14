 
import styles from './Resultlist.module.scss'
import ResultItem from './ResultItem'

export default function Resultlist({items, query}) {
  return (
    <div className={styles.Resultlist} >
        <ul>
          {items.map(item => {
              return <ResultItem  key={item.id} item={item} query={query} />
          })}
        </ul>
    </div>
  )
}
