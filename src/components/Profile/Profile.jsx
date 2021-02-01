import React from "react";
import c from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return(
        <div className={c.content}>
            <div>
                <img className={c.cont_img} src='http://idemamacom.s3.amazonaws.com/blog/images/52553logoloololo.jpg' />
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>)
}

export default Profile;