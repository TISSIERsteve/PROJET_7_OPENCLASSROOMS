import React from 'react';
import { Link } from "react-router-dom"

// ===== Components ajouter video =====
function AddVideo() {

    return (
        <>
            <li>
                <Link to="/AddVideoItem">
                    <i className="fas fa-video"></i>
                </Link>
            </li>
        </>
    )
}

export default AddVideo;
