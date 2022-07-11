import { useReducer } from "react";
import { todoReducer } from "./todoReducer";

const initialState = [
  {
    id: new Date().getTime(),
    description: "Recolectar datos primarios ID:1",
    done: false,
  },
  {
    id: new Date().getTime() + 100,
    description: "Recolectar datos primarios ID:2",
    done: false,
  },
];

export const TodoApp = () => {
  const [todos, dispatchTodo] = useReducer(todoReducer, initialState);

  return (
    <>
      <h1>
        TodoApp: 10 <small>Pedientes : 2</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <ul className="list-group">
            {
              todos.map((todo) => (
                <li key={todo.id }className="list-group-item d-flex justify-content-between">
                  <span className="align-self-center">Item 1</span>
                  <button className="btn btn-danger ml-2" type="submit">
                    editar
                  </button>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="col-5">
          <h4>Agregar Todo</h4>
          <hr />
          <form action="">
            <input
              type="text"
              placeholder="¿Que tienes que hacer?"
              className="form-control"
            />
            <button type="Submit" className="btn btn-outline-primary mt-2">
              Agregar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
