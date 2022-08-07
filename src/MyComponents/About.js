import React from 'react'

export const About = () => {
    let aboutStyle = {
        background: "#000000",
        display: "flex",
        alignItems : "center",
        justifyContent: "center",
        height : "90vh",
        flexDirection: "column",
        color: "white"
    }

    let h1Style = {
        fontFamily: `'Poppins', sans-serif`,
        fontSize : "150px",
        textAlign: "center"
    }
    return (
        <div  style={aboutStyle}>
            <h1 style={h1Style}>Todo</h1>
            <p className='text-center'>“Subtracting from your list of priorities is as important as adding to it.”</p>
        </div>
    )
}
