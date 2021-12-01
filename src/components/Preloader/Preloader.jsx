import React from 'react'

import loading from '../../assets/image/loading.gif'

export const Preloader = () => {
  return (
    <div>
      <img src={loading} alt='preloader'/>
    </div>
  )
}
