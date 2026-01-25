import {FaUserPlus} from "react-icons/fa"
function Button({name, fun}){
    return (
        <>
            <button type="submit" className="flex justify-center mt-4 rounded p-2 w-54 bg-[#6165ee] text-white hover:bg-[#4e52d6]">
                <FaUserPlus className="mr-2 mt-1"/>
                {name}
            </button>
        </>
    )
}
export default Button;