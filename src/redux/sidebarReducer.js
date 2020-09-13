const initialState = {
    FriendData: [
        {
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
};

const sidebarReducer = (state = initialState, action) => {
    return state;
}
export default sidebarReducer;