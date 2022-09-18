import styles from "./Todo.module.css";

const Todo = ({ todo, onComplete, onDelete, onEdit }) => {
  return (
    <div className={styles.todo}>
      <div
        onClick={onComplete}
        className={`${todo.isCompleted && styles.completed}`}
      >
        {todo.text}
      </div>
      <div>
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Todo;
