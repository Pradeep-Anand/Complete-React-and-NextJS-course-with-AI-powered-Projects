import { useState } from "react";
import Button from "./Button"
export default function AddCustomer({onAddCustomer}) {
    const [name, setName] = useState("");
    const [service, setService] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name.trim() || !service.trim()){
            alert("Please fill in all fields");
            return;
        }
        const newCustomer = {
            name: name,
            service: service,
            status: "waiting",
            id: Date.now()
        };
        onAddCustomer(newCustomer);
        setName("");
        setService("");
    }
  return (
    (
        <>
        <form action="" onSubmit={handleSubmit}>
            <div className="mx-[4rem] rounded p-4 bg-[#292929]">
            <h2 className="text-[#6165ee] font-bold">Add to Queue</h2>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} name="" id="" placeholder="Customer Name" className="rounded mt-2 p-2 border-1 border-[#4d4d4d] bg-[#171717] text-white" />
            <div className="mt-4">
                <select value={service} onChange={(e) => setService(e.target.value)} className="rounded border-1 border-[#4d4d4d] bg-[#171717] text-[#ffffff] h-10 w-53" id="">
                <option value="">--Select Service--</option>
                <option value="consultation">Consultation</option>
                <option value="payment">Payment</option>
                <option value="technical">Technical Support</option>
                </select>
            </div>
            <Button name="Add Customer"></Button>
            </div>
        </form>
        
        </>
    )
  );    
}