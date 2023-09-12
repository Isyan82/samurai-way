import React from "react";
import './Post.css'

const Post = ({data}) => {
    const { id, post, likesCount} = data
    return (
            <div key={id} className="post">
                <img src="https://upload.wikimedia.org/wikipedia/ru/c/ce/Aang.png" alt="" />
                <span className="post__text">{post}</span>
                <div className="post__like">{likesCount} like</div>
            </div>
    )
}

export default Post