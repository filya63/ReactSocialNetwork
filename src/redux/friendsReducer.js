import React from 'react';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_FRIENDS = 'SET_FRIENDS';
const initialState = {
    friends: [
        {id: 1, name: 'Vladislav', avatar: 'https://sun9-35.userapi.com/c847121/v847121795/fffd6/n5kZXJQFaWg.jpg', location: {country: 'Russia', city: 'Samara'}, status: 'Hello, world!', follow: true},
        {id: 2, name: 'Olga', avatar: 'https://sun9-35.userapi.com/c847121/v847121795/fffd6/n5kZXJQFaWg.jpg', location: {country: 'Russia', city: 'Samara'}, status: "I'm SMM specialist", follow: true},
        {id: 3, name: 'Alex', avatar: 'https://sun9-35.userapi.com/c847121/v847121795/fffd6/n5kZXJQFaWg.jpg', location: {country: 'Ukraine', city: 'Donbass'}, status: 'I am Soldire', follow: false}
    ]
};

const friendsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                friends: state.friends.map(friend => {
                    if(friend.id === action.friendId) {
                        return {...friend, follow: true}
                    }
                    return friend;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                friends: state.friends.map(friend => {
                    if(friend.id === action.friendId) {
                        return {...friend, follow: false}
                    }
                    return friend;
                })
            }
        case SET_FRIENDS:
            return {
                ...state,
                friends: [...state.friends, ...action.friends]
            }
        default:
            return state;
    }
};

export const followActionCreator = (friendId) => ({type: FOLLOW, friendId});
export const unfollowActionCreator = (friendId) => ({type: UNFOLLOW, friendId});
export const setFriendsActionCreator = (friends) => ({type: SET_FRIENDS, friends})
export default friendsReducer;