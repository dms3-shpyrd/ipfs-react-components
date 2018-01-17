import React from 'react'
import PropTypes from 'prop-types'
import Input from '../Input'

import './styles.css'

/**
 * Is a Button.
 *
 * @param {Object} props
 *
 * @prop {String}   text    - text to be shown within the button
 * @prop {Function} onClick - function to be triggered when clicking the button
 *
 * @return {ReactElement}
 */
export default function Button (props) {
  return (
    <Input class='button'>
      <button onClick={props.onClick}>
        <span>{props.text}</span>
      </button>
    </Input>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}
