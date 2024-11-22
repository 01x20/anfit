import React from "react";

const HistoryList = ({items}) => {

    return (
        <>
        {items.map((item, index) => (
            <div key={index}>
                <div className="title">{item.date}</div>
                <ul className="list">
                    {item.lists.map((list, listIndex) => (
                        <li key={listIndex}>
                            <div className="history-line">
                                {list.map((label, labelIdx) => (
                                    <span key={labelIdx} className={label.color}></span>{label.text}
                                ))}
                                {list.classTime}
                            </div>
                            <div className="class-name">{list.className}</div>
                        </li>
                    ))}
                </ul>
            </div>
        ))}
        </>
    )
}

export default HistoryList;