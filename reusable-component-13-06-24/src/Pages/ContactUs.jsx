import React from 'react'
import Input from '../Components/Input'
import Button from '../Components/Button'
import DropDown from '../Components/DropDown'
import { Position } from '../Utils/Position'

const ContactUs = () => {
    let handleSubmit = () => {
        alert("Comment Done....")
    }

    return (
        <>
            <div style={{display:"flex",flexDirection:"column",gap:"10px",width:"15rem",margin: "5rem" }}>
                <h1>Contact Us</h1>
                <p>Get in touch with us</p>
                <Input type="text" placeholder="Comments.." />
                <DropDown data={Position}/>
                <Button design={{color:"red",backgroundColor:"black"}} lable="Done" onclick={handleSubmit} />
            </div>
        </>
    )
}

export default ContactUs
