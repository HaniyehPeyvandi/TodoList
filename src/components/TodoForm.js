import { useEffect, useRef, useState } from "react";
import styles from "./TodoForm.module.css";

const TodoForm = ({submitTodo,edit}) => {
  const [input, setInput] = useState(edit ? edit.text : "");
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!input) {
      alert("enter todo!");
      return;
    }

    submitTodo(input);
    setInput("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles.formControl}>
        <input
          type="text"
          onChange={changeHandler}
          value={input}
          placeholder={edit ? "update todo..." : "add new todo..."}
          ref={inputRef}
          className={styles.input}
        />
        <button
          type="submit"
          className={`${styles.btn} ${
            edit ? styles.updateTodo : styles.addTodo
          }`}
        >
          {edit ? "Update" : "Add"}
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
