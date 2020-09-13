import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.posts}>
            <div className={s.post}>
                {props.message}
            </div>
            <div className={s.countLike}>
                {props.like}
            </div>
        </div>
    )
}

export default Post;