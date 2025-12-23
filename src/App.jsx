import { useState } from 'react';
import TodoHeader from './components/TodoHeader';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([]);
  let [textInput, setTextInput] = useState('');
  let [dateInput, setDateInput] = useState('');
  return (
    <>
      <TodoHeader />
      <TodoForm 
        textInput={textInput}
        onTextChange={setTextInput}
        dateInput={dateInput}
        onDateChange={setDateInput}
      />
      {/* <TodoList /> */}
    </>
  )
}

export default App
