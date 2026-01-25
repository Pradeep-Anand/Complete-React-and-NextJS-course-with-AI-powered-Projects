import Button from "./Button"
function getStatusColor(status) {
    switch(status) {
        case "waiting":
            return("yellow");
        case "serving":
            return("#90D5FF");
        case "complete":
            return("#90EE90");
    }
}
export default function DisplayQueue({queue, onUpdateQueue, onRemoveCustomer}) {
    return (
        <div className="mx-16 rounded bg-[#292929] w-100">
            <h2 className="text-[#6165ee] font-bold p-3">Current Queue</h2>
            {
                queue.length===0?
                    <p className="text-[#878786] p-3">No customers in the queue.</p>
                    : (
                        <div className="p-3 ">{
                        queue.map( (customer) =>
                        (
                            <div key={customer.id} className="flex justify-between rounded p-3 mb-3 bg-[#1e1e1e]">
                                <div className="inline-block">
                                    <p className="text-[#f3f3f3]">{customer.name}</p>
                                    <p className="text-[#919190]">{customer.service}</p>
                                    <p style={{color:getStatusColor(customer.status)}} className="text-[#f3f3f3]">{customer.status}</p>
                                </div>
                                
                                <span className="flex items-center">
                                    {customer.status === "waiting" && (
                                        <button onClick={() => onUpdateQueue(customer.id, "serving")} className= "mx-2 rounded p-1 w-20 bg-blue-500 text-white hover:bg-blue-500/90" name="Serve">Serve</button>
                                    )}
                                    {customer.status === "serving" && (
                                        <button onClick={() => onUpdateQueue(customer.id, "complete")} className= "mx-2 rounded p-1 w-20 bg-green-500 text-white hover:bg-green-500/90" name="Complete">Complete</button>
                                        )
                                    }
                                    <button onClick={() => onRemoveCustomer(customer.id, customer.status)} className="mx-2 rounded p-1 w-18 bg-red-500 text-white hover:bg-red-500/90" name="Remove">Remove</button>
                                </span>
                            </div>
                        )
                        )
                    }
                    </div>
                    )
            }
        </div>
    );
  }