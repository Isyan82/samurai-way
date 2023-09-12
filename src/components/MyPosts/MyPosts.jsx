import React from "react";
import Post from "../Post/Post";

import './MyPosts.css'

const MyPosts = ({posts, addPost}) => {
    const postItems = posts.map(item => <Post data={item} />)

    const newPostElement = React.createRef()
    // const addPost = () => {
    //     console.log(newPostElement.current.value)
    // }

    return (
        <div className="my-posts">
            <h3>My Posts</h3>
            <div className="my-posts__form" >
                <textarea ref={newPostElement}/>
                <button onClick={()=>addPost(newPostElement.current.value)}>Add post</button>
            </div>
            {postItems}
        </div>
    )
}

export default MyPosts