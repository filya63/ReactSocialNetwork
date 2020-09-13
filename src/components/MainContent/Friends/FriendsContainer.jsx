import React from 'react';
import Friends from './Friends';
import {connect} from 'react-redux';
import {followActionCreator, unfollowActionCreator, setFriendsActionCreator} from './../../../redux/friendsReducer';

let mapStateToProps = (state) => {
    return {
        friends: state.FriendsPage.friends
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId));
        },
        setFriends: (friends) => {
            dispatch(setFriendsActionCreator(friends));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Friends);