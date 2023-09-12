import React from "react";
import ProfileInfo from "./ProfileInfo";
import MyPosts from '../MyPosts/MyPosts'
import './Profile.css'


const Profile = ({data, addPost}) => {
  const {posts} = data
    return (
      <div className='content'>
        <ProfileInfo/>
        <MyPosts posts={posts} addPost={addPost} />
      </div>
    )
}

export default Profile