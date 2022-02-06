import React from 'react';

// ===== Page ajouter image =====
function AddPick() {
    const addCamera = () => {
        console.log("AddPhotos");
    }

    return (
        <>
            <li>
                <i className="fas fa-camera" onClick={addCamera}></i>
            </li>


        </>
    )
}

export default AddPick;
