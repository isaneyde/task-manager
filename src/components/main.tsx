import {PlusCircleIcon} from "@phosphor-icons/react"
export const Main=()=>{
    return(
        <main className="bg-white h-screen">
       <fieldset className="fieldset ">
  <input type="text" className="input text-center bg-emerald-100 text-black " placeholder="What is the task?" />
      <PlusCircleIcon size={32} fill="" className="ml-70 "/>
</fieldset>
    </main>


    )
    
}