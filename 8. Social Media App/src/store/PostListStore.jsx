import { createContext, useEffect, useState, useReducer } from "react"

export const PostListContext = createContext({
    postList: [],
    addPost: () => {},
    fetching: false,
    deletePost: () => {},
    handleAddPosts: () => {},
})
export default function PostListProvider({children}){
    const PostListReducer = (currPostList, action) => {
        let newPostList = currPostList
        if(action.type === "DELETE_POST"){
            newPostList = currPostList.filter((post) => post.id !== action.payload.postListId)
        }
        else if(action.type === "ADD_INITIAL_POST"){
            newPostList = action.payload.posts
        }
        else if(action.type === "ADD_POST"){
            newPostList = [action.payload, ...currPostList]
        }
        return newPostList;
    }
    const [postList, dispatchPostList] = useReducer(PostListReducer, [])
    const addPost = (post) => {
        dispatchPostList({
            type: "ADD_POST",
            payload: post
        })
    }

    const addInitialPosts = (posts) => {
        dispatchPostList({
            type: "ADD_INITIAL_POST",
            payload:{
                posts
            }
        })
    }
    const [fetching, setFetching] = useState(false);

    const handleAddPosts = () => {
            const controller = new AbortController()
            const { signal } = controller
            setFetching(true)
            fetch('https://dummyjson.com/posts', { signal })
            .then(res => res.json())
            .then(posts => addInitialPosts(posts.posts))
            .finally(() => setFetching(false))
            return (() => {
                controller.abort()
            })
        }
    useEffect(handleAddPosts, [])

    const deletePost = (postListId) => {
        dispatchPostList({
            type: "DELETE_POST",
            payload: {
                postListId,
            }
        })
    }

    return(
        <PostListContext.Provider value={{postList,addPost,fetching,deletePost, handleAddPosts}}>
            {children}
        </PostListContext.Provider>
    )
}
