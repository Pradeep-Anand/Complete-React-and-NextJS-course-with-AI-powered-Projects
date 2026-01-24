import Button from "./Button"
function App() {
 
  return (
    <>
      <div className="mt-[4vh]">
        <h1 className="flex justify-center text-4xl text-[#6165ee]">Queue Management Application</h1>
        <p className="flex justify-center text-[#6f6f6f]">Manage your customer queues efficiently</p>
      </div>
      <div className="flex justify-center mt-10">

        <div className="mx-[4rem] rounded p-4 bg-[#292929]">
          <h2 className="text-[#6165ee] font-bold">Add to Queue</h2>
          <input type="text" name="" id="" placeholder="Customer Name" className="block border-2 rounded mt-2 p-2 bg-[#171717] text-[#878786]" />
          <div className="mt-4">
            <select className="border-2 rounded bg-[#171717] text-[#ffffff] h-10 w-54" id="">
            <option value="">--Select Service--</option>
            <option value="consultation">Consultation</option>
            <option value="payment">Payment</option>
            <option value="technical">Technical Support</option>
            </select>
          </div>
          <Button name="Add Customer" fun={() => {}}></Button>
        </div>

        <div className="mx-16 rounded bg-[#292929] w-100">
          <h2 className="text-[#f3f3f3] text-xl p-3">Current Queue</h2>
          <p className="flex items-center p-3 justify-center text-[#7c7c7c]">No Customers in Queue.</p>
        </div>

      </div>
    </>
  )
}

export default App
