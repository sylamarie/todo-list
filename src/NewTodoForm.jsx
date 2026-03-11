import { useState } from "react"

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    const trimmedItem = newItem.trim()
    if (trimmedItem === "") return

    onSubmit(trimmedItem)
    setNewItem("")
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New task</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
          placeholder="Add a task you can finish today"
          maxLength="120"
        />
      </div>
      <button className="btn" type="submit">
        Add task
      </button>
    </form>
  )
}
