import React from "react";

import './Button.css';

const Button = ({title}) => {
    return (
        <>
        <div className="button-box">
            <button type="button">{title}</button>
        </div>
        </>
    )
}

export default Button;