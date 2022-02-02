import React from "react";
import Axios from "axios";
import { Navigate } from "react-router-dom";

// Components
import Aside from "../../Components/Aside/Aside";
import Search from "../../Components/Search/Search";
import ButtonAside from "../../Components/ButtonAside/ButtonAside";
import SearchContainer from "../../Components/SearchContainer/SearchContainer";

// CSS
import "../ProfileScreen/ProfileScreen.css";

function ProfileScreen() {

    // Si token dans locale storage j'affiche
    if (localStorage.bearer) {

        // Récupère les publications de commentaire
        const getComments = () => {
            Axios.get(
                "http://localhost:3001/api/messagesPerso")
                .then((response) => {
                    const result = response.data.messageperso.resultat;
                    // console.log(response.data);

                    document.getElementById("items").innerHTML = result
                        .map(
                            x =>
                                `
                            <article id="card">
                            <img id="profileCommentImage" src="./images/img1.png" alt="logo Entreprise">
                                <h3 id="profileName">Le ${x.date} ${x.prenom}  de chez GROUPOMANIA</h3>
                                <p id="profileComment"><em><strong>à publier</strong></em> : ${x.commentaire} </p>
                                <div id="profileComments">
                                    <p> J'aime </p>
                                    <p> Commenter </p>
                                </div>
                                <div id="profilesCommentsInput">
                                <input id="profilesComments"
                                 placeholder="Ecrivez un commentaire..." 
                                </input>
                                </div><div id="valide">&#10162;</div>
                            </article>
                       `
                        )
                        .join("");
                });
        };
        // =============================== JSX ======================
        return (
            <div>
                {/* Component Button Aside */}
                <ButtonAside />

                {/* Component Aside */}
                <div id="open" className="aside_form">
                    <Aside />
                </div>

                {/* Components Search */}
                <div>
                    <Search />
                </div>

                {/* Component Search container */}
                <div className="container">
                    <SearchContainer />
                </div>

                {/*  Partie dynamique prénom et commentaires  */}
                <section id="items"></section>

                {getComments()}
            </div>
        );

        // Sinon pas de token return page accueil
    } else {
        return <Navigate to="/" />;
    }
}

export default ProfileScreen;
