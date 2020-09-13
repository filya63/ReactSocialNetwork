import React from 'react';
import s from './Profile.module.css';
import AddPost from "./MyPosts/AddPost/AddPost";
import Post from "./MyPosts/Post/Post";

const Profile = (props) => {
    let PostElements = props.profile.PostData.map(item => <Post key={item.id} message={item.message} like={item.like} />);
    
    return (
        <section className={s.profile}>
            <AddPost state={props.profile} updateTextCreator={props.updateTextPost} addPostCreator={props.addPost}/>
            {PostElements}
        </section>
    )
}

export default Profile;