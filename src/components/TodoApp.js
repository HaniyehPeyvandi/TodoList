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
      isCompleted:false
    }
    setTodos([...todos,newTodo]);
  }

  const completeTodo = (id) => {
    const index = todos.findIndex(t => t.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.isCompleted = !selectedTodo.isCompleted;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  }

  const removeTodo = (id) => {
    const filteredTodos = todos.filter(t => t.id !== id);
    setTodos(filteredTodos);
  }

  return ( 
    <div className={styles.container}>
      <TodoForm addTodoHandler={addTodoHandler}/>
      <TodoList todos={todos} onComplete={completeTodo} onDelete={removeTodo}/>
    </div>
   );
}
 
export default TodoApp;