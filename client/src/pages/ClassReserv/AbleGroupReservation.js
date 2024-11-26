import React from "react";
import { useState } from "react";

const AbleGroupReservation = ({times}) => {
    const [selectTime, setSelectTime] = useState(null);

    const pickTime = (time) => setSelectTime(time);

    return (
        <>
        <ul className="time-list group">
            {times.map((time, timeIndex) => (
                <li key={timeIndex} onClick={() => pickTime(time)} className={selectTime === time ? 'active' : ''}>
                    <div className="time-wrap">
                        <div className="time-info">{time.time}</div>
                        {time.state === "end" ? (
                            <>
                                <span className="label-box gray">예약 마감</span>
                            </>
                        ) : null }
                    </div>
                    <div className="list-bottom">
                        <div className="class-info-wrap">
                            {time.labels.map((label, labelIndex)=> (
                                <span key={labelIndex} className={`label-box ${label.color}`}>{label.text}</span>
                            ))}
                            <div className="class-name">{time.className}</div>
                        </div>
                        <div className="class-member">
                            예약 <span className="col-blue">{time.nowReserv}</span> / {time.classNum}
                        </div>
                    </div>
                </li>
            ))}
        </ul>
        </>
    );
};

export default AbleGroupReservation;