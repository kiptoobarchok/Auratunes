import React, { useState } from 'react';

const CreatePlaylist = () => {
  const [playlistName, setPlaylistName] = useState('');
  const [songs, setSongs] = useState('');
  const [playlists, setPlaylists] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPlaylist = {
      name: playlistName,
      songs: songs.split(',').map((song) => song.trim())
    };
    setPlaylists([...playlists, newPlaylist]);
    setPlaylistName('');
    setSongs('');
  };

  return (
    <div>
      <h1>Create Playlist</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Playlist Name:</label>
          <input
            type="text"
            value={playlistName}
            onChange={(e) => setPlaylistName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Songs (comma separated):</label>
          <input
            type="text"
            value={songs}
            onChange={(e) => setSongs(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create Playlist</button>
      </form>
      <div>
        <h2>Created Playlists</h2>
        <ul>
          {playlists.map((playlist, index) => (
            <li key={index}>
              <h3>{playlist.name}</h3>
              <ul>
                {playlist.songs.map((song, idx) => (
                  <li key={idx}>{song}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CreatePlaylist;
