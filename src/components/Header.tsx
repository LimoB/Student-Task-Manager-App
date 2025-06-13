import TodoInput from "./TodoInput";

type HeaderProps = {
  addTodo: (text: string) => void;
};

const Header = ({ addTodo }: HeaderProps) => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">TODO</h1>
        <TodoInput addTodo={addTodo} />
      </div>
    </header>
  );
};

export default Header;
