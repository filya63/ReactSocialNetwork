import {createStore, combineReducers} from 'redux';
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import sidebarReducer from './sidebarReducer';
import friendsReducer from './friendsReducer';

export const reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sidebarSection: sidebarReducer,
    FriendsPage: friendsReducer
})

const store = createStore(reducers); // уже есть методы getState, subscribe, dispatch

export default store;