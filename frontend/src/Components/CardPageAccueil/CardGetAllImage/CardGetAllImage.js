import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";

// Components
import ImageOneComment from "../CardCommentOneImage/ImageOneComment";

// CSS
import "./CardGetAllImage.css";
import CardGetAllCommentImage from "../CardGetAllCommentImage/CardGetAllCommentImage";

// Component pour afficher image sur page accueil
function CardGetAllImage() {
    const [affiImg, setaffiImg] = useState([]);

    useEffect(() => {
        // Affichage de toutes les images postées
        Axios.get("http://localhost:3001/api/posts").then(response => {
            setaffiImg(response.data.result);
        });
    }, []);

    return (
        <section className="items">
            {affiImg && affiImg.length
                ? affiImg.map(x => {
                    return (
                        <li key={x.post_id}>
                            <article className="card">
                                <img
                                    className="profileCommentImage"
                                    src="./images/img1.png"
                                    alt="logo Entreprise"
                                />
                                <h3 className="profileName">
                                    {x.prenom} à publier<br />
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
                                    <p className="boutton_commenter">J'aime</p>

                                    {/* Components poster un commentaire sur image page accueil */}
                                    <ImageOneComment idy={x.post_id} />
                                </div>

                                {/* Components voir commentaire sur une image page accueil */}
                                <CardGetAllCommentImage />
                            </article>
                        </li>
                    );
                })
                : ""}
        </section>
    );
}

export default CardGetAllImage;
