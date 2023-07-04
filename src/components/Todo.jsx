import React from "react";

const Todo = ({ todo, removeTodo, completeTodo }) => {
    return (
        <div className="todo" 
        style={{ backgroundColor: todo.isCompleted ? "#80ed99" : ""} }>
        <div className="content">
          <p>{todo.text}</p>
          <p className='category'>
            ({todo.category})
          </p>
        </div>
        <div>
          <div>
            <button className="complete" onClick={() => completeTodo(todo.id)}>Completar</button>
            <button className="remove" onClick={() => removeTodo(todo.id)} >X</button>
          </div>
        </div>
      </div>
    )
}

export default Todo