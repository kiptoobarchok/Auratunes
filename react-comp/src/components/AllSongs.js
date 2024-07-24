import React from 'react';

const AllSongs = () => {
  const songs = [
    { title: 'Song 1', artist: 'Artist 1', src: '/home/caleb/Auratunes/react-comp/public/songs/Giveon - Lie Again (Official Lyric Video)_9Ly7L43buJU.mp3'},
    { title: 'Song 2', artist: 'Artist 2', src: '/home/caleb/Auratunes/react-comp/public/songs/Joyner Lucas - Devil\'s Work (ADHD)__WrMzFlLk7Q.mp3' }
  ];

  return (
    <div>
      <h1>All Songs</h1>
      <ul>
        {songs.map((song, index) => (
          <li key={index}>
            <h3>{song.title}</h3>
            <p>{song.artist}</p>
            <audio controls src={song.src}></audio>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllSongs;
