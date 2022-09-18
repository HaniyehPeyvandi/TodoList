import styles from './TodoApp.module.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoApp = () => {
  return ( 
    <div className={styles.container}>
      <TodoForm/>
      <TodoList/>
    </div>
   );
}
 
export default TodoApp;