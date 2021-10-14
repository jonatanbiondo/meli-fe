import styles from './Breadcrum.module.scss'

export default function Breadcrum({items}) {


  const list =   (items)? (<ul>
    {items.map((item, index) => {
        return <li key={item.id} item={item}>
                    {item}  {(index == items.length - 1 )? '': ' > ' }
                </li>
        })
    }
</ul>  ): ''

    const empty = ''

    
  return (
    <div className={styles.Breadcrum} >
        {(items && items.length > 0 )? list : empty}
    </div>
  )

}
