import React from "react";
function Button({name, image, fun}){
    return (
        <>
            <button onClick={fun} className="flex justify-center mt-4 rounded border-1 p-2 w-54 bg-teal-100 text-white hover:bg-[#6165ee]/90">
                <img src="\src\assets\add-user.png" alt="Add Customer" width="30em" className="mr-2" />
                {name}
            </button>
        </>
    )
}
export default Button;