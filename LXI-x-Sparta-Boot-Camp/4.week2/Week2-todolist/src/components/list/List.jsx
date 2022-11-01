import './style.css';
import { ToDoComplete, ToDoWorking } from '../todo/Todo';

const List = ({todos,setTodos}) => {
    return (
        <div className = "list_container">
            <h2 className = "list_title">Working.. 🔥 </h2>
            <ToDoWorking
            todos = {todos}
            setTodos= {setTodos}
            />
            <h2 className = "list_title">Done..! 🎉</h2>
            <ToDoComplete
            todos = {todos}
            setTodos = {setTodos}
            />
        </div>
    )
}

export default List