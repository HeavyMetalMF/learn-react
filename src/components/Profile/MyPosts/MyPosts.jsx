import React from "react";
import c from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    // let posts = [
    //     {id:1, message:"yes", likeCounts:"13"},
    //     {id:2, message:"Hello", likeCounts:"14"},
    //     {id:3, message:"My first post", likeCounts:"16"},
    //     {id:4, message:"i am walk", likeCounts:"20"},
    // ]
    let postsElements = props.posts.map(post => <Post key={post.id} message={post.message} LikeCounts={post.likeCounts}/>)
    return (
        <div className={c.postsBlock}>
            <div>
                my posts
            </div>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>add post</button>
                </div>
            </div>
            <div className={c.post}>
                {postsElements}
                {/*<Post message={posts[0].message} LikeCounts={posts[0].likeCounts}/>*/}
                {/*<Post message={posts[1].message} LikeCounts={posts[1].likeCounts}/>*/}
                {/*<Post message='My first post' LikeCounts="16"/>*/}
                {/*<Post message='i am walk' LikeCounts="20"/>*/}
            </div>
        </div>)
}

export default MyPosts;