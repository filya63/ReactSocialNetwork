import React from 'react';
import styles from './Friends.module.css';

const Friends = (props) => {
    debugger;
    return (
        <div className={styles.list}>
            {
                props.friends.map(friend => <div className={styles.item} key={friend.id}>
                    <div className={styles.itemAvatarFollow}>
                        <img src={friend.avatar} className={styles.itemAvatar} alt="avatar" />
                        {
                        friend.follow ?
                            <button onClick={() => {props.unfollow(friend.id)}}>Follow</button> :
                            <button onClick={() => {props.follow(friend.id)}}>Unfollow</button>
                        }
                    </div>
                    <div className={styles.itemInfo}>
                        <div className="friendItem__container">
                            <div className="friendItem__info-name">
                                {friend.name}
                            </div>
                            <div className="friendItem__info-status">
                                {friend.status}
                            </div>
                        </div>
                        <div className="friendItem__container">
                            <div className="friendItem__info-country">
                                {friend.location.country}
                            </div>
                            <div className="friendItem__info-city">
                                {friend.location.city}
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
};

export default Friends;