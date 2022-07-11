/* Creating an array with an object inside. */
const initialState = [{
    id:1,
    todo:'Recolectar priedas del infinito',
    done:false
}]

const todoReducer = (state = initialState , action={} ) => {
    if(action.type === '[TODO] add todo'){
        return[...state,action.payload]
    }
    return state
}

let todos = todoReducer()

const newTodo = {
    id:2,
    todo:'Piedra del poder',
    done:false
}

/* Creating an object with a type and a payload. */
const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo
}

/* Calling the reducer function and passing the state and the action. */
todos = todoReducer(todos , addTodoAction  )

console.log({state:todos});
