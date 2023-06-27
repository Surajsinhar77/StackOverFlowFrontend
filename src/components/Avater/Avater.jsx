import React from 'react'
const Avater = ({children,backgroundColor,padding,color,borderRadius,fontSize,textSize,textAlign,px,py,cursor}) => {

    const style = {
        backgroundColor,
        padding :`${px} ${py}`,
        color : color ||'black',
        borderRadius,
        fontSize,
        textAlign : "center",
        cursor : cursor || null,
        textDecoration: "none",
    }

    return (
        <div style={style}>
            <h2>{children} S</h2>
        </div>
    )
}

export default Avater