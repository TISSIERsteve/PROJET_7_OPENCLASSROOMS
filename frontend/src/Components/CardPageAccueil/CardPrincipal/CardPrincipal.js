// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Axios from "axios";

// // Components
// import PostComment from "../CardPostOneComment/CardPostOneComment";
// import GetAllImage from "../CardGetAllImage/CardGetAllImage";
// import GetComment from "../CardGetAllComment/CardGetAllComment";
// import CardLike from "../CardLike/CardLike";

// // CSS
// import "./CardPrincipal.css";

// // ===== Components Card Page principal accueil =====
// function CardPrincipal() {

//     const navigate = useNavigate();

//     const [post, setpost] = useState("");

//     useEffect(
//         () => {
//             // Affichage de tous les messages postés de tous les users
//             Axios.get("http://localhost:3001/api/messagesPerso")
//                 .then(response => {
//                     setpost(response.data.messageperso.resultat);
//                 })
//                 .catch(err => {
//                     if (err.response.data.message === "jwt expired") {
//                         alert("Votre session est expiré veuillez vous reconnecter");
//                         localStorage.clear();

//                         navigate("/AccountScreen", { replace: true });
//                     }
//                 });
//         },
//         [navigate]
//     );
//     // JSX
//     return (
//         <div>
//             <section className="items">

//                 {/* Components obtenir image */}
//                 <GetAllImage />

//                 {post && post.length
//                     ? post.map(x => {
//                         return (
//                             <li key={x.message_perso_id}>
//                                 <article className="card">
//                                     <img
//                                         className="profileCommentImage"
//                                         src="./images/img1.png"
//                                         alt="logo Entreprise"
//                                     />
//                                     <h3 className="profileName">
//                                         {x.prenom} à publier<br />
//                                         {x.date}
//                                     </h3>
//                                     <p className="profileComment">
//                                         {" "}{x.commentaire}{" "}
//                                     </p>

//                                     <div className="profileComments">
//                                         {/* Components pour like */}
//                                         <CardLike></CardLike>

//                                         {/* Components poster un commentaire sur un message page accueil */}
//                                         <PostComment idPost={x.message_perso_id} />
//                                     </div>

//                                     {/* Components voir commentaire sur un message page accueil */}
//                                     <GetComment messageid={x.message_perso_id} />

//                                 </article>
//                             </li>
//                         );
//                     })
//                     : <h3 className="profileScreenEntete">
//                         Il y a aucune publication pour le moment
//                     </h3>}
//             </section>
//         </div>
//     );
// }

// export default CardPrincipal;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

// Components
import PostComment from "../CardPostOneComment/CardPostOneComment";
import GetComment from "../CardGetAllComment/CardGetAllComment";
import ImageOneComment from "../CardCommentOneImage/CardCommentOneImage";
import CardLike from "../CardLike/CardLike";
import CardGetAllCommentImage from "../CardGetAllCommentImage/CardGetAllCommentImage";

// CSS
import "./CardPrincipal.css";

// ===== Components Card Page principal accueil =====
function CardPrincipal() {

    const navigate = useNavigate();
    // let isAdmin = parseInt(localStorage.isAdmin, 10);

    // Affichage de tous les messages et images postés
    const [post, setpost] = useState("");

    useEffect(() => {
        Axios.get("http://localhost:3001/api/messagesPerso")
            .then((response) => {
                setpost(response.data.messageperso.resultat);
            })
            .catch((err) => {
                if (err.response.data.message === "jwt expired") {
                    alert("Votre session est expiré veuillez vous reconnecter");
                    localStorage.clear();

                    navigate("/AccountScreen", { replace: true });
                }
            });
    }, [navigate]);

    // JSX
    return (
        <div>
            <section className="items">

                {post && post.length ? (
                    post.map((x) => {
                        if (x.message_perso_id) {
                            const date = new Date(x.date);

                            return (
                                <li key={x.message_perso_id}>
                                    <article className="card">
                                        <img
                                            className="profileCommentImage"
                                            src="./images/img1.png"
                                            alt="logo Entreprise"
                                        />
                                        <h3 className="profileName">
                                            {x.prenom} à publier
                                            <br />
                                            {`Le ${date.getDate()} ${date.getMonth() + 1
                                                } ${date.getFullYear()} à ${date.getHours()}:${date.getMinutes()}`}
                                        </h3>
                                        <p className="profileComment"> {x.commentaire} </p>

                                        <div className="profileComments">
                                            {/* Components pour like */}
                                            <CardLike></CardLike>

                                            {/* Components poster un commentaire sur un message page accueil */}
                                            <PostComment idPost={x.message_perso_id} />
                                        </div>

                                        {/* Components voir commentaire sur un message page accueil */}
                                        <GetComment messageid={x.message_perso_id} />

                                        {/* Fonction administrateur
                                        {
                                            isAdmin !== 1 ||
                                            <button>
                                                <i className="fas fa-trash-alt poubelle" />
                                            </button>
                                        } */}

                                    </article>
                                </li>
                            );

                        } else {

                            const date = new Date(x.date);

                            return (
                                <li key={x.post_id}>
                                    <article className="card">
                                        <img
                                            className="profileCommentImage"
                                            src="./images/img1.png"
                                            alt="logo Entreprise"
                                        />
                                        <h3 className="profileName">
                                            {x.content}  à publier
                                            <br></br>
                                            {`Le ${date.getDate()} ${date.getMonth() + 1
                                                } ${date.getFullYear()} à ${date.getHours()}:${date.getMinutes()}`}
                                            <br />
                                            {x.created_at}
                                            <img
                                                className="getAllImage_image"
                                                src={x.media_url}
                                                alt=""
                                            />
                                        </h3>
                                        <p className="profileComment">
                                            <em>
                                                <strong>Légende</strong>
                                            </em>{" "}
                                            : {x.title}{" "}
                                        </p>
                                        <div className="profileComments">
                                            {/* Component pour like */}
                                            <CardLike></CardLike>

                                            {/* Components poster un commentaire sur image page accueil */}
                                            <ImageOneComment idy={x.post_id} />
                                        </div>

                                        {/* Components voir commentaire sur une image page accueil */}
                                        <CardGetAllCommentImage commentIdy={x.post_id} />
                                    </article>
                                </li>
                            );
                        }
                    })
                ) : (
                    <h3 className="profileScreenEntete">
                        Il y a aucune publication pour le moment
                    </h3>
                )}
            </section>
        </div>
    );
}

export default CardPrincipal;
