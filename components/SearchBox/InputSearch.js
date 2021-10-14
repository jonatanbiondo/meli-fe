import React, { useState } from 'react';
import Image from 'next/image' 
import styles from "./InputSearch.module.scss"

export default function InputSearch({query}) {

  const [value, setValue] = useState(query);
   

  return (
    <form className={styles.InputSearch} action="/items" method="GET">
        <input 
          type="text" 
          name="query" 
          placeholder="Nunca dejes de buscar"  
          value={value}
          onChange={event => setValue(event.target.value)} 
        />
        <button type="submit">
          <Image width="20" height="20" src="/ic_Search@2x.png.png" alt="Click aqui para buscar"/>
        </button>
    </form>
  )
}
