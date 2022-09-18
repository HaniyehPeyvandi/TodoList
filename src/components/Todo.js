import styles from "./Todo.module.css";

const Todo = ({ todo, onComplete, onDelete }) => {
  return (
    <div className={styles.todo}>
      <div
        onClick={onComplete}
        className={`${todo.isCompleted && styles.completed}`}
      >
        {todo.text}
      </div>
      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default Todo;
