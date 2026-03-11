export function TodoItem({ completed, createdAt, id, title, toggleTodo, deleteTodo }) {
  const createdLabel = createdAt
    ? new Date(createdAt).toLocaleDateString(undefined, {
        month: "short",
        day: "numeric",
      })
    : null

  return (
    <li className={`todo-item ${completed ? "is-complete" : ""}`}>
      <label className="todo-main">
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        <span className="todo-check" aria-hidden="true" />
        <span className="todo-copy">
          <span className="todo-title">{title}</span>
          {createdLabel && <span className="todo-meta">Added {createdLabel}</span>}
        </span>
      </label>

      <button
        onClick={() => deleteTodo(id)}
        className="btn btn-danger"
        type="button"
      >
        Remove
      </button>
    </li>
  )
}
