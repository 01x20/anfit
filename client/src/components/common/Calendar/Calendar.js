import React from "react";
import { useState, useEffect } from "react";
import { format, addMonths, subMonths } from 'date-fns';
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from 'date-fns';
import { isSameMonth, isSameDay, addDays, parse } from 'date-fns';

const RenderHeader = ({ currentMonth, prevMonth, nextMonth }) => {
    useEffect(() => {
        import('./Calendar.css');
    }, []);

    return (
        <div className="cal-header row">
            <button type="button" className="cal-btn prev" onClick={prevMonth}></button>
            <div className="col col-start">
                <span className="text">
                    {format(currentMonth, 'yyyy')}.
                    <span className="text month">
                        {format(currentMonth, 'M')}.
                    </span>
                </span>
            </div>
            <button type="button" className="cal-btn next" onClick={nextMonth}></button>
        </div>
    );
};

const RenderDays = () => {
    const days = [];
    const date = ['일', '월', '화', '수', '목', '금', '토'];

    for (let i = 0; i < 7; i++) {
        days.push(
            <div className="col" key={i}>
                {date[i]}
            </div>,
        );
    }

    return <div className="cal-days row">{days}</div>;
};

const RenderCells = ({ currentMonth, selectedDate, today, onDateClick }) => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = '';

    while (day <= endDate) {
        for (let i = 0; i < 7; i++) {
            formattedDate = format(day, 'd');
            const cloneDay = day;

            // 조건별 클래스 처리
            const isToday = isSameDay(day, today);
            const isSelected = selectedDate && isSameDay(day, selectedDate);
            const isDisabled = !isSameMonth(day, monthStart);

            days.push(
                <div
                    className={`col cell ${
                        isDisabled
                            ? 'disabled'
                            : isToday
                            ? 'today'
                            : isSelected
                            ? 'active'
                            : 'valid'
                    }`}
                    key={day}
                    onClick={() => onDateClick(cloneDay)}
                >
                    <span
                        className={
                            !isSameMonth(day, currentMonth) ? 'text not-valid' : ''
                        }
                    >
                        {formattedDate}
                    </span>
                </div>,
            );
            day = addDays(day, 1);
        }
        rows.push(
            <div className="row" key={day}>
                {days}
            </div>,
        );
        days = [];
    }
    return <div className="cal-body">{rows}</div>;
};

const Calendar = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const [today] = useState(new Date());

    const prevMonth = () => {
        setCurrentMonth(subMonths(currentMonth, 1));
    };
    const nextMonth = () => {
        setCurrentMonth(addMonths(currentMonth, 1));
    };
    const onDateClick = (day) => {
        setSelectedDate(day);
    };
    return (
        <div className="calendar-wrap">
            <RenderHeader
                currentMonth={currentMonth}
                prevMonth={prevMonth}
                nextMonth={nextMonth}
            />
            <RenderDays />
            <RenderCells
                currentMonth={currentMonth}
                selectedDate={selectedDate}
                today={today}
                onDateClick={onDateClick}
            />
        </div>
    );
};

export default Calendar;