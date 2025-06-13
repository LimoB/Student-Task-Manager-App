import TodoInput from "./TodoInput";

type HeaderProps = {
  addTodo: (text: string) => void;
};

const Header = ({ addTodo }: HeaderProps) => {
  return (
<header className="header">
  <div className="header-content">
    <div className="logo-with-icon">
      <h1 className="logo">TODO</h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
        viewBox="0 0 24 24"
        className="sun-icon"
      >
        <path d="M12 4a1 1 0 011-1h0a1 1 0 110 2h0a1 1 0 01-1-1zm0 15a1 1 0 011-1h0a1 1 0 110 2h0a1 1 0 01-1-1zm8-7a1 1 0 01-1 1h0a1 1 0 110-2h0a1 1 0 011 1zm-15 0a1 1 0 011 1h0a1 1 0 11-2 0h0a1 1 0 011-1zm12.07 5.07a1 1 0 01-1.41 0h0a1 1 0 011.41-1.41h0a1 1 0 010 1.41zM6.34 6.34a1 1 0 011.41 0h0a1 1 0 11-1.41 1.41h0a1 1 0 010-1.41zm11.31-1.41a1 1 0 010 1.41h0a1 1 0 01-1.41-1.41h0a1 1 0 011.41 0zM6.34 17.66a1 1 0 010-1.41h0a1 1 0 011.41 1.41h0a1 1 0 01-1.41 0zM12 7a5 5 0 100 10 5 5 0 000-10z" />
      </svg>
    </div>
    <TodoInput addTodo={addTodo} />
  </div>
</header>


  );
};

export default Header;
