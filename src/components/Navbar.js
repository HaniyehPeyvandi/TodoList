import { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = ({ unCompletedTodos,status,onSelect }) => {
  if(!unCompletedTodos) return <h2 className={styles.heading}>set your today todos!</h2>

  return (
    <header className={styles.header}>
          <span>{unCompletedTodos}</span>
          <h2>todos are not completed</h2>
          <select onChange={onSelect} value={status}>
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="Uncompleted">Uncompleted</option>
          </select>
    </header>
  );
};

export default Navbar;
