import React from 'react'
import "../style/Button.css"

const Button = ({CambiarFrase}) => {
  return (
    
<button className='button' onClick={CambiarFrase}>Probas mi suerte</button>

  )
}

export default Button