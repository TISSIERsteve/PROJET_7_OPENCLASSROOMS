import React from 'react';
import { Link } from 'react-router-dom';

// CSS
import "../Aside/Aside.css"

function Sidebar() {
    return <div>
        <aside className="aside">
            <ul>
                <li className='aside_li'
                    onClick={() => {
                        localStorage.clear();
                        window.location.reload()
                    }}
                >
                    <Link className='lienAside ' to="#"> Déconnection</Link>
                    <i className="fas fa-power-off"></i>
                </li>
                <li>
                    <Link className='lienAside' to="/PersoProfileScreen">Voir mes publications</Link>
                </li>

            </ul>
        </aside>
    </div>;
}

export default Sidebar;
