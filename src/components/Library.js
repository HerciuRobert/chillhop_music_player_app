import React from 'react';
import LibrarySong from './LibrarySong';

const Library = ({ songs, setCurrentSong, audioRef, isPlaying, setSongs, playlistStatus }) => {
    return (
        <div className = {`library ${playlistStatus ? "active-playlist" : ""}`}>
            <h2>Playlist</h2>
            <div className="library-songs">
                {songs.map((song) => (
                    <LibrarySong 
                        songs={songs} 
                        setCurrentSong={setCurrentSong} 
                        song={song} 
                        id={song.id}
                        key= {song.id}
                        audioRef={audioRef}
                        isPlaying={isPlaying}
                        setSongs={setSongs}
                    />
                ))}
            </div>
        </div>
    );
};

export default Library;