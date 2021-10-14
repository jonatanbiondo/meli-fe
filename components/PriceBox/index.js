import React from "react";
import {IntlProvider, FormattedNumber} from 'react-intl'
import styles from './PriceBox.module.scss'

const currencyMap = {
    'ARS':{
        symbol:'$',
        name: 'Peso'
    },
    'USD':{
        symbol:'U$S',
        name: 'Dólar'
    },
}
 
export default function PriceBox(props) {
    // @todo para por parametro si muestra decimal o no
    const {price, showDecimal, size} = props

    const size_style = (size === 'sm')?styles.price_container : styles.price_container_large
    
    return (
        <div className={size_style}>
            <IntlProvider  locale="es-AR" defaultLocale="es">
                <span  className={styles.currency}>{currencyMap[price.currency].symbol} </span>
                <span  className={styles.amount} ><FormattedNumber value={price.amount} style="decimal"/> </span>
                {(showDecimal)? (<span  className={styles.decimals} ><FormattedNumber value={price.decimals} style="decimal" minimumIntegerDigits={2}/></span>) : ''}
            </IntlProvider>
        </div>
    )

}
