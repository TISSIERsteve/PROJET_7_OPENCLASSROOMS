import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";

// Components
import CardGetAllCommentImage from "../CardGetAllCommentImage/CardGetAllCommentImage";

// Component pour afficher mes images sur page perso
function CardGetAllImage() {
    const identite = JSON.parse(localStorage.id);

    const [affiImg, setaffiImg] = useState([]);

    // Supprimer image page perso
    const deleteImg = e => {
        if (window.confirm("Voulez vous vraiment supprimer votre image ?")) {
            deleteImgDefini(e);
        }
    };

    const deleteImgDefini = id => {
        Axios.delete("http://localhost:3001/api/posts/" + id).then(response => {
            alert("Votre image à bien été supprimé");
            window.location.reload();
        });
    };

    useEffect(
        () => {
            Axios.get(
                "http://localhost:3001/api/posts/" + identite
            ).then(response => {
                setaffiImg(response.data.result);
            });
        },
        [identite]
    );

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

                                <div className="pen">
                                    <button>
                                        <span>
                                            <i className="fas fa-edit stylo" />
                                        </span>
                                    </button>
                                </div>

                                {/* Components pour voir commentaires image page perso */}
                                <CardGetAllCommentImage idImg={x.post_id} />

                                <div className="trash">
                                    <button onClick={() => deleteImg(x.post_id)}>
                                        <i className="fas fa-trash-alt poubelle" />
                                    </button>
                                </div>
                            </article>
                        </li>
                    );
                })
                : ""}
        </section>
    );
}

export default CardGetAllImage;
