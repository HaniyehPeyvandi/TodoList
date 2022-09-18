const Todo = ({todo}) => {
  return ( 
    <div>
      <div>{todo.text}</div>
      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
   );
}
 
export default Todo;