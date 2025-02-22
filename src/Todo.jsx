import {useState} from "react"
import { v4 as uuidv4 } from 'uuid';

function Todo(){
    let [todo,settodo] = useState([{task : "sample-task", Id : uuidv4(),isDone : false}]);
    let [adds,setadd] = useState("");

    let todoFun = ()=>{
        settodo((prevArr)=>{
            return ([...prevArr,{task:adds,Id:uuidv4(),isDone:false}])
        });
        setadd("");
    }
    
    let onchangeFun = (event)=>{
        setadd(event.target.value)
    }
    let TasktoDelete = (Id)=>{
        settodo(todo.filter((todo) => todo.Id != Id));
    }

    let markAllDone = ()=>{
        settodo(todo.map((todos)=>{
            return {
                ...todos,
                isDone : true
            };
        }));
    }

    let updateTask = (Id)=>{
        settodo(todo.map((todos)=>{
            if (todos.Id === Id){
                return{
                    ...todos,
                    task: todos.task.toUpperCase()
                };
            }else{
                return todos;
            }
        }));
    }

    let markDone = (Id) => {
        settodo(todo.map((todos)=>{
            if (todos.Id == Id){
                return {
                    ...todos,
                    isDone : true
                }
            }else{
                return todos;
            }
        }
    ))
    };


    return (
        <div>
            <input placeholder="write item to add" onChange={onchangeFun}></input>
            <button onClick={todoFun}>Add</button>
            <br/><br/>
            <hr/>

            <ul>
                {
                    todo.map((vals)=>(
                        <li key={vals.Id}>
                            <span style={vals.isDone? {textDecoration:"line-through"}:{}}>{vals.task}</span>
                            <span style={{marginLeft:20}} onClick={() => TasktoDelete(vals.Id)}><button>Delete</button></span>
                            <span style={{marginLeft:20}} onClick={() => updateTask(vals.Id)}><button>To UpperCase</button></span>
                            <span style={{marginLeft:20}} onClick={() => markDone(vals.Id)} ><button>Mark has Done</button></span>
                            
                        </li>
                    ))
                }
            </ul>
            <button onClick={markAllDone}>Mark All Done</button>
        </div>
    )
}

export default Todo