import React from 'react';

//SONG IS FOR THE SONG NAME, COVER, ARTIST

const LibrarySong = ({song, songs, setCurrentSong, id, audioRef,isPlaying, setSongs, theme}) => {
    const songSelectHandler = async () => {
        const selectedSong = songs.filter((state => state.id === id))
       await  setCurrentSong(selectedSong[0]);
        //add active state for when changed the song to be highlighted
        const newSongs = songs.map((song)=>{
            if(song.id === id){
                return{
                    ...song,
                    active: true,
                }
            }else{
                return{
                    ...song,
                    active: false,
                }
            }
        });
        setSongs(newSongs)
        if(isPlaying) audioRef.current.play();

    }
    return(
      <div onClick={songSelectHandler} className={`library-song ${theme} ${song.active ? 'selected' : ''}`} >
          <img src={song.cover} alt={song.name}/>
          <div className='song-description'>
          <h3>{song.name}</h3>
          <h4>{song.artist}</h4>
          </div>
       </div>
    )
}

export default LibrarySong;