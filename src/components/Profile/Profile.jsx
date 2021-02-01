import React from "react";
import c from './Profile.module.css';

const Profile = () => {
    return(
        <div className={c.content}>
            <div>
                <img className={c.cont_img} src='http://idemamacom.s3.amazonaws.com/blog/images/52553logoloololo.jpg' />
            </div>
            <div>
                ava + description
            </div>
            <div>
                <div>
                    my posts
                </div>
                <div>new post</div>
                <div>
                    <div className={c.item}>post1</div>
                    <div className={c.item}>post2</div>
                </div>
            </div>
        </div>)
}

export default Profile;