import React, {useState} from "react";
import { Form, Button, Input } from "semantic-ui-react";

const ToDoForm = ({dispatch}) => {
  const [newToDo, setNewToDo] = useState("");
  
  const handleChanges = e => {
    setNewToDo(e.target.value);
  };
  
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      {
        type: "ADD",
        payload: newToDo
      }
    )
    setNewToDo("");
  };

  const clearCompleted = (e) => {
    e.preventDefault();
    dispatch(
      {
        type: "CLEAR"
      }
    )
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <Input
          type="text"
          name="newToDo"
          value={newToDo}
          onChange={handleChanges}
          placeholder="Add Task"
          icon="pencil"
          iconPosition="left"
          required
        />
        <Button positive fluid type="submit" icon="plus" />
      </Form.Field>
      <Button fluid negative onClick={clearCompleted} className="butt">
        Clear Completed
      </Button>
    </Form>
  );
}

export default ToDoForm;