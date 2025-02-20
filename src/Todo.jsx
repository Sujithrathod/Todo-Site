import {useState} from "react"

function Todo(){
    let [todo,settodo] = useState(["sample state"]);
    let [adds,setadd] = useState("");

    let todoFun = ()=>{
        settodo([...todo,adds]);
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
                        return <li>{vals}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default Todo