import React from "react";
import { Icon } from "semantic-ui-react";

const ToDo = ({toDo, dispatch}) => {
  const handleToggle = () => {
    dispatch(
      {
        type: "TOGGLE",
        payload: toDo.id
      }
    )
  }

  const handleDelete = () => {
    dispatch(
      {
        type: "DELETE",
        payload: toDo.id
      }
    )
  }

    const completed = toDo.completed ? "line-through red" : "none";

    return (
        <li>
            <span style={{textDecoration: completed}} onClick={handleToggle}>{toDo.toDo}</span>
            <br />
            {toDo.completed ? <span>Completed: {toDo.dateCompleted.format('MM/DD/YYYY')}</span> : <span>Due: {toDo.due.format('MM/DD/YYYY')}</span>}
            <div className="todo delete" onClick={handleDelete}>
                <Icon name="trash alternate" color="red" />
            </div>
        </li>

        // <div>
        //     <div className={"todo-items"}>
        //         <Segment>
        //             <div
        //                 className={`todo${toDo.completed ? " completed" : "-flex"}`}
        //                 onClick={handleToggle}
        //             >
        //                 <Icon name="check square" />
        //                 <p>{toDo.task}</p>
        //             </div>
        //             <div className="todo delete" onClick={handleDelete}>
        //                 <Icon name="trash alternate" color="red" />
        //             </div>
        //         </Segment>
        //     </div>
        // </div>
    );
};

export default ToDo;