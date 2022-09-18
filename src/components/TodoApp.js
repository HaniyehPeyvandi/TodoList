import { useState } from 'react';
import styles from './TodoApp.module.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoApp = () => {
  const [todos,setTodos] = useState([]);

  const addTodoHandler = (input) => {
    const newTodo = {
      id: Math.floor(Math.random() *1000),
      text: input,
      isCompeleted:false
    }
    setTodos([...todos,newTodo]);
  }

  return ( 
    <div className={styles.container}>
      <TodoForm addTodoHandler={addTodoHandler}/>
      <TodoList todos={todos}/>
    </div>
   );
}
 
export default TodoApp;