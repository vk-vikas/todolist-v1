import React from 'react'

function TodoList({todos,handleEdit,handleDelete}) {
  return (
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
  )
}

export default TodoList