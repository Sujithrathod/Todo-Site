import {useState} from "react"
import { v4 as uuidv4 } from 'uuid';

function Todo(){
    let [todo,settodo] = useState([{task : "sample-task", Id : uuidv4()}]);
    let [adds,setadd] = useState("");

    let todoFun = ()=>{
        settodo([...todo,{task:adds,Id:uuidv4()}]);
        setadd("");
    }
    
    let onchangeFun = (event)=>{
        setadd(event.target.value)
    }

    return (
        <div>
            <input placeholder="write item to add" onChange={onchangeFun}></input>
            <button onClick={todoFun}>Add</button>
            <br/><br/>
            <hr/>

            <ul>
                {
                    todo.map((vals)=>{
                        return <li key={vals.Id} >{vals.task}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default Todo