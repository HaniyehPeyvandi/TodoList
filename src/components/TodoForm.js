import { useEffect, useRef, useState } from "react";
import styles from './TodoForm.module.css';

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.text : "");
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  },[]);

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!input) {
      alert("enter todo!");
      return;
    }

    props.submitTodo(input);
    setInput("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        onChange={changeHandler}
        value={input}
        placeholder={props.edit ? "update todo..." : "add new todo..."}
        ref={inputRef}
        className={styles.input}
      />
      <button type="submit">{props.edit ? "Update" : "Add"}</button>
    </form>
  );
};

export default TodoForm;
