import "./style.css";

const AddForm = ({
    title,
    context,
    onChangeHandlerTitle,
    onChangeHandlerContext,
    onClickHandlerAdd}) => {
    
    return (
        <form className="add_form">
            <div className="input_group">
                <label className = "form_label">Title</label>
                <input className = "add_input" value={title} onChange={onChangeHandlerTitle}></input>
                <label className = "form_label">Context</label>
                <input className = "add_input" value={context} onChange={onChangeHandlerContext}></input>

                {/* TEST input terbaca */}
                {/* <p>title = {title}, context = {context}</p> */}
                
            </div>
            <button className="add_button"  onClick={onClickHandlerAdd}>Add to-do List</button>
            {/* <button className="add_button" disabled = {!title || !context} onClick={onClickHandlerAdd}>Add to-do List</button> */}
        </form>
    );
}

export default AddForm