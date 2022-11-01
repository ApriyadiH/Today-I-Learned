import './style.css'
const ToDoComplete = ({todos,setTodos}) => {
   
    function onClickHandlerDelete(id){
        let sementara = window.confirm('Are you sure ?'); 
        if (sementara === true) {
        setTodos(current => current.filter(todo => {
            return todo.td_id !== id
        }),)
        } else {}
    }

    function onClickHandlerCancel(id){
        const newTodos = todos.map((todo)=>{   
            if (todo.td_id === id) {
                return ({...todo,is_done: false});
            } 
            return todo;  
        });
        setTodos(newTodos)
    }   
    

    return (
        <div className = "list_wrapper">
            {todos.map((todo) => {
                if (todo.is_done === true){
                    return(
                        <div className = "to_do_container" key={todo.td_id}>
                            <div>
                                <h2 className = "to_do_title">{todo.title}</h2>
                                <div>{todo.context}</div>
                            </div>
                            <div className = "button_set">
                                <button className = "delete_button" onClick={() =>onClickHandlerDelete(todo.td_id)} >Delete</button>
                                <button className = "complete_button" onClick={() => onClickHandlerCancel(todo.td_id)}>Cancel</button>
                            </div>
                        </div>
                    )  
                } return null; 
            },
            )
            }
        </div>
    )
}

const ToDoWorking = ({todos,setTodos}) => { 

    function onClickHandlerDelete(id){
        let sementara = window.confirm("Are you sure ?") 
        if (sementara === true ) {
        setTodos(current => current.filter(todo => {
            return todo.td_id !== id
        }),);
    }
    }

    function onClickHandlerComplete(id){
        const newTodos = todos.map((todo)=>{   
            if (todo.td_id === id) {
                return ({...todo,is_done: true});
            } 
            return todo;  
        });
        setTodos(newTodos)
    }   
    
    return (
        <div className = "list_wrapper">
            {todos.map((todo) => {
                if (todo.is_done === false){
                    return(
                        <div className = "to_do_container" key={todo.td_id}>
                            <div>
                                <h2 className = "to_do_title">{todo.title}</h2>
                                <div>{todo.context}</div>
                            </div>
                            <div className = "button_set">
                                <button className = "delete_button" onClick={() =>onClickHandlerDelete(todo.td_id)} >Delete</button>
                                <button className = "complete_button" onClick={() => onClickHandlerComplete(todo.td_id)}>Done</button>
                            </div>
                        </div>
                    )
                } return null; 
            }
            )
            }
        </div>
    )
}

export {ToDoComplete, ToDoWorking}