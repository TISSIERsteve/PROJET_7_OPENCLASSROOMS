import React from 'react';
import { Link } from "react-router-dom"

// ===== Components ajouter image =====
function AjouterImage() {

    return (
        <>
            <li>
                <Link to="/AddPickItem">
                    <i className="fas fa-camera"></i>
                </Link>
            </li>
        </>
    )
}

export default AjouterImage;