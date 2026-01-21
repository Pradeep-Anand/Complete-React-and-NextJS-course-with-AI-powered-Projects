import React from "react";
function Button({name, fun}){
    return (
        <>
            <button onClick={fun} className="m-2 rounded border-1 p-1 bg-emerald-500 text-white hover:bg-emerald-700">
                {name}
            </button>
        </>
    )
}
export default Button;