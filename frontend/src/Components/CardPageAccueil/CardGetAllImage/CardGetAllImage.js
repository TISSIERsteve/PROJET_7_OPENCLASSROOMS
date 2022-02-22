import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";

// Components
import ImageOneComment from "../CardCommentOneImage/CardCommentOneImage";
import CardLike from "../CardLike/CardLike";
import CardGetAllCommentImage from "../CardGetAllCommentImage/CardGetAllCommentImage";

// CSS
import "./CardGetAllImage.css";

// Component pour afficher image sur page accueil
function CardGetAllImage() {
    const [affiImg, setaffiImg] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/api/posts")
            .then(response => {
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
                })
                : ""}
        </section>
    );
}

export default CardGetAllImage;
