import React from 'react';
import s from './AddPost.module.css';

const AddPost = (props) => {
    let addPost = () => {
       props.addPostCreator();
    };

    let updateTextPost = (event) => {
        let updateSymbol = event.target.value;
        props.updateTextCreator(updateSymbol);
    }
    let newPostText = props.state.newPost;
    return (
        <div className={s.addpost}>
            <input onChange={updateTextPost} value={newPostText} placeholder="О чем пост?"></input>
            <button onClick={addPost}>Отправить</button>
        </div>
    )
}

export default AddPost;