import React from 'react'
import Input from '../Components/Input'
import Button from '../Components/Button'
import { Link } from 'react-router-dom'
import DropDown from '../Components/DropDown'
import { SportsData } from "../Utils/SportsData";


const HomePages = () => {
    let handleSubmit = () => {
        alert("Data submited...");
    }

    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "15rem", margin: "5rem" }}>
                <Input type="text" placeholder="Enter Your First Name..." />
                <Input type="text" placeholder="Enter Your Middle Name..." />
                <Input type="text" placeholder="Enter Your Last Name..." />
                <Input type="number" placeholder="Enter Your Phone Number..." />
                <DropDown data={SportsData} />
                <Link to="/contact"><Button design={{ color: "blue", backgroundColor: "black", width: "15rem" }} lable="Submit" onclick={handleSubmit} /></Link>
            </div>
        </>
    )
}

export default HomePages    
