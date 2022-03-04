import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMusic} from '@fortawesome/free-solid-svg-icons';

const Nav = ({setLibraryStatus, libraryStatus, theme, setTheme}) => {
    return(
        <nav>
            <div className='header'>
            <h1 className={`${theme}`}>Waves</h1>
            <button onClick={() => setLibraryStatus(!libraryStatus)} className={`${theme}`}>
                    Library
                <FontAwesomeIcon icon={faMusic}/>
            </button>
            </div>
             <select className={`${theme}`} value={theme} onChange={(e) =>  setTheme(e.target.value)}>
                 <option value='light'>Light</option>
                 <option value='dark'>Dark</option>
                 
             </select>
        </nav>
    )
}

export default Nav;