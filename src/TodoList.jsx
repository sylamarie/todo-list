import { TodoItem } from "./TodoItem"

export function TodoList({ todos, totalTodos, filter, toggleTodo, deleteTodo }) {
  if (totalTodos === 0) {
    return (
      <div className="empty-state">
        <h2>No tasks yet</h2>
        <p>Add your first task above to get started.</p>
      </div>
    )
  }

  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <h2>No matching tasks</h2>
        <p>
          {filter === "active"
            ? "Everything is complete."
            : "No completed tasks yet."}
        </p>
      </div>
    )
  }

  return (
    <ul className="list">
      {todos.map((todo) => (
        <TodoItem
          {...todo}
          key={todo.id}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  )
}
