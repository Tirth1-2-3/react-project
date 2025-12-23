import { useState } from 'react';
import TodoHeader from './components/TodoHeader';
import TodoForm from './components/TodoForm';

function App() {
  let [todos, setTodos] = useState([]);
  let [textInput, setTextInput] = useState('');
  let [dateInput, setDateInput] = useState('');
  function handleAddTodo(){
    let newTodo = {
      text: textInput,
      date: dateInput
    }
    setTodos([...todos, newTodo])
    setTextInput('')
    setDateInput('')
  }
  function handleDeleteTodo(){

  }
  return (
    <>
      <TodoHeader />
      <TodoForm 
        textInput={textInput}
        onTextChange={setTextInput}
        dateInput={dateInput}
        onDateChange={setDateInput}
        handleAddTodo={handleAddTodo}
      />
      <TodoList 
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
      />
    </>
  )
}

export default App
