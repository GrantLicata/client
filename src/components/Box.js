import React from 'react'
import styles from './Box.module.css'


const Box = (props) => {

    const boxStyle = {
        display: 'inline-block',
        height: '100px',
        width: '100px',
        margin: '10px',
        background: props.color,
    }

  return (
    <div style={boxStyle}></div>
  )
}

export default Box