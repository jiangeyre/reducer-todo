import React, { useReducer } from "react";
// components
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";
// reducer
import { toDoReducer, initialState } from './reducers/toDoReducer';
// styling
import { Card, Header } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

const App = () => {
  const [state, dispatch] = useReducer(toDoReducer, initialState);

  return (
    <div className="MainContent">
      <Card>
        <Card.Content>
          <Header align="center">To Do List:</Header>
          <ToDoForm dispatch={dispatch} />
          <ToDoList state={state} dispatch={dispatch} />
        </Card.Content>
      </Card>
    </div>
  );
}

export default App;