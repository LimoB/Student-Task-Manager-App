import type { Todo } from "../types/todo";

interface Props {
  todo: Todo;
  toggleTodo: (id: string) => void;
}

const TodoItem = ({ todo, toggleTodo }: Props) => {
  return (
    <>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span>{todo.text}</span>
    </>
  );
};

export default TodoItem;
