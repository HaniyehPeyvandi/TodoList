import styles from './Todo.module.css';

const Todo = ({todo}) => {
  return ( 
    <div className={styles.todo}>
      <div>{todo.text}</div>
      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
   );
}
 
export default Todo;