import React, { useState, useEffect } from "react";
import Axios from "axios";

// Components
import PostComment from "../CardPostOneComment/CardPostComment";
import GetComment from "../CardGetAllComment/CardGetComment";
import GetAllImage from "../CardGetAllImage/CardGetAllImage";

// CSS
import "./CardPrincipal.css";
import { useNavigate } from "react-router-dom";

// ===== Components Card Page principal accueil =====
function CardPrincipal() {

    const navigate = useNavigate();

    // Affichage de tous les messages
    const [post, setpost] = useState("");

    useEffect(
        () => {
            // Affichage de tous les messages postés
            Axios.get("http://localhost:3001/api/messagesPerso")
                .then(response => {
                    setpost(response.data.messageperso.resultat);
                })
                .catch(err => {
                    console.log(err);
                    if (err.response.data.message === "jwt expired") {
                        alert("Votre session est expiré veuillez vous reconnecter");
                        localStorage.clear();
                        // Et je redirige sur page d'acceuil
                        navigate("/AccountScreen", { replace: true });
                    }
                });
        },
        [navigate]
    );

    // JSX
    return (
        <div>
            <section className="items">
                {/* Components obtenir image */}
                <GetAllImage />

                {post && post.length
                    ? post.map(x => {
                        return (
                            <li key={x.message_perso_id}>
                                <article className="card">
                                    <img
                                        className="profileCommentImage"
                                        src="./images/img1.png"
                                        alt="logo Entreprise"
                                    />
                                    <h3 className="profileName">
                                        {x.prenom} à publier<br />
                                        {x.date}
                                    </h3>
                                    <p className="profileComment">
                                        {" "}{x.commentaire}{" "}
                                    </p>
                                    <div className="profileComments">
                                        <p className="boutton_commenter">J'aime</p>

                                        {/* Components PostComment */}
                                        <PostComment idPost={x.message_perso_id} />
                                    </div>

                                    {/* Components Get comment */}
                                    <GetComment messageid={x.message_perso_id} />
                                </article>
                            </li>
                        );
                    })
                    : <h3 className="profileScreenEntete">
                        Il y a aucune publication pour le moment
                    </h3>}
            </section>
        </div>
    );
}

export default CardPrincipal;
