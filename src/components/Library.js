import React from 'react';
import LibrarySong from './LibrarySong'

const Library = ({songs, setCurrentSong, audioRef, isPlaying, setSongs, libraryStatus, theme}) => {
    return (
        <div className={`library ${libraryStatus ? `active-library` : ''} `}>
            <h2 className={`${theme}`}>Library</h2>
            <div className={` library-songs`}>
                {songs.map((song => <LibrarySong songs={songs} setCurrentSong={setCurrentSong} song={song}
                id={song.id}
                key={song.id}
                audioRef={audioRef}
                isPlaying={isPlaying}
                setSongs={setSongs}
                theme={theme}
                />))}
            </div>
        </div>
    )
}

export default Library;