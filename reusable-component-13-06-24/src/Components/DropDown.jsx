import React from 'react'

const DropDown = (props) => {
    return (
        <>
            <select>
                {props.data.map(item => {
                    return <option key={item.value}>{item.lable}</option>
                })}
            </select>
        </>
    )
}

export default DropDown
