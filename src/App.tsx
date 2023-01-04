import React, { useState } from 'react';
import './App.css';
import Form from './components/Form'
import List from './components/List';
import TODOI from './Interfaces/TodoInterface';



const App = () => {

  const [todos, setTodos] = useState<TODOI[]>([

  ])

  const addToDo = (todo: string): void => {
    const data: TODOI = {
      id: todos.length < 1 ? 1 : todos[todos.length - 1].id + 1,
      text: todo,
      completed: false
    };
    setTodos((prevTodos:TODOI[]) : TODOI[] => [...prevTodos, data]);
    window.alert("Task Addedd Successfully !!!")

  }
  const complteTodo = (id:number): void =>{
    const currTodo:any =todos.find((todo : TODOI) => todo.id = id);
    currTodo.completed = true

    const updatedTodos: TODOI[] = todos.map(
      (todo:TODOI):TODOI => todo.id===id ? currTodo : todo 
    );

    setTodos(updatedTodos)
    window.alert("Well Done!!!")
  }

  const deleteTodo = (id:number): void =>{

    const updatedTodos: TODOI[] = todos.filter(
      (todo:TODOI):any  => todo.id !==id 
    );

    setTodos(updatedTodos)
    window.alert("Deleted Successfully!!!")
  }


  return (
    <div className="container">
      <h1 className='text-center my-5'>Click On ToDo to deleted Todo's</h1>
      <div>
        <Form addToDo={addToDo} />
          <List todos={todos} complteTodo= {complteTodo} deleteTodo= {deleteTodo}/>
      
      </div>
    </div>
  );
}

export default App;
