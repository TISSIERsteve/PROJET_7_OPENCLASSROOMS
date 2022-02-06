import React from 'react';

// ===== Page ajouter video =====
function AddVideo() {
    const addVideo = () => {
        console.log("AddVideo");
    }

    return (
        <>
            <li
                onClick={addVideo}><i className="fas fa-video"></i>
            </li>
        </>
    )
}

export default AddVideo;
