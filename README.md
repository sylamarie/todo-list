# Todo List

A small React + Vite todo app with local persistence, task filtering, and a polished responsive UI.

## Features

- Add tasks with basic input validation
- Mark tasks as complete or active
- Filter by `All`, `Active`, or `Completed`
- Remove individual tasks
- Clear all completed tasks
- Persist todos in `localStorage`
- Show active/completed counts and overall progress

## Tech Stack

- React 19
- Vite 7
- ESLint 9

## Getting Started

Make sure you have Node.js installed, then run the project from the repo root:

```powershell
npm install
npm run dev
```

Vite will print a local development URL, usually:

```text
http://localhost:5173/
```

If PowerShell blocks `npm`, use `npm.cmd` instead:

```powershell
npm.cmd install
npm.cmd run dev
```

## Available Scripts

```powershell
npm run dev
```

Starts the Vite development server.

```powershell
npm run build
```

Creates a production build in `dist/`.

```powershell
npm run preview
```

Serves the production build locally for preview.

```powershell
npm run lint
```

Runs ESLint across the project.

## Project Structure

```text
src/
  App.jsx
  NewTodoForm.jsx
  TodoItem.jsx
  TodoList.jsx
  main.jsx
  styles.css
```

## Notes

- Todo data is stored in the browser under the `ITEMS` local storage key.
- New tasks are added to the top of the list.
- Existing saved items without timestamps still work; the app handles them safely.
