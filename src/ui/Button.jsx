import React from 'react'

export const Button = ({ text,onClick = () => {},isDisabled = false }) => {
    return (<button onClick={onClick} disabled={isDisabled}> { text } </button>)
}