import { useState } from "react";
import AddCustomer from "./Components/AddCustomer";
import DisplayQueue from "./Components/displayQueue";
function App() {

  const [queue, setQueue] = useState([]);
  const addCustomerToQueue =  function addCustomerToQueue(customer) {
    setQueue([...queue, customer]);
  }
  const updateQueue = function updateQueue(id, newStatus) {
    setQueue(queue.map(customer => customer.id === id ? {...customer, status: newStatus} : customer));
  }
  const removeCustomerFromQueue = function removeCustomerFromQueue(id, status) {
    if(status !== "complete") {
      alert("Are you sure you want to remove this customer? Their service is not completed yet.");
      return;
    }
    else{
      setQueue(queue.filter(customer => customer.id !== id));
    }
  }
  return (
    <>
      <div className="mt-[4vh]">
        <h1 className="flex justify-center text-4xl text-[#6165ee]">Queue Management Application</h1>
        <p className="mt-2 flex justify-center text-[#6f6f6f]">Manage your customer queues efficiently</p>
      </div>
      <div className="flex justify-center mt-10">

      <AddCustomer onAddCustomer={addCustomerToQueue}></AddCustomer>

      <DisplayQueue queue={queue} onUpdateQueue={updateQueue} onRemoveCustomer={removeCustomerFromQueue}></DisplayQueue>

      </div>
    </>
  )
}

export default App
