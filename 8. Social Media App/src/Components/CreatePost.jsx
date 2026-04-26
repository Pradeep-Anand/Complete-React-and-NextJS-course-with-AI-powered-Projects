import {useContext, useRef} from 'react'
import { PostListContext } from '../store/PostListStore'
import {useNavigate} from 'react-router-dom'
export default function CreatePost(){
    const userIdElement = useRef()
    const titleElement = useRef()
    const bodyElement = useRef()
    const reactionsElement = useRef()
    const tagsElement = useRef()
    const navigate = useNavigate()
    const {addPost} = useContext(PostListContext)
    const handleSubmit = (event) => {
        event.preventDefault()
        const userID = userIdElement.current.value
        const title = titleElement.current.value
        const body = bodyElement.current.value
        const reactions = reactionsElement.current.value
        const tags = tagsElement.current.value.split(" ")
        
        userIdElement.current.value = ""
        titleElement.current.value = ""
        bodyElement.current.value = ""
        reactionsElement.current.value = ""
        tagsElement.current.value = ""
        fetch('https://dummyjson.com/posts/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userId: Number(userID),
                title: title,
                body: body,
                tags: tags,
            })
        })
        .then(res => {
            if (!res.ok) throw new Error(`Request failed with status ${res.status}`)
            return res.json()
        })
        .then(post => {
            addPost(post);
            navigate("/")
            
        })
        .catch(error => console.error('Add post failed:', error));
        
    }
    return(
        <>
        <form action="" onSubmit={handleSubmit} className="flex flex-col w-84 m-4">
            <label htmlFor="id"  className="my-2 text-orange-600 font-bold text-lg">Enter your User Id here</label>
            <input required type="text" ref={userIdElement} id="id" placeholder="Your User Id" className="border-1 rounded border-amber-700 p-2 text-amber-900"/>
            <label htmlFor="title" className="my-2 text-orange-600 font-bold text-lg">Post Title</label>
            <input required type="text" ref={titleElement} id="title" placeholder="How are you feeling today..." className="border-1 rounded border-amber-700 p-2 text-amber-900 "/>
            <label htmlFor="body" className="my-2 text-orange-600 font-bold text-lg">Post Content</label>
            <textarea required type="textarea" ref={bodyElement} id="body" placeholder="Tell more about it" className="border-1 rounded border-amber-700 p-2 text-amber-900"/>
            <label htmlFor="reactions" className="my-2 text-orange-600 font-bold text-lg">Number of reactions</label>
            <input required type="text" ref={reactionsElement} id="reactions" placeholder="How many people reacted to this post" className="border-1 rounded border-amber-700 p-2 text-amber-900"/>
            <label htmlFor="tags" className="my-2 text-orange-600 font-bold text-lg">Enter your hashtags here</label>
            <input required type="text" ref={tagsElement} id="tags" placeholder="Please enter tags separated by space" className="border-1 rounded border-amber-700 p-2 text-amber-900"/>
            <button type="submit" className="text-amber-700 font-bold bg-amber-400 w-16 rounded-xl my-4 text-xl p-2" >Post</button>
        </form>
        </>
    )
}