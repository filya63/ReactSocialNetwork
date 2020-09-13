let store = {
    _state: {
        /* dialogsPage: {
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
                    message: "Hi!"
                },
                {
                    message: "Hello, bro"
                }
            ]
        }, */
        /* profilePage: {
            PostData: [{
                    id: 0,
                    message: "MyFirstPost",
                    like: 2
                },
                {
                    id: 1,
                    message: "Hello, my friend",
                    like: 6
                },
                {
                    id: 2,
                    message: "Last post!",
                    like: 1
                }
            ],
            newPostText: ''
        }, */
        /* sidebarSection: {
            FriendData: [{
                    id: 0,
                    name: "Olya",
                    status: "ONLINE"
                },
                {
                    id: 1,
                    name: "Vasya",
                    status: "OFFLINE"
                },
                {
                    id: 2,
                    name: "Arthur",
                    status: "OFFLINE"
                }
            ]
        } */
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('state changed');
    },
    /* addNewPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            like: 0
        }
        this._state.profilePage.PostData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber();
    },
    updateNewText(text) {
        this._state.profilePage.newPostText = text;
        this._callSubscriber();
    }, */
    subscribe(observer) {
        this._callSubscriber = observer;
    }
};

window.store = store;
export default store;