 
import Image from 'next/image'
import PriceBox from './PriceBox'
import FreeShippingIcon from './FreeShippingIcon'
import BuyButton from './BuyButton'
import styles from './ShowItem.module.scss' 


export default function ResultItem({item}) {

  const condition = (item.condition  == 'new') ? 'Nuevo' : 'Usado'

  console.log(item.description)

  return (
    
    <div className={styles.product_container} >
        
        <div className={styles.column_left}>
            <div className={styles.picture_wrapper}>
                <Image src={item.picture} width={500} height={500} alt={`Imagen del producto ${item.title}`} objectFit="scale-down"  />
            </div>

            <div className={styles.description_wrapper}>
                <h2>Descripción del producto</h2>
                <p dangerouslySetInnerHTML={{__html: item.description.replace(/(?:\r\n|\r|\n)/g, '<br/>') }}></p>
            </div>

            

        </div>

        <div className={styles.column_rigth}>
            <div className={styles.sub_info}>
                <span>{condition} </span> - <span>{item.sold_quantity} vendidos</span> {item.free_shipping? <FreeShippingIcon /> : ''}
            </div>
            <h1 className={styles.title}>{item.title}</h1>
            <PriceBox price={item.price} styles={styles.product_price} showDecimal={true} size="lg"/> 

            <BuyButton /> 
        </div>

       

    </div>
    
  )
}
