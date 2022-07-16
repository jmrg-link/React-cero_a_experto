import { useTodos } from "./hooks";
import { TodoList , TodoAdd } from './'

export const TodoApp = () => {

  const { todos , todosCount , pendingTodosCount,  handleDeleteTodo , handleToggleTodo , handleNewTodo }  = useTodos()   

  return (
    <>
      <h1>
        TodoApp: {todosCount} <small>Pedientes : { pendingTodosCount  }</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>
        <div className="col-5">
          <h4>Agregar Todo</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
