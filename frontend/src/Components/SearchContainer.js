import React from 'react';

function SearchContainer() {
    return <div>
        <ul className='profileScreenTele'>
            <li><i className="fas fa-camera"></i>Photo</li>
            <li><i className="fas fa-video"></i>Vidéo</li>
            <li><i className="fas fa-comments"></i>Messages privés&nbsp;&nbsp;&nbsp; <span className='sms'>0</span></li>
        </ul>
    </div>;
}

export default SearchContainer;
