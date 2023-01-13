import React, { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleDelete = (e) => {
    const delTodo = todos.filter((to) => e.to !== to);
    setTodos([...delTodo]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo !== "") {
      setTodos([{ id: `${Date.now()}`, todo }, ...todos]);
      setTodo("");
    }
  };
  return (
    <div className="App">
      <div className="container">
        <h1>Todo list</h1>
        <form className="todoForm" onSubmit={handleSubmit}>
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>

        <ul className="allTodos">
          {todos.map((t) => {
            return (
              <li className="singleTodo">
                <span className="todoText" key={t.id}>
                  {t.todo}
                </span>
                <button>edit</button>
                <button onClick={() => handleDelete(t.id)}>delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
