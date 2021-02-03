import c from "./ProfileInfo.module.css";
import React from "react";

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img className={c.cont_img} src='http://idemamacom.s3.amazonaws.com/blog/images/52553logoloololo.jpg'/>
            </div>
            <div className={c.description}>
                ava + description
            </div>
        </div>
    )
}
export default ProfileInfo;