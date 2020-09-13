import React from 'react';
import s from './FriendsNav.module.css';

const FriendNavItem = (props) => {
    return (
        <div className={s.friendItem}>
            {props.name}
        </div>
    )
}

const FriendsNav = (props) => {
    let arrFriends = props.state.map(item => <FriendNavItem key={item.id} name={item.name} />);
    return (
        <div>
            <span className={s.navfriendblock}>Лучшие друзья</span>
            <div className={s.bestfriends}>
            {arrFriends}
            </div>
        </div>
    )
}

export default FriendsNav;