import { useState } from "react";
import Button from "./Button.jsx";

export default function BasicProps() {
    const [clickCount, setClickCount] = useState(0);
  return (
    <div className="bg-white rounded-md p-6 mx-4 mb-4">
      <h1 className="text-[#252934] font-bold text-3xl">Basic Props</h1>
      <p className="mt-2 text-[#606068] font-medium">Props are arguments passed to React components. They allow us to pass data from parent to child components.</p>
      <h3 className="mt-4 mb-3 font-bold text-[#404550] text-lg">Different Colors</h3>
      <div className="flex gap-2 flex-wrap mb-4">
        <Button label="Primary Button" color="primary" onClick={() => setClickCount(clickCount + 1)}></Button>
        <Button label="Secondary Button" color="secondary" onClick={() => setClickCount(clickCount + 1)}></Button>
        <Button label="Danger Button" color="danger" onClick={() => setClickCount(clickCount + 1)}></Button>
        <Button label="Warning Button" color="warning" onClick={() => setClickCount(clickCount + 1)}></Button>
        <Button label="Success Button" color="success" onClick={() => setClickCount(clickCount + 1)}></Button>
      </div>

      <h3 className="mt-4 mb-3 font-bold text-[#404550] text-lg">Different Sizes</h3>
      <div className="flex gap-2 flex-wrap mb-4">
        <Button label="Small Button" size="small" onClick={() => setClickCount(clickCount + 1)}></Button>
        <Button label="Medium Button" size="medium" onClick={() => setClickCount(clickCount + 1)}></Button>
        <Button label="Large Button" size="large" onClick={() => setClickCount(clickCount + 1)}></Button>
      </div>
      <h3 className="mt-4 mb-3 font-bold text-[#404550] text-lg">Disabled State</h3>
      <div className="flex gap-2 flex-wrap mb-4">
        <Button label="Enabled Button" disabled={false} onClick={() => setClickCount(clickCount + 1)}></Button>
        <Button label="Disabled Button" disabled={true} onClick={() => setClickCount(clickCount + 1)}></Button>
      </div>
      <div className="bg-[#f0f4ff] p-3 mb-2 rounded-md w-full">
        <p className="inline mt-4 mb-3 text-[#2c353d] font-medium">Click Count: </p>
        <p className="inline font-bold text-[#194fea] text-lg">{clickCount}</p>
      </div>
    </div>
  );
};
