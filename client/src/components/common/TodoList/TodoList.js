import React, { useRef, useEffect, useState } from "react";

const RenderTodoList = () => {
    useEffect(() => {
        import('./TodoList.css');
      }, []);

      <>
    <div className="box-title">오늘의 목표</div>
    <div className="todo-box">
        <div className="check-box">
          <label htmlFor="Chk01" className="label">
            <input type="checkbox" id="Chk01" name="todoList" />
            <div className="inp"></div>
            <div className="text">해야 할 일 1</div>
          </label>
        </div>
        <div className="check-box">
          <label htmlFor="Chk02" className="label">
            <input type="checkbox" id="Chk02" name="todoList" />
            <div className="inp"></div>
            <div className="text">해야 할 일 2</div>
          </label>
        </div>
      </div>
      </>
}
export default RenderTodoList;