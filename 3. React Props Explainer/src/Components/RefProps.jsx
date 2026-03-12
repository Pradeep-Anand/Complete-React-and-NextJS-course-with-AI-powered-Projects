import {useRef, forwardRef} from 'react'
const CustomInput = forwardRef(({label, placeholder}, ref) => {
  return (
    <>
        <label for={label} className="block text-medium font-medium text-gray-700 mb-2">
          {label}
        </label>
        <input
        ref={ref}
          type="text"
          id={label}
          placeholder={placeholder}
          className="mt-1 block w-full border h-10 p-2 border-gray-400 rounded-md focus:ring-indigo-500 focus:border-indigo-500 mb-4 text-medium"
        />
      </>
  )
})

CustomInput.displayName = 'CustomInput';

export default function RefProps() {
  const firstInputRef = useRef("Pradeep");
  const secondInputRef = useRef(null);


  const focusFirstInput = () => {
    firstInputRef.current?.focus();
  };

  const focusSecondInput = () => {
    secondInputRef.current?.focus();
  };

  const getFirstInputValue = () => {
    if(firstInputRef.current) {
      alert(firstInputRef.current.value);
    }
  };

  const getSecondInputValue = () => {
    if(secondInputRef.current) {
      alert(secondInputRef.current.value);
    }
  };

  const clearFirstInput = () => {
    if(firstInputRef.current) {
      firstInputRef.current.value = '';
      firstInputRef.current.focus();
    }
  };

  const clearSecondInput = () => {
    if(secondInputRef.current) {
      secondInputRef.current.value = '';
      secondInputRef.current.focus();
    }
  };

  return (
    <div className="bg-white rounded-md p-6 mx-4 mb-4">
      <h1 className="text-[#252934] font-bold text-3xl">Ref Props</h1>
      <p className="mt-2 text-[#606068] font-medium">Refs provide a way to access DOM nodes or React elements directly. Use forwardRef to pass refs to child components.</p>
      <div className="bg-blue-100 rounded p-4 mt-4">
      <h3 className="font-bold mb-2 text-xl">Try it out:</h3>
      <CustomInput label="First Input (with ref)" placeholder="Enter first value" ref={firstInputRef} />
      <CustomInput label="Second Input (with ref)" placeholder="Enter second value" ref={secondInputRef} />
      <button onClick={focusFirstInput} className="bg-blue-500 text-white hover:bg-blue-600 transition py-2 px-4 rounded mt-4 mr-4">
          Focus First Input
        </button>
        <button onClick={focusSecondInput} className="bg-purple-500 text-white hover:bg-purple-600 transition py-2 px-4 rounded mt-4 mr-4">
          Focus Second Input
        </button>
        <button onClick={getFirstInputValue} className="bg-green-500 text-white hover:bg-green-600 transition py-2 px-4 rounded mt-4 mr-4">
          Get First Input Value
        </button>
        <button onClick={getSecondInputValue} className="bg-yellow-500 text-white hover:bg-yellow-600 transition py-2 px-4 rounded mt-4 mr-4">
          Get Second Input Value
        </button>
        <button onClick={clearFirstInput} className="bg-red-500 text-white hover:bg-red-600 transition py-2 px-4 rounded mt-4 mr-4">
          Clear First Input
        </button>
        <button onClick={clearSecondInput} className="bg-pink-500 text-white hover:bg-pink-600 transition py-2 px-4 rounded mt-4 mr-4">
          Clear Second Input
        </button>
      </div>
        <div className="bg-yellow-100 rounded border-l-4 border-yellow-500 p-4 mt-4">
        <h4 className="font-bold mb-2 text-gray-700">When to use refs:</h4>
        <ul className="list-disc list-inside text-[#606068] font-medium">
          <li>Managing focus, text selection, or media playback.</li>
          <li>Triggering imperative animations.</li>
          <li>Integrating with third-party DOM libraries.</li>
          <li>Accessing DOM measurements (scroll position, element size)</li>
        </ul>
      </div>
    </div>
  );
}