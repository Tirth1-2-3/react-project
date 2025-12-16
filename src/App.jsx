import { useState } from 'react';
import TodoHeader from './components/todo-header';
import Todo from './components/todo';
import RenderTodo from './components/addtodo';
import { items as initialItems } from './components/addtodo';

function App() {
  const [items, setItems] = useState(initialItems);

  return (
    <>
      <TodoHeader />
      <Todo />
      <RenderTodo items={items} setItems={setItems} />
    </>
  )
}

export default App
