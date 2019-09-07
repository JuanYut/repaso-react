import React from 'react'
import PropTypes from 'prop-types'

import './Button.css'

const Button = (props) => {

  const {
    text,
    className,
    action,
    type = 'button'
  } = props

  return (
    <button onClick={action} className={className} type={type}>
      {text}
    </button>
  )
}

Button.defaultProps ={
  type: 'button',
  className: 'btn'
}

Button.propTypes = {
  action: PropTypes.func.isRequired,
  className: PropTypes.string,
  text: PropTypes.string.isRequired
}

export default Button