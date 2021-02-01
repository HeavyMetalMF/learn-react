import React from "react";
import c from './MyPosts.module.css';

const MyPosts = () => {
    return(
        <div>
            <div>
                my posts
            </div>
            <div>new post</div>
            <div>
                <div className={c.item}>
                    <img align="middle"  src='https://r.mt.ru/r22/photoF0AC/20979963389-0/jpeg/bp.jpeg'/>
                    <span>post1</span>
                </div>
                <div className={c.item}>
                    <img align="middle"  src='https://r.mt.ru/r22/photoF0AC/20979963389-0/jpeg/bp.jpeg'/>
                    <span>post2</span>
                </div>
                <div className={c.item}>
                    <img align="middle"  src='https://r.mt.ru/r22/photoF0AC/20979963389-0/jpeg/bp.jpeg'/>
                    <span>post3</span>
                </div>
                <div className={c.item}>
                    <img align="middle"  src='https://r.mt.ru/r22/photoF0AC/20979963389-0/jpeg/bp.jpeg'/>
                    <span>post4</span>
                </div>
                <div className={c.item}>
                    <img align="middle"  src='https://r.mt.ru/r22/photoF0AC/20979963389-0/jpeg/bp.jpeg'/>
                    <span>post5</span>
                </div>
                <div className={c.item}>
                    <img align="middle"  src='https://r.mt.ru/r22/photoF0AC/20979963389-0/jpeg/bp.jpeg'/>
                    <span>post6</span>
                </div>
            </div>
        </div>)
}

export default MyPosts;