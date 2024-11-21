import React from "react";
import { useState } from 'react';

import './Tab.css';

const Tab = ({tabArr}) => {
    const [currentTab, clickTab] = useState(0);
    
    const selectMenuHandler = (index) => {
        clickTab(index);
    };

    return (
        <>
        <ul className="tab-nav">
            {tabArr.map((el,index) => (
                <li key={index} className={index === currentTab ? "nav-btn active" : "nav-btn" }
                onClick={() => selectMenuHandler(index)}>{el.name}</li>
            ))}
            </ul>
        <div className="tab-contents">
            <div>{tabArr[currentTab].content}</div>
        </div>
        </>
    )
}

export default Tab;