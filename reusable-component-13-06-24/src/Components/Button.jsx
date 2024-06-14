import React from 'react'

const Button = (props) => {
    return (
        <>
        <button style={props.design} onClick={props.onclick}>{props.lable}</button>
        </>
    )
}

export default Button
