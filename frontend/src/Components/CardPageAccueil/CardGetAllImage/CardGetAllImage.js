import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";

// Components
import GetComment from "../CardGetAllComment/CardGetComment";
import ImageOneComment from "../CardCommentOneImage/ImageOneComment";

// CSS
import "./CardGetAllImage.css";

// Component pour afficher image
function CardGetAllImage() {

    const [affiImg, setaffiImg] = useState([]);
    console.log(affiImg);

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

                                    {/* Components PostComment */}
                                    <ImageOneComment idPost={x.message_perso_id} />
                                </div>

                                {/* Components Get comment */}
                                <GetComment messageid={x.message_perso_id} />
                            </article>
                        </li>
                    );
                })
                : ""}
        </section>
    );
}

export default CardGetAllImage;
