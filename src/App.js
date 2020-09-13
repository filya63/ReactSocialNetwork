import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import News from './components/MainContent/News/News';
import Music from './components/MainContent/Music/Music';
import Settings from './components/MainContent/Settings/Settings';
import FriendsContainer from './components/MainContent/Friends/FriendsContainer';
import {Route} from 'react-router-dom';
import DialogsContainer from './components/MainContent/Dialogs/DialogsContainer';
import ProfileContainer from './components/MainContent/Profile/ProfileContainer';

const App = (props) => {
  return (
      <div className="app-wrapper">
        <Header />
        <Navbar state={props.state.sidebarSection} />
        <div className='app-wrapper-content'>
          <Route path='/profile' render={ () => <ProfileContainer/>} />
          <Route path='/friends' render={ () => <FriendsContainer/>} />
          <Route path="/dialogs" render={ () => <DialogsContainer/>} />
          <Route path='/news' render={ () => <News />} />
          <Route path='/music' render={ () => <Music />} />
          <Route path='/settings' render={ () => <Settings />} />
        </div>
      </div>);
}

export default App;