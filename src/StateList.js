import React,{useState} from 'react'
import Lists from "./Lists.css"

function StateList() {
    const[color, setColor] = useState(["Red", "Blue"])

    function Green(){
        setColor([...color, "Green"])
    }

    function RemoveItem(){
        setColor([...color])
    }
  return (
    <div>
        <center>
            <button id='btn1' onClick={Green}>Add</button>

            <button id='btn2' onClick={()=>RemoveItem(color.pop())}>Remove</button>

            {color.map((x, index)=><ul key={index}>{x}</ul>)}
        </center>
    </div>
  )
}

export default StateList