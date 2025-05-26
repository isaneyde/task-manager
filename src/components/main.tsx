import { CheckCircleIcon, CircleIcon, PlusCircleIcon } from "@phosphor-icons/react"
import { TrashIcon } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react"
//<CheckCircleIcon size={32} color="green" />

export const Main = () => {
    const [task, setTask] = useState("");
    interface inputValues {
        text: string,
    }
    const [list, setList] = useState<inputValues[]>([]);

    const addTask = () => {
        setList([...list, { text: task }]);
        setTask("");
    }
    const removeTask = (index: number) => {
        const newList = list.filter((task, indice) => indice !== index)
        setList(newList);
    }

    return (
        <main className="bg-white min-h-screen justify-items-center ">
            <div className="w-120 h-100 border-1 border-green-200 p-4 justify-items-center shadow-xl">
                <fieldset className="fieldset">
                    <input type="text" className="input text-center bg-emerald-200 text-black  mt-5"
                        placeholder="What is the task for today, dear?" value={task} onChange={(event) => setTask(event.target.value)} />
                    <button onClick={addTask}><PlusCircleIcon size={32} color="green"
                        className="ml-85 -mt-10" /></button>
                </fieldset>
                <ul>
                    <li>
                        {list.map((task, index) => (
                            <div key={index}>
                                <div className="w-80 h-10 rounded 2xl 
 bg-emerald-100 p-2 text-center text-black border-1 border-emerald-400 mr-5">{task.text}</div>
                                <div className="ml-80 -mt-9">
                                    <span className="float-left absolute text-black right-90 text-xs opacity-50 block"><span>{new Date().toLocaleDateString()}</span>
                                    </span>
                                    <button><CheckCircleIcon size={32} color="green" /></button>
                                    <button onClick={() => removeTask(index)}> <TrashIcon size={32} color="red" /></button>
                                </div>

                            </div>
                        ))}
                    </li>
                </ul>


            </div>
        </main>


    )

}
