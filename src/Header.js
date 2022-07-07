import reactlogo from "./images/React.png"
import React from 'react'
export default function Header(){
    return (
        <header>
            <div className="navbar">
                <img src={reactlogo} width= "80px" height="80px" alt=""></img>
                <ul>
                    <li>QR- Code Generator</li>

                </ul>
            </div>
        </header>
    )
}