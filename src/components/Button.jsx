import React from 'react'
import "../style/Button.css"

const Button = ({randomphrase}) => {
  return (
    
<button className='button' onClick={randomphrase}>Probas mi suerte</button>

  )
}

export default Button