import Todo from "./Todo";

const TodoList = ({ todos, onComplete, onDelete }) => {
  const renderTodos = () => {
    if (todos.length === 0) return <p>add some todos</p>;

    return todos.map((todo) => (
      <Todo
        key={todo.id}
        todo={todo}
        onComplete={() => onComplete(todo.id)}
      />
    ));
  };

  return <div>{renderTodos()}</div>;
};

export default TodoList;
