import { useEffect, useMemo, useState } from "react"
import "./styles.css"
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"

const STORAGE_KEY = "ITEMS"

function loadTodos() {
  const localValue = localStorage.getItem(STORAGE_KEY)
  if (localValue == null) return []

  try {
    const parsed = JSON.parse(localValue)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export default function App() {
  const [todos, setTodos] = useState(loadTodos)
  const [filter, setFilter] = useState("all")

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    const trimmedTitle = title.trim()
    if (!trimmedTitle) return

    setTodos((currentTodos) => {
      return [
        {
          id: crypto.randomUUID(),
          title: trimmedTitle,
          completed: false,
          createdAt: Date.now(),
        },
        ...currentTodos,
      ]
    })
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id)
    })
  }

  function clearCompleted() {
    setTodos((currentTodos) => currentTodos.filter((todo) => !todo.completed))
  }

  const activeCount = todos.filter((todo) => !todo.completed).length
  const completedCount = todos.length - activeCount

  const visibleTodos = useMemo(() => {
    if (filter === "active") return todos.filter((todo) => !todo.completed)
    if (filter === "completed") return todos.filter((todo) => todo.completed)
    return todos
  }, [filter, todos])

  return (
    <main className="app-shell">
      <section className="hero">
        <p className="eyebrow">Daily Focus</p>
        <h1 className="hero-title">Todo List</h1>
        <p className="hero-copy">
          Capture what matters, finish what you start, and keep the list under
          control.
        </p>
      </section>

      <section className="panel">
        <NewTodoForm onSubmit={addTodo} />

        <div className="toolbar" aria-label="Todo controls">
          <div className="stats" aria-live="polite">
            <span>{activeCount} active</span>
            <span>{completedCount} completed</span>
          </div>

          <div className="filter-group" role="tablist" aria-label="Filter todos">
            <button
              className={`chip ${filter === "all" ? "is-active" : ""}`}
              onClick={() => setFilter("all")}
              type="button"
            >
              All
            </button>
            <button
              className={`chip ${filter === "active" ? "is-active" : ""}`}
              onClick={() => setFilter("active")}
              type="button"
            >
              Active
            </button>
            <button
              className={`chip ${filter === "completed" ? "is-active" : ""}`}
              onClick={() => setFilter("completed")}
              type="button"
            >
              Completed
            </button>
          </div>
        </div>

        <TodoList
          todos={visibleTodos}
          totalTodos={todos.length}
          filter={filter}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />

        <div className="panel-footer">
          <p className="footer-note">
            {todos.length === 0
              ? "Nothing queued."
              : `${Math.round((completedCount / todos.length) * 100) || 0}% complete`}
          </p>
          <button
            className="btn btn-ghost"
            onClick={clearCompleted}
            type="button"
            disabled={completedCount === 0}
          >
            Clear completed
          </button>
        </div>
      </section>
    </main>
  )
}
