import React from 'react'

import loading from '../../assets/image/loading.gif'
import style from './preloader.module.css'

export const Preloader = () => {
  return (
    <div className={style.container}>
      <img src={loading} alt='preloader'/>
    </div>
  )
}
