import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

// CSS
import "../Aside/Aside.css"

function Sidebar() {

    // ========================= Supprimer compte utilisateur ===============================
    const identite = JSON.parse(localStorage.id)

    const deleteUser = () => {
        if (window.confirm("Voulez vous supprimer définitivement votre compte ?")) {
            deleteUserDefini()
        }
    }

    const deleteUserDefini = () => {
        Axios.delete(`http://localhost:3001/api/auth/ ` + identite)
            .then((response) => {
                localStorage.clear()
                window.location.reload()
                alert("Vous venez de supprimé votre compte")
            })
    }
    // =========================================== Décconection =====================================
    const deconect = () => {
        if (window.confirm("Voulez vous vraiment vous déconnecter ?")) {
            deconectDefini()
        }
    }

    const deconectDefini = () => {
        localStorage.clear()
        window.location.reload()
    }

    // JSX
    return <div>
        <aside className="aside">
            <ul>
                {/* Deconnect */}
                <li className='aside_li'
                    onClick={deconect}>
                    <Link className='lienAside ' to="#"> Déconnection</Link>
                    <i className="fas fa-power-off"></i>
                </li>

                {/* Voir mes Publications */}
                <li>
                    <Link className='lienAside' to="/PersoProfileScreen">Voir mes publications</Link>
                </li>

                {/* Suppression compte */}
                <li>
                    <Link to="#" className='lienAside'
                        onClick={deleteUser}
                    >Desactiver mon compte</Link>
                </li>
            </ul>
        </aside>
    </div>;
}
export default Sidebar;
