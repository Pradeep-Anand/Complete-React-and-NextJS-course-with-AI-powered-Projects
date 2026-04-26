import {Link} from 'react-router-dom'
export default function Sidebar({tab}){
    return (
        <>
        <div className="p-4 h-130 border-r-2 border-red-200 flex inline">
            <div className="rounded gap-2  p-2 flex flex-col justify-between">
            <ul className="text-amber-600 flex flex-col content-center">
                <li className={`w-28  font-bold  rounded  p-2 ${tab === "Home" && 'bg-amber-300' }`}>
                    <Link  to="/">Home</Link>
                </li>
                <li className={`w-28  rounded font-bold p-2  ${tab === "Create Post" && 'bg-amber-300' }`}>
                    <Link to="/create-post">Create Post</Link>
                </li>
            </ul>
        </div>
        </div>
        
        </>
    )
}