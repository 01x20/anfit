import React from "react";

const HistoryList = ({items}) => {
    return (
        <>
        {items.map((item, index) => {
            console.log(item);
            <div key={index} className="title">{item.date}</div>
        })}

        {/*<div className="title">2024년 11월 13일 (수)</div>
        <ul className="list">
            <li>
            <div className="history-line"><span className="label-box gray">예약 취소</span> 09 : 00 ~ 09 : 50</div>
            <div className="class-name">빙수 코치</div>
            </li>
            <li>
            <div className="history-line"><span className="label-box gray">예약 취소</span> 09 : 00 ~ 09 : 50</div>
            <div className="class-name">빙수 코치</div>
            </li>
        </ul>*/}
        </>
    )
}

export default HistoryList;