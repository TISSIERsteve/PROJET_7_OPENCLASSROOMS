import React from 'react';
import { Link } from "react-router-dom"

// ===== Page ajouter image =====
function AddPick() {

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

export default AddPick;