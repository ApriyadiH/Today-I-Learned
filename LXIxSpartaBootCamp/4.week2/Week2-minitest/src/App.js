import {useState} from 'react';
import './App.css'

function App() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([
    {
      td_id: 1,
      title: "Sample To do List",
    },
  ]);

  const onChangeHandler = (event) => {
    const isi_handler_title = event.target.value;
    setTitle(isi_handler_title);
  }

  const onClickHandler = (event) => {
        setTitle("") // Mengosongkan input field title
        setTodos([...todos, {td_id: todos.length + 1, title: title}]);
  };

  return (
    <div className="layout">
      <div className="container">
        <div className="form">
          <input value={title} onChange={onChangeHandler}></input>
          <button onClick={onClickHandler}>Add to-do List</button>
        </div>

        <div>
          <h1>Todo List</h1>
        </div>

        <div className="todos_wrapper">
          {todos.map((todo) => (
            <div className="todos_container">
              <div className="todo" key={todo.td_id}>
                <h2 className="todos_title">{todo.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;