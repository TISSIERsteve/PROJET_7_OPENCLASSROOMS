import React from 'react';
import { Link } from "react-router-dom"

// CSS
import "../SearchContainer/SearchContainer.css"


// Page de la barre search publication
function SearchContainer() {

    const addCamera = () => {
        console.log("AddPhotos");
    }

    const addVideo = () => {
        console.log("AddVideo");
    }

    // JSX
    return <div>
        {/* Barre container */}
        <ul className='profileScreenTele'>
            <li>
                <i className="fas fa-camera" onClick={addCamera}></i>
            </li>

            <li
                onClick={addVideo}><i className="fas fa-video"></i>
            </li>
        </ul>
    </div>;
}

export default SearchContainer;
