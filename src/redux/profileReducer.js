const ADD_POST = 'ADD_POST';
const UPDATE_TEXT = 'UPDATE_TEXT';

const initialState = {
    PostData: [{
            id: 1,
            message: "MyFirstPost",
            like: 2
        },
        {
            id: 2,
            message: "Hello, my friend",
            like: 6
        },
        {
            id: 3,
            message: "Last post!",
            like: 1
        }
    ],
    newPost: ''
};

const profileReducer = (state = initialState, action) => {
    let stateCopy = {
        ...state
    };
    switch(action.type) {
        case ADD_POST:
            let newPost = {
                message: stateCopy.newPost,
                like: 0
            }
            stateCopy.PostData.push({id: 4, message: newPost.message, like: newPost.like});
            stateCopy.newPost = '';
            return stateCopy;
        case UPDATE_TEXT:
            stateCopy.newPost = action.newPostText;
            return stateCopy;
        default:
            return state;
    }
}

export const addPostCreator = () => ({type: ADD_POST});
export const updateTextCreator = (upText) => ({type: UPDATE_TEXT, newPostText: upText})
export default profileReducer;