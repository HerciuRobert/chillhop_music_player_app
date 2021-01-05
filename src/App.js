import React, {useState, useRef} from "react";
import "./styles/App.scss";

//adding components

import Player from "./components/Player";
import Song from "./components/Song";
import data from "./data";
import Library from "./components/Library";
import Nav from "./components/Nav";
import logo from "./img/podcats.png"



function App() {
  //Ref
  const audioRef = useRef(null);
  //create state
  const [songs, setSongs]= useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying]= useState(false);
  const [songInfo, setsongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
});
const [playlistStatus, setPlaylistStatus] = useState(false);

const timeUpdateHandler = (e) => {
  const current = e.target.currentTime;
  const duration = e.target.duration;
  //Calculate percentage
  const roundedCurrent = Math.round(current);
  const roundedDuration = Math.round(duration);
  const animation = Math.round((roundedCurrent/roundedDuration) * 100);
  setsongInfo({
    ...songInfo, 
    currentTime: current, 
    duration, 
    animationPercentage: animation
  });
};

const songEndHandler = async () => {
  let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1)%songs.length]);
    if(isPlaying) audioRef.current.play();
}

  return (
    <div className={`App ${playlistStatus ? "library-active" : ""}`}>
      {/* <img className="img-logo" src={logo} alt="Podcats"/> */}
      <Nav 
        playlistStatus={playlistStatus}
        setPlaylistStatus={setPlaylistStatus}
      />
      <Song currentSong={currentSong}/>
      <Player
        songInfo={songInfo}
        setsongInfo={setsongInfo}
        audioRef={audioRef}
        isPlaying={isPlaying} 
        setIsPlaying={setIsPlaying} 
        currentSong={currentSong}
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
      />
      <Library 
        songs={songs} 
        setCurrentSong={setCurrentSong} 
        audioRef={audioRef} 
        isPlaying={isPlaying} 
        setSongs={setSongs}
        playlistStatus={playlistStatus}
        />
        
      <audio 
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler} 
        ref={audioRef} 
        src={currentSong.audio}
        onEnded={songEndHandler}
      >
      </audio>
    </div>
  );
}

export default App;
