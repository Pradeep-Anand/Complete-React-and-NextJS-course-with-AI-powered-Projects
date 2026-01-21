import { useState } from "react"
import Button from "./Button.jsx"
function App() {
  const [state, setState] = useState(0)
  function funIncrease(state){
    state = state+1;
    return state;
  }
  return (
    <>
    <h1 className="flex justify-center m-8 text-4xl text-emerald-500 underline">Counter App</h1>
    <div className="flex justify-center rounded">
      <p className="flex justify-center m-1 p-1 text-2xl border-1 inline bg-blue-100 text-cyan-500">Count is {state}</p>
    </div>
    

    <div className="flex justify-center">
      <Button name="Increase" fun="funIncrease()"></Button>
      <Button name="Decrease"></Button>
    </div>
    <div className="mx-112">
      <label htmlFor="setToInput" className="m-2 p-2">Set Counter Value:</label>
      <input type="number" placeholder="Type any Number to set Counter." id="setToInput" className="border-2 rounded p-1 color-greenc"/>
      <Button name="Set to"></Button>
    </div>
      

    
    </>
  )
}

export default App
