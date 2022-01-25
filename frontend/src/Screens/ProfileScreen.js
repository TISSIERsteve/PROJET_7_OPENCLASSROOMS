import React from 'react';

// CSS
import "../Styles.css/Screens.css/ProfileScreen.css"

function ProfileScreen() {

    const open = () => {
        document.getElementById("open").classList.toggle("active")
    }

    return <div>
        <button onClick={open}
            type="button"
            className="open-sidebar button_sidebar">
            <i className="fa fa-bars" />
        </button>
        <div id='open' className="aside_form">
            <aside className="aside">
                <ul>
                    <li className='aside_li'>Déconnection<i class="fas fa-power-off"></i></li>
                </ul>
            </aside>
        </div>
        Page profil</div>;
}

export default ProfileScreen;
