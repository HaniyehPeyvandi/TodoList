import styles from "./Todo.module.css";

const Todo = ({ todo, onComplete, onDelete, onEdit }) => {
  return (
    <div className={styles.todo}>
      <div
        onClick={onComplete}
        className={`${styles.todoText} ${todo.isCompleted && styles.completed}`}
      >
        {todo.text}
      </div>
      <div>
        <button onClick={onEdit} className={styles.btn}>Edit</button>
        <button onClick={onDelete} className={`${styles.btn} ${styles.remove}`}>Delete</button>
      </div>
    </div>
  );
};

export default Todo;
