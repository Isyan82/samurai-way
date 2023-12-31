import React from "react";
import ProfileInfo from "./ProfileInfo";
import MyPosts from '../MyPosts/MyPosts'
import './Profile.css'


const Profile = ({profilePage, addPost, updateNewPostText}) => {
  const {posts, newPostText} = profilePage
    return (
      <div className='content'>
        <ProfileInfo/>
        <MyPosts posts={posts} 
        addPost={addPost} 
        newPostText={newPostText} 
        updateNewPostText={updateNewPostText} />
      </div>
    )
}

export default Profile