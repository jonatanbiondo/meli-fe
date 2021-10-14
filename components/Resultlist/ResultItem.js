 
import Link from 'next/link'
import Image from 'next/image'
import PriceBox from '../PriceBox'
import FreeShippingIcon from '../FreeShippingIcon'
import styles from './ResultItem.module.scss' 


export default function ResultItem({item,query}) {
  return (
    <li className={styles.result_item}>
        <div className={styles.result_item_wrapper} >
            
            <div className={styles.picture_wrapper}>
                <Link href={`/items/${item.id}?query=${query}`} passHref={true}>
                    <a>
                        <Image src={item.picture} width={180} height={180} alt={`Imagen del producto ${item.title}`} objectFit="contain"  quality="100"/>
                    </a>
                </Link>
            </div>

            <div className={styles.description}>
                <PriceBox price={item.price}   showDecimal={false} size="sm"/>
                {item.free_shipping? <FreeShippingIcon /> : ''}
                <Link  href={`/items/${item.id}?query=${query}`} passHref={true}>
                    <a className={styles.result_title} > 
                        <h2 >{item.title}</h2>
                    </a>
                </Link>
            </div>

        </div>
    </li>
  )
}
