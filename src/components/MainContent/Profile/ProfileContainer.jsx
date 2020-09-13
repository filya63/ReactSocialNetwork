import React from 'react';
import {connect} from 'react-redux';
import Profile from './Profile';
import {addPostCreator, updateTextCreator} from '../../../redux/profileReducer';

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostCreator());
        },
        updateTextPost: (upText) => {
            dispatch(updateTextCreator(upText));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);