import React, { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, seteditId] = useState(0);

  const handleEdit = (selectedelementId) => {
    const editTodo = todos.find((i) => (i.id===selectedelementId));
    setTodo(editTodo.todo);
    seteditId(selectedelementId);
  };


  const handleDelete = (idWeWantToDelete) => {

    // creating a new list without that deleted element
    const delTodo = todos.filter((ele) => ele.id !== idWeWantToDelete);
    setTodos([...delTodo]);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if(editId){
      const editTodo = todos.find((i) => (i.id===editId));
      const updatedTodos = todos.map((ele) => ele.id===editTodo.id ?
       (ele ={id:ele.id,todo}):{id:ele.id,todo:ele.todo});

       setTodo("");
       seteditId(0);
       setTodos(updatedTodos);
       return;

    }

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
          <button type="submit">{editId ? "Edit":"Add"}</button>
        </form>

        <ul className="allTodos">
          {todos.map((t) => {
            return (
              <li className="singleTodo">
                <span className="todoText" key={t.id}>
                  {t.todo}
                </span>
                <button onClick={() => handleEdit(t.id)}>edit</button>
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
