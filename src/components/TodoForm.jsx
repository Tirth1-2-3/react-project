function TodoForm({ textInput, onTextChange, dateInput, onDateChange, handleAddTodo }){
    return (
        <div>
            <form 
                onSubmit={(event)=> {
                    event.preventDefault();
                    handleAddTodo();
                }}
            >
                <input
                    placeholder='Add a todo'
                    value={textInput}
                    type='text'
                    onChange={(event) => onTextChange(event.target.value)}
                ></input>
                <input
                    placeholder='Enter date'
                    value={dateInput}
                    type='date'
                    onChange={(event) => onDateChange(event.target.value)}
                ></input>
                <button
                    type='submit'
                >Add</button>
            </form>
        </div>
    )
}
export default TodoForm