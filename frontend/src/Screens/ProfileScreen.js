import React from 'react';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';

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

        const commentRegex = /(.*[a-z]){3,30}/;
        const [commentaire, setcommentaire] = useState("")

        const addComment = (e) => {
            if (commentRegex.test(commentaire)) {
                console.log("ajout commentaire");
            }

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
                    <label htmlFor='commentaire'>Bonjour {storage}</label>
                </div>
                <div className='profileScreen_BarreRecherche'>
                    <input className='profileScreenInput'
                        id='commentaire'
                        type="text"
                        placeholder="Quoi de neuf aujourd' hui, poster un commentaire ?"
                        onChange={(event) => {
                            if (commentRegex.test(event.target.value)) {
                                setcommentaire(event.target.value)
                            } else {
                                console.log("erreur commentaire")
                            }
                        }}
                    ></input>
                    <i className="far fa-plus-square add"
                        onClick={addComment}
                    ></i>
                </div>
            </div>
            <div className='container'>
                <ul className='profileScreenTele'>
                    <li><i className="fas fa-camera"></i>Photo</li>
                    <li><i className="fas fa-video"></i>Vidéo</li>
                    <li><i className="fas fa-comments"></i>Messages privés</li>
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
