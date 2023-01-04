import React,{FormEvent, FunctionComponent as FC} from 'react'
import {useState} from "react";
import TODOI from '../Interfaces/TodoInterface';

interface Props {
    addToDo(todo:string): void;
}

const  Form: FC<Props> = ({addToDo}) => {

    const [todo, setTodo] = useState<string>('');
    const handleSubmit = (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(!todo) return window.alert("Please Add Some Task To Do...."); 

        addToDo(todo);
        setTodo('');


    }

  return (
   <div className="col-md-8 mx-auto my-5">
    <form onSubmit={handleSubmit}>
        <div className='form-group rounded-0 d-flex'>
                <input type="text"
                 placeholder= "Add any Task to do......"
                 className='form-control rounded-0'
                style={{boxShadow:"none"}} 
                value={todo} onChange={(e)=>setTodo(e.target.value)}
                />


                <button type='submit' className='btn btn-danger rounded-0'>Add_Task</button>
        </div>
    </form>
   </div>
  )
}

export default Form