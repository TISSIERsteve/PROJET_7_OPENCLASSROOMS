import React from 'react';

// CSS
import "../SearchContainer/SearchContainer.css"

function SearchContainer() {

    const addCamera = () => {
        console.log("AddPhotos");
    }

    const addVideo = () => {
        console.log("AddVideo");
    }

    const seeSms = () => {
        console.log("Voir messages");
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

            <li
                onClick={seeSms}><i className="fas fa-comments comments"></i>&nbsp;&nbsp;&nbsp;
                <span className='sms'>0</span>
            </li>
        </ul>
    </div>;
}

export default SearchContainer;
