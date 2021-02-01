import React from "react";
import c from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <div>
                my posts
            </div>
            <div>new post</div>
            <div>
                <Post text = 'yes'/>
                <Post text = 'Hello'/>
                <Post text = 'My first post'/>
                <Post text = 'i am walk'/>
            </div>
        </div>)
}

export default MyPosts;