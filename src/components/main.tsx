import { CheckCircleIcon, PlusCircleIcon } from "@phosphor-icons/react"
import { TrashIcon } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react"
export const Main = () => {
    const [task, setTask] = useState("");
    const [isHidden, setIsHidden] = useState(true);
    const [list,setList]=useState([]);
  
    const addTask=()=>{
        setIsHidden(!isHidden);
         setList([...list,]); 
            {list.map((list)=>setList.length+1)}
            
        
    }
    return (
    
        <main className="bg-white h-screen justify-items-center">
            <fieldset className="fieldset">
                <input type="text" className="input text-center bg-emerald-200 text-black  mt-5"
                    placeholder="What is the task?" value={task} onChange={(event) => setTask(event.target.value)}/>
                <button onClick={addTask}><PlusCircleIcon size={32} color="green"
                    className="ml-85 -mt-10" /></button>
            </fieldset>
            <div style={{ display: isHidden ? 'none' : 'block' }} >
                <div className="w-80 h-10 rounded 2xl 
 bg-emerald-100 p-2 text-center text-black border-1 border-emerald-400 mr-5">{task}</div>
                <div className="ml-80 -mt-9">
                    <button> <CheckCircleIcon size={32} color="green" className="" /></button>
                    <button onClick={() => setIsHidden(!isHidden)}> <TrashIcon size={32} color="red" className="" /></button>
                </div>

            </div>
            
    
        </main>
    

    )

}
