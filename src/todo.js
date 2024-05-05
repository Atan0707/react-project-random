import { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn React" },
    { id: 2, title: "Learn Vue" },
  ]);

  const [newTodo, setNewTodo] = useState({ id: todos.length + 1, title: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, newTodo]);
    setNewTodo({ id: todos.length + 2, title: "" }); // reset the newTodo state
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo">
      <div className="todo-preview">
        {todos.map((todo) => {
          return (
            <div className="mapping" key={todo.id}>
              <li>
                {todo.title}{" "}
                <button onClick={() => removeTodo(todo.id)}>delete</button>
              </li>
            </div>
          );
        })}
      </div>

      <div className="form">
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            required
            placeholder="Add a todo"
            value={newTodo.title}
            onChange={(e) =>
              setNewTodo({ id: todos.length + 1, title: e.target.value })
            }
          />
          <button>Add</button>
        </form>
      </div>
    </div>
  );
};

export default Todo;
