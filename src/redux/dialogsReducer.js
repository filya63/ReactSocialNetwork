export const ADD_MESSAGE = 'ADD_MESSAGE';
export const UPDATE_MESSAGE = 'UPDATE_MESSAGE';

const initialState = {
    DialogsData: [{
            id: 1,
            name: "Olya"
        },
        {
            id: 2,
            name: "Vladislav"
        },
        {
            id: 3,
            name: "Sergey"
        }
    ],
    MessageData: [{
            id: 1,
            message: "Hi!"
        },
        {
            id: 2,
            message: "Hello, bro"
        }
    ],
    newMessage: ''
};

const dialogsReducer = (state = initialState, action) => {
    let stateCopy = {
        ...state
    }
    switch(action.type) {
        case ADD_MESSAGE:
            let newMessage = state.newMessage;
            stateCopy.newMessage = '';
            stateCopy.MessageData.push({id: 3, message: newMessage});
            return stateCopy
            /* let newMessage = state.newMessage;
            state.MessageData.push({id: 3, message: newMessage});
            state.newMessage = '';
            return state; */
        case UPDATE_MESSAGE:
            stateCopy.newMessage = action.newMessage;
            return stateCopy;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: ADD_MESSAGE});
export const updateMessageCreator = (upText) => ({type: UPDATE_MESSAGE, newMessage: upText})
export default dialogsReducer;