import Select from "react-select";
import styles from "./Navbar.module.css";

const Navbar = ({ unCompletedTodos, selectedOption, onChange }) => {
  const options = [
    { value: "All", label: "All" },
    { value: "Completed", label: "Completed" },
    { value: "Uncompleted", label: "Uncompleted" },
  ];

  if (!unCompletedTodos)
    return <h2 className={styles.heading}>set your today todos!</h2>;

  return (
    <header className={styles.header}>
      <span>{unCompletedTodos}</span>
      <h2>todos are not completed</h2>
      {/* <select onChange={onChange} value={status}>
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="Uncompleted">Uncompleted</option>
          </select> */}
      <Select
        value={selectedOption}
        onChange={onChange}
        options={options}
        className={styles.select}
      />
    </header>
  );
};

export default Navbar;
