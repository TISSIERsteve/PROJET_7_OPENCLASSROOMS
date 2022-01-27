import React from 'react';

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
                    Déconnection <i className="fas fa-power-off"></i>
                </li>
            </ul>
        </aside>
    </div>;
}

export default Sidebar;
