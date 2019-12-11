import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({state, dispatch}) => {
  
  const emptyToDo = state.length ? (
    state.map(todo => {
      return (
        <ToDo toDo={todo} key={todo.id} dispatch={dispatch} />
      );
    })
  ) : (
    <div className="empty">
      <p>You have nothing to do!</p>
    </div>
    
  );
  
  return <div align="center">{emptyToDo}</div>;
};

export default ToDoList;