import React from 'react'

const Input = (props) => {
  return (
    <>
    <input type={props.type} id={props.id} value={props.value} onClick={props.onclick} placeholder={props.placeholder} disabled={props.disable} lable={props.lable}></input> 
    </>
  )
}

export default Input
