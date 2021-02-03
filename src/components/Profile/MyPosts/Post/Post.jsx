import React from "react";
import c from './Post.module.css';

const Post = (props) => {
    return(
        <div className={c.item}><img align="middle"  src='https://r.mt.ru/r22/photoF0AC/20979963389-0/jpeg/bp.jpeg'/>
            {props.message}
            <div>
                <span>like</span>
                <span>{props.LikeCounts}</span>
            </div>
        </div>)
}

export default Post;