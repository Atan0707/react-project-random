import useFetch from "./useFetch";
import { useState } from "react";

const Test = () => {

    const { data: todos, setData: setTodos, isPending, error } = useFetch('http://localhost:8000/todos');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    console.log(todos);

    const handleClick = (id) => {
        fetch('http://localhost:8000/todos/' + id, {
            method: 'DELETE'
        }).then(() => {
            const newTodos = todos.filter(todo => todo.id !== id);
            setTodos(newTodos);
            console.log('deleted');
            
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const todo = { title, description };

        fetch('http://localhost:8000/todos', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(todo)

        })
        .then(res => res.json())
        .then(newTodo => {
            console.log(newTodo);
        setTodos([...todos, newTodo]);
        console.log('new todo added');
    })
    }


    return (
        <div>
            <h1>test page</h1>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {todos && todos.map((todo) => {
                return (
                    <div className="todo-item" key={todo.id}>
                        <li>{todo.title} </li>
                        <p>{todo.description}</p>
                        <button onClick={() => handleClick(todo.id)}>delete</button>
                    </div>
                );
            })}

            <div className="add">
                <h2>Add new todos</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Title" required value={title} onChange={(e) => setTitle(e.target.value)}/>
                    <input type="text" placeholder="Description" required value={description} onChange={(e) => setDescription(e.target.value)}/>
                    <button>Add</button>
                </form>
            </div>
        </div>
      );
}
 
export default Test;