import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Music Player</h2>
      <ul>
        <li><Link to="/">Now Playing</Link></li>
        <li><Link to="/all-songs">All Songs</Link></li>
        <li><Link to="/playlist">Playlists</Link></li>
        <li><Link to="/create-playlist">Create Playlist</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
