import React from 'react'
import { TodoItem } from "./TodoItem"

export const Todos = (props) => {
  let containerStyle = {
    minHeight: "80vh",
    position: "relative"
  }
  return (
    <div className="container" style={containerStyle}>
      <h3 className='my-3'>Todos List</h3>
      {props.todos.length === 0 ? "No Todos to Display" : props.todos.map((todo) => {
        return (
          <>
            <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} /><hr />
          </>)
      })}

    </div>
  )
}