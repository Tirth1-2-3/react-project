function TodoForm({ textInput, onTextChange, dateInput, onDateChange }){
    return (
        <div>
            <form >
                <input
                    placeholder='Add a todo'
                    value={textInput}
                    type='text'
                    onChange={(event) => {
                        onTextChange(event.target.value)
                    }}
                ></input>
                <input
                    placeholder='Enter date'
                    value={dateInput}
                    type='date'
                    onChange={(event) => {
                        onDateChange(event.target.value)
                    }}
                ></input>
            </form>
        </div>
    )
}
export default TodoForm