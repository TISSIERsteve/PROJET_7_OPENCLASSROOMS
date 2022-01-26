import React from 'react';
import { Navigate } from 'react-router-dom';

// CSS
import "../Styles.css/Screens.css/ProfileScreen.css"

function ProfileScreen() {
    if (localStorage.bearer) {

        const open = () => {
            document.getElementById("open").classList.toggle("active")
        }
        const storage = JSON.parse(localStorage.prenom)

        let jour = new Date().toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
        });


        return <div>
            <button onClick={open}
                type="button"
                className="open-sidebar button_sidebar">
                <i className="fa fa-bars" />
            </button>
            <div id='open' className="aside_form">
                <aside className="aside">
                    <ul>
                        <li className='aside_li'
                            onClick={() => {
                                localStorage.clear();
                                window.location.reload()
                            }}
                        >
                            Déconnection<i className="fas fa-power-off"></i>
                        </li>
                    </ul>
                </aside>
            </div>
            <div>
                <div className='profileScreenPrenom'>
                    Bonjour {storage}
                </div>
                <div className='profileScreen_BarreRecherche'>
                    <input className='profileScreenInput' type="text" placeholder="Quoi de neuf aujourd' hui ?"></input>
                </div>
            </div>
            <div className='container'>
                <ul className='profileScreenTele'>
                    <li><i class="fas fa-camera"></i>Photo</li>
                    <li><i class="fas fa-video"></i>Vidéo</li>
                    <li><i class="fas fa-comments"></i>Messages privés</li>
                </ul>
            </div>

            <div className='profileScreenDate'>
                {jour}
            </div>
        </div>;
    } else {
        return <Navigate to="/"></Navigate>
    }
}

export default ProfileScreen;
