import React from "react";
import { useState } from "react";

const AbleReservation = ({times}) => {
    const [selectTime, setSelectTime] = useState(null);

    const pickTime = (time) => setSelectTime(time);

    return (
        <>
        <div className="text">시간을 선택해 주세요</div>
        <ul className="time-list">
            {times.map((time, timeIndex) => (
                <li key={timeIndex} onClick={() => pickTime(time)} className={selectTime === time ? 'active' : ''}>{time}</li>
            ))}
        </ul>
        </>
    );
};

export default AbleReservation;