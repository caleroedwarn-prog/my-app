import { useState } from "react";
function ToDoList(){
    const [todos, setTodos] = useState([
      { id: 1, title: "Learn JSX", completed:false },
      { id: 2, title: "Learn CSS",  completed:false  },
      { id: 3, title: "Learn JS" , completed:false },
      { id: 4, title: "Learn HTML",  completed:false },
      { id: 5, title: "Learn Python",  completed:false },
      { id: 6, title: "Learn Angular",  completed:false },
      { id: 7, title: "Learn React",  completed:false },
      { id: 8, title: "Learn FASTAPI",  completed:false },
      { id: 9, title: "Learn Django",  completed:false },
      { id: 10, title: "Learn Next",  completed:false }
    ]);
    const handleToggle = (id) => {
        setTodos((prevTodos) => prevTodos.map((todos) => 
            todos.id === id ? {...todos, completed: !todos.completed} : todos)
        );
    };

    const remaining = todos.filter((todos) => !todos.completed).length;

    return (
        <>
        <h2>Todo List</h2>
        <p>Remaining Task : {remaining}</p>
        <ul>
            {todos.map((todos) => 
            <li key={todos.id} style={{marginBottom: "8px"}}><span style={{ textDecoration: todos.completed ? "line-through" : "none"}}>{todos.title}</span>{" "}<button onClick={() => handleToggle(todos.id)}> {todos.completed ? "undo" : "Done"}
                </button>
            </li>
            )}
        </ul>
        </>
    );
}
export default ToDoList;