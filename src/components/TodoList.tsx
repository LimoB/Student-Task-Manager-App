import type { Todo } from "../types/todo";
import TodoItem from "./TodoItem";
import { Draggable } from "@hello-pangea/dnd";

interface Props {
  todos: Todo[];
  toggleTodo: (id: string) => void;
}

const TodoList = ({ todos, toggleTodo }: Props) => {
  return (
    <>
      {todos.map((todo, index) => (
        <Draggable key={todo.id} draggableId={todo.id} index={index}>
          {(provided) => (
            <li
              className={`todo-item ${todo.completed ? "completed" : ""}`}
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <TodoItem todo={todo} toggleTodo={toggleTodo} />
            </li>
          )}
        </Draggable>
      ))}
    </>
  );
};

export default TodoList;
