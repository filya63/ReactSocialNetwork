import React from 'react';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {sendMessageCreator, updateMessageCreator} from '../../../redux/dialogsReducer';

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(sendMessageCreator());
        },
        updateMessage: (upText) => {
            dispatch(updateMessageCreator(upText));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);