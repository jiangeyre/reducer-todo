  
import moment from 'moment';

export const initialState = [
  {
    toDo: 'Learn about reducers',
    due: moment(Date.now()),
    completed: false,
    id: 3892987589
  },
  {
    toDo: 'Learn more about reducers',
    due: moment(Date.now()),
    completed: false,
    id: 3892987223
  },
  {
    toDo: 'Learn even more about reducers',
    due: moment(Date.now()),
    completed: false,
    id: 3892986523
  },
  {
    toDo: 'Cry until I can no longer feel my soul',
    due: moment(Date.now()),
    completed: false,
    id: 3892986513
  },
]

export const toDoReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const newTodo = {...action.payload, due: moment(action.payload.due), id: Date.now(), completed: false};
      return [...state, newTodo];
    case "TOGGLE":
      return state.map(item => {
        return item.id === action.payload ? {...item, completed: !item.completed, dateCompleted: moment()} : item;
        });
    case "CLEAR":
      return state.filter(item => !item.completed);
    case "DELETE":
      return (
        state.filter(item => item.id !== action.payload)
      )
    default:
      return state;
  }
}