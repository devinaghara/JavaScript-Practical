import React from 'react'
import Button from '../Components/Button'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <ul style={{display:'flex',listStyle:"none",justifyContent:"space-evenly"}}>
                <li><Link to="/"><Button lable="Home"/></Link></li>
                <li><Link to="/contact"><Button lable="Contact Us"/></Link></li>
                <li><Link to="/footer"><Button lable="Footer"/></Link></li>
            </ul>
        </>
    )
}

export default Header
