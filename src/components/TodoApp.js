import { useEffect, useState } from "react";
import styles from "./TodoApp.module.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Navbar from "./Navbar";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [selectedOption, setSelectedOption] = useState("All");

  useEffect(() => {
    filterTodos(selectedOption);
  }, [todos, selectedOption]);

  const addTodo = (input) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  const completeTodo = (id) => {
    const index = todos.findIndex((t) => t.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.isCompleted = !selectedTodo.isCompleted;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    const filteredTodos = todos.filter((t) => t.id !== id);
    setTodos(filteredTodos);
  };

  const updateTodo = (newValue, id) => {
    const index = todos.findIndex((t) => t.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.text = newValue;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  const filterTodos = (status) => {
    switch (status) {
      // case "All":
      //   setFilteredTodos(todos);
      //   break;
      case "Completed":
        setFilteredTodos(todos.filter((t) => t.isCompleted));
        break;
      case "Uncompleted":
        setFilteredTodos(todos.filter((t) => !t.isCompleted));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const selectHandler = (e) => {
    setSelectedOption(e.value);
    filterTodos(e.value);
  };

  return (
    <div className={styles.container}>
      <Navbar
        unCompletedTodos={todos.filter((t) => !t.isCompleted).length}
        selectedOption={selectedOption}
        onChange={selectHandler}
      />
      <TodoForm submitTodo={addTodo} />
      <TodoList
        todos={filteredTodos}
        onComplete={completeTodo}
        onDelete={removeTodo}
        onUpdate={updateTodo}
      />
    </div>
  );
};

export default TodoApp;
