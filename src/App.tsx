import { useState } from "react";
import type { Todo } from "./types/todo";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import "./App.css";

import {
  DragDropContext,
  type DropResult,
  Droppable,
} from "@hello-pangea/dnd";

type Filter = "all" | "active" | "completed";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<Filter>("all");

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
  };

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const reordered = [...todos];
    const [moved] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, moved);
    setTodos(reordered);
  };

  const activeTodos = todos.filter((todo) => !todo.completed);

  const sortedTodos = [...todos].sort((a, b) => {
    if (a.completed === b.completed) return 0;
    return a.completed ? -1 : 1; // ✅ completed first
  });

  const filteredTodos = sortedTodos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <div className="app">
      <Header addTodo={addTodo} />

      <main className="main">
        <div className="todo-container">
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="todos">
              {(provided) => (
                <ul
                  className="todo-list"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  <TodoList todos={filteredTodos} toggleTodo={toggleTodo} />
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>

          <div className="todo-footer">
            <span>{activeTodos.length} items left</span>
            <div className="filters">
              <button
                onClick={() => setFilter("all")}
                className={filter === "all" ? "active" : ""}
              >
                All
              </button>
              <button
                onClick={() => setFilter("active")}
                className={filter === "active" ? "active" : ""}
              >
                Active
              </button>
              <button
                onClick={() => setFilter("completed")}
                className={filter === "completed" ? "active" : ""}
              >
                Completed
              </button>
            </div>
            <button onClick={clearCompleted}>Clear Completed</button>
          </div>
        </div>

        <p className="drag-note">Drag and drop to reorder list</p>
      </main>
    </div>
  );
}

export default App;
