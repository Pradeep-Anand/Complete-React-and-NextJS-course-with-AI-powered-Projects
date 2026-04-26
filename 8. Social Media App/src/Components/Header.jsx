import Search from "./Search"
import Account from "./Account"
export default function Header(){
    return (
        <>
        <div className="border-b-2 border-red-200 px-8 py-4 flex justify-between">
            <h1 className="text-orange-800 font-bold text-3xl">Xbook</h1>
        <div className="flex gap-3 justify-end items-center">
            <ul className="flex gap-3 text-red-600">
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">Features</a>
            </li>
            <li>
                <a href="#">Pricing</a>
            </li>
            <li>
                <a href="#">FAQs</a>
            </li>
            <li>
                <a href="#">About</a>
            </li>
        </ul>
        <Search/>
        <Account/>
        </div>
        
        </div>
        
        </>
    )
}