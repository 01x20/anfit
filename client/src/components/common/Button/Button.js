import React from "react";

import './Button.css';

const Button = ({title, onClick}) => {
    return (
        <>
        <div className="button-box">
            <button type="button" onClick={onClick}>{title}</button>
        </div>
        </>
    )
}

export default Button;