import styles from './BuyButton.module.scss'

export default function BuyButton({items}) {
    
  return (
    <button className={styles.btn_buy} type="button">
        Comprar
    </button>
  )

}
