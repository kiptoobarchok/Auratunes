import React from 'react';
import './NowPlaying.css';

const NowPlaying = () => {
  const currentSong = {
    title: 'Song Title',
    artist: 'Artist Name',
    cover: '' // Replace with your cover image path
  };

  return (
    <div className="now-playing">
      <img src={currentSong.cover} alt="Cover" />
      <h2>{currentSong.title}</h2>
      <h3>{currentSong.artist}</h3>
      <audio controls src="/public/songs/song1.mp3"></audio> {/* Replace with your current song path */}
    </div>
  );
};

export default NowPlaying;
