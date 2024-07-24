import React from 'react';

const Playlist = () => {
  const playlists = [
    { name: 'Playlist 1', songs: ['Song 1', 'Song 2'] },
    { name: 'Playlist 2', songs: ['Song 3', 'Song 4'] }
  ];

  return (
    <div>
      <h1>Playlists</h1>
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
  );
};

export default Playlist;
