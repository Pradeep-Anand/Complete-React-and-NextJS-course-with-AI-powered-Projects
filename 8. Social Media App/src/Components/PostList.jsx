import { useContext, useEffect, useState } from "react"
import {PostListContext} from '../store/PostListStore'
import { MdDelete } from "react-icons/md";
import EmptyPost from "./EmptyPost";
import CircularIndeterminate from "./CircularIndeterminate";
export default function PostList(){
    const {postList, fetching, deletePost, handleAddPosts} = useContext(PostListContext)
    
    return (
        <>
        {
            fetching && <CircularIndeterminate/>
        }
        {
            !fetching && postList.length===0 && <EmptyPost onAddPosts={handleAddPosts}/>
        }
        <div className="flex flex-col">
            {postList.map((post) =>
            <div key={post.id} className="m-2 border-2 h-full p-4 rounded border-red-400 w-145">
            <h1 className="text-amber-700 font-bold text-lg">{post.title}</h1>
            <hr className="border-red-200" />
            <p className="text-orange-900 text-md p-2">{post.body}</p>
            {post.tags.map((tag) => <button key={tag} type="disabled" className="rounded p-1 bg-red-400 m-2 text-orange-900 ">{tag}</button>)}
            <p className="text-pink-600 p-2">No. of People viewed this post: {post.views}</p>
            <MdDelete onClick={() => deletePost(post.id)} className="size-7 flex flex-col content-end text-red-600"  />
            </div>
        )
        
        }
        

        </div>
        
        </>
    )
}