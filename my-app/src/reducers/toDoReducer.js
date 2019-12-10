const initialState = [
]

const todoReducer = (state, action) => {
    switch(action.type){
        case("ADD"):
        return[
            ...state,
            {
              task: action.payload,
              completed: false,
              id: Date.now()
            }
        ]
        case("TOGGLE"):
        return(
          state.map(todo => {
            if (todo.id === action.payload){
              return{...todo, completed: !todo.completed }
            }
            return todo;
          })
        )
        case("CLEAR"):
        return(
          state.filter(todo => !todo.completed)
        )
        case("DELETE"):
        return(
          state.filter(todo => todo.id !== action.payload)
        )
        default:
            return state;
    }
};

export {initialState, todoReducer};