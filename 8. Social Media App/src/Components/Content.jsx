import PostList from "./PostList";
import Sidebar from "./Siderbar";
import CreatePost from "./CreatePost";
import { useState } from "react";
export default function Content(){
    const [tab, setTab] = useState("Home")
    return (
        <>
        <div className="flex flex-row p-4 justify-between max-w-128">
            <Sidebar tabName={tab} setTab={setTab}/>
            {
                tab==="Home"?<PostList/>:<CreatePost/>
            }
            
        </div>
        
        </>
    )
}