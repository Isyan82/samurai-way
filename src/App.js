import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = ({ state }) => {
  const { profilePage, dialogPage, sidebar } = state

  return (
    <div className='app__wrapper'>
      <Header />
      <Navbar data={sidebar} />
      <Routes>
        <Route exact path='/profile' element={<Profile data={profilePage} />} />
        <Route path='/dialogs' element={<Dialogs data={dialogPage} />} />
        <Route path='/news' element={<News />} />
        <Route path='/music' element={<Music />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
