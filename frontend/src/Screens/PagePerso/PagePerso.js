import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";

// Component
import SeeComment from "../../Components/CardPagePerso/CardGetAllComment/CardGetAllComment";
import CardGetAllImage from "../../Components/CardPagePerso/CardGetallImage/CardGetAllImage";

// CSS
import "./PagePerso.css";

// ===== Page perso avec voir toutes mes publications =====
function PagePerso() {

    const navigate = useNavigate();

    const prenom = JSON.parse(localStorage.prenom);

    // Afficher tous les messages
    const identifiant = JSON.parse(localStorage.id);
    const [post, setpost] = useState("");

    useEffect(
        () => {
            Axios.get("http://localhost:3001/api/messagesPerso/" + identifiant)
                .then(response => {
                    setpost(response.data.result);
                })
                .catch(err => {
                    if (err.response.data.message === "jwt expired") {
                        alert("Votre session est expiré veuillez vous reconnecter");
                        localStorage.clear();
                        // Et je redirige sur page d'acceuil
                        navigate("/AccountScreen", { replace: true });
                    }
                });
        },
        [identifiant, navigate]
    );

    // Modifier notre message
    const modifyCom = (e, id) => {
        console.log(e, id);

    }

    // const modifyComDefini = (id) => {
    //     if (window.confirm("Voulez vous vraiment modifier ce message")) {
    //         modifyComDefini(id)
    //     }
    //     Axios.get("http://localhost:3001/api/messagePerso/" + id)
    //         .then((response) => {
    //             console.log(response)
    //         })
    // }


    // Supprimer un message
    const deleteCom = e => {
        if (window.confirm("Voulez vous vraiment supprimer ce message ?")) {
            deleteDefini(e);
        }
    };

    const deleteDefini = id => {
        Axios.delete(
            "http://localhost:3001/api/messagesPerso/" + id
        ).then(response => {
            alert("Votre message à bien été supprimé");
            window.location.reload();
        });
    };

    // JSX
    return (
        <div>
            <Link to="/ProfileScreen">
                <i className="fas fa-arrow-left flecheGauche" /> retour
            </Link>

            {/*  Partie dynamique mes messages perso   */}
            <section className="itemsPerso">
                <div className="persoprofilescreen_prenom">
                    <h3>
                        Voici vos publications {prenom}
                    </h3>
                </div>


                {/* Component pour obtenir images page perso */}
                <CardGetAllImage />

                {post && post.length
                    ? post.map(x => {
                        return (
                            <li key={x.fk_id_user}>

                                <article className="card">
                                    <div className="cardProfilePerso">
                                        <img
                                            className="profileCommentImage"
                                            src="./images/img1.png"
                                            alt="logo Entreprise"
                                        />
                                    </div>
                                    <h3 className="profileName">
                                        {x.prenom} <br /> {x.date}
                                    </h3>
                                    <p className="profileComment">
                                        {" "}{x.commentaire}{" "}
                                    </p>
                                    <div className="pen">
                                        <button onClick={() => modifyCom(x.commentaire, x.message_perso_id)}>
                                            <span>
                                                <i className="fas fa-edit stylo" />
                                            </span>
                                        </button>
                                    </div>

                                    {/* Components Seecomment */}
                                    <SeeComment identite={x.message_perso_id} />

                                    <div className="trash">
                                        <button onClick={() => deleteCom(x.message_perso_id)}>
                                            <span>
                                                <i className="fas fa-trash-alt poubelle" />
                                            </span>
                                        </button>
                                    </div>
                                </article>
                            </li>
                        );
                    })
                    : <h3 className="profileScreenEntete">
                        Vous n'avez rien publier pour le moment
                    </h3>}
            </section>
        </div>
    );
}
export default PagePerso;
