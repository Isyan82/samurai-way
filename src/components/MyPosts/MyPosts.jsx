import React from "react";
import Post from "../Post/Post";

import './MyPosts.css'

const MyPosts = (props) => {
    const postItems = props.posts.map(item => <Post key={item.id} data={item} />)
    const newPostElement = React.createRef()

    const addText = () => {
        props.addPost()
    }

    const onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }


    return (
        <div className="my-posts">
            <h3>My Posts</h3>
            <div className="my-posts__form" >
                <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
                <button onClick={addText}>Add post</button>
            </div>
            {postItems}
        </div>
    )
}

export default MyPosts