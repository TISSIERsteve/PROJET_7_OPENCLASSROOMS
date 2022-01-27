import React from 'react';
import Axios from 'axios';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';

// CSS
import "../Styles.css/Screens.css/ProfileScreen.css"

function ProfileScreen() {

    // Barre de publication commentaire
    const [commentaire, setcommentaire] = useState("")
    const commentRegex = /(.*[a-z]){5,30}/;

    const addComment = () => {
        let prenom = JSON.parse(localStorage.prenom);

        if (commentRegex.test(commentaire)) {
            window.location.reload()
            Axios.post("http://localhost:3001/api/messagesPerso/:id", {
                prenom: prenom,
                commentaire: commentaire
            })
        } else {
            alert("Veuillez insérer un minimum de 5 caractères")
        }
    }
    // Fin

    // Si token dans locale storage
    if (localStorage.bearer) {

        const result = []

        // Récupère le prénom
        const storage = JSON.parse(localStorage.prenom)

        // Sidebar
        const open = () => {
            document.getElementById("open").classList.toggle("active")
        }

        // Récupère les publication de commentaire
        const getComments = () => {
            Axios.get("http://localhost:3001/api/messagesPerso/:id")
                .then((response) => {
                    console.log(response);
                    result.push(response.data.messageperso);
                    console.log(result);
                    document.getElementById("items").innerHTML =
                        result.map((x) =>

                            `
                        <article>
                            <a href="#">
                                <h3 className="descriptionPrenom">Message de : ${x.prenom}</h3>
                                <p className="descriptionCommentaire">Commentaire (s) : ${x.commentaire}</p>
                            </a>
                        </article>
                           `

                        )
                });
        };


        // Ajoute la date du jour
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
                    <label htmlFor='commentaire'>Bonjour {storage} comment vas tu aujourd'hui ?</label>
                </div>
                <div className='profileScreen_BarreRecherche'>
                    <input className='profileScreenInput'
                        id='commentaire'
                        type="text"
                        placeholder="Quoi de neuf, poster un commentaire ?"
                        onChange={(event) => {
                            if (commentRegex.test(event.target.value)) {
                                setcommentaire(event.target.value)
                                return
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
                    <li><i className="fas fa-comments"></i>Messages privés&nbsp;&nbsp;&nbsp; <span className='sms'>0</span></li>
                </ul>
            </div>

            <div className='profileScreenDate'>
                {jour}
            </div>

            <section id='items'></section>

            {getComments()}
        </div>;
    } else {
        return <Navigate to="/"></Navigate>
    }
}

export default ProfileScreen;
