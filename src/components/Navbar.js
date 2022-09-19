import styles from "./Navbar.module.css";

const Navbar = ({ unCompletedTodos }) => {
  return (
    <header className={styles.header}>
      {!unCompletedTodos ? (
        <h2>set your today todos!</h2>
      ) : (
        <>
          <span>{unCompletedTodos}</span>
          <h2>todos are not completed</h2>
        </>
      )}
    </header>
  );
};

export default Navbar;
