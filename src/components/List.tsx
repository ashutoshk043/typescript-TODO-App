import React, {FunctionComponent as FC} from 'react'
import TODOI from '../Interfaces/TodoInterface'

interface Props {
    todos : TODOI[];
    complteTodo(id:number): void;
    deleteTodo(id:number):void;
}

const List: FC <Props> = ({todos, complteTodo, deleteTodo})=> {
  return (
    <div className='col-md-6 mx-auto my-5'>
        {
            todos.map((todo:TODOI, index:number): any =>(
                <div key={index} className="d-flex align-items-center justify-content-center w-100">
                    <h1 className={`text-center py-2 ${todo.completed ? "completed" : "notCompleted"}`} style={{width:"80%"}} onClick={()=> complteTodo(todo.id)}>{todo.text}</h1>

                    {
                        todo.completed && <button type='button' className='btn btn-warning mx-auto' onClick={()=>deleteTodo(todo.id)}>Delete</button>
                    }
                </div>
            ))
        }
    </div>
  )
}

export default List