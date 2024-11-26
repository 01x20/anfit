import React from "react";

const HistoryList = ({items}) => {

    return (
        <>
        {items.map((item, index) => (
            <div className="pass-history-box" key={index}>
                <div className="title">{item.date}</div>
                <ul className="list">
                    {item.lists.map((list, listIndex) => (
                        <li key={listIndex}>
                            <div className="history-line">
                                {list.labels.map((label, labelIdx) => (
                                    <span key={labelIdx} className={`label-box ${label.color}`}>{label.text}</span>
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