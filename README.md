# Todo List

A small React + Vite todo app with local persistence, task filtering, and a polished responsive UI.

## Live Demo

Deployment URL: https://todolist-f8fc.onrender.com

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

## Deploy to Render

This app can be deployed to Render as a Static Site.

Live deployment: https://todolist-f8fc.onrender.com

The repo includes `render.yaml` with the required settings:

- Build command: `npm install && npm run build`
- Publish directory: `dist`

To publish it:

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. In Render, create a new Static Site.
3. Connect the repository.
4. If Render detects `render.yaml`, use that Blueprint config. If you enter values manually, use:

```text
Build Command: npm install && npm run build
Publish Directory: dist
```

Because this project is a Vite static app and does not require a server, deploy it as a static site instead of a Node web service.

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
