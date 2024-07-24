import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import NowPlaying from './components/NowPlaying';
import Playlist from './components/Playlist';
import AllSongs from './components/AllSongs';
import CreatePlaylist from './components/CreatePlaylist';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<NowPlaying />} />
            <Route path="/playlist" element={<Playlist />} />
            <Route path="/create-playlist" element={<CreatePlaylist />} />
            <Route path="/all-songs" element={<AllSongs />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
