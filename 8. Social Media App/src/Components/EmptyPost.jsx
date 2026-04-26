export default function EmptyPost({onAddPosts}){
    return (
        <div className="flex flex-col items-center justify-center mt-34 ">
            <h1 className="">No Posts to Show. Create a New Post or Get Posts from Server.</h1>
            <button onClick={onAddPosts} type="submit" className="text-white bg-green-500 w-48 rounded-xl my-4 text-md p-2">Get Posts from Server</button>
        </div>
    )
}