import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";

// ===== Components pour voir commentaires images dans card page principal accueil ===== 
function CardGetAllCommentImage(props) {

    const commentRegex = /(.*[a-z]){5,30}/;
    const authUser = parseInt(localStorage.id, 10)
    const prenom = JSON.parse(localStorage.prenom)
    const [messageItem, setmessageItemModify] = useState('')

    // Obtenir un commentaire poster sur une image
    const [com, setcom] = useState("");

    // Ouverture commentaire image poster page accueil
    const [isGetActive, setGetisActive] = useState("");
    const openFieldset = () => {
        if (isGetActive === "active") {
            setGetisActive("");
        } else {
            setGetisActive("active");
        }
    };

    useEffect(
        () => {
            Axios.get(
                `http://localhost:3001/api/contentImg/${props.commentIdy}`
            ).then(response => {
                setcom(response.data.result);
            });
        },
        [props.commentIdy]
    );

    // Fonctions supprimer commentaire page accueil sur image
    const handleDelete = async (id) => {
        if (window.confirm(`${prenom} êtes vous sur de vouloir supprimer votre commentaire`)) {
            try {
                await Axios.delete(`http://localhost:3001/api/comments/${id}`)
                setcom(com.filter((x) => x.comment_id !== id))
                alert("Votre commentaire à bien été supprimer")
            }
            catch (error) {
                alert("Une erreur s'est produite lors de lasuppression du commentaire, veuillez réessayer")
            }
        }
    }

    // Fonction modifier commentaire page accueil sur image
    const [isModify, setisModify] = useState("")

    const handleEdit = () => {
        if (isModify === "active") {
            setisModify("")

        } else {
            setisModify("active")
        }
    }

    const addModify = () => {
        if (window.confirm(`${prenom} êtes vous sur de vouloir modifier votre message`)) {
            addModifyDefini()
        }
        else {
            window.location.reload()
        }
    }
    const addModifyDefini = (id) => {
        if (commentRegex.test(messageItem)) {
            // Axios.put("http://localhost:3001/api/comments/" + authUser, {
            //     commentaire: messageItem,
            // })
            //     .then(() => {
            //         alert(`${prenom} vous venez de modifier votre message `);
            //         window.location.reload()
            //     })
            //     .catch(err => {
            //         alert("Une erreur est survenue, veuillez réessayer");
            //     });
        } else {
            alert("Veuillez insérer un minimum de 5 caractères")
        }
    }

    // JSX
    return (
        <div className="get">
            <fieldset className="fieldset" onClick={openFieldset}>
                <legend className="getcomment_fieldset">Voir les commentaires</legend>
                <section className={`getsection ${isGetActive}`}>
                    {com && com.length
                        ? com.map(x => {
                            return (
                                <ul key={x.comment_id} className="getcomment">
                                    <li className="getcomment_prenom">
                                        {x.prenom} vous à commenter :
                                    </li>
                                    <li className="getcomment_content">
                                        {x.content}

                                        {/* Si user correspond pour modifier ou effacer commentaire */}
                                        {
                                            authUser === x.user_id &&
                                            <div>
                                                {/* Modifier commentaire image page accueil*/}
                                                <div className={`section_modify_comment_accueil ${isModify}`}>
                                                    <label></label>
                                                    <input className="accueil_input"
                                                        id='commentaires'
                                                        type="text"
                                                        placeholder="Modifier le message"
                                                        onChange={(event) => {
                                                            if (commentRegex.test(event.target.value)) {
                                                                setmessageItemModify(event.target.value)
                                                                return
                                                            }
                                                        }}
                                                    ></input>

                                                </div>

                                                <div className="validate_accueil">

                                                    {/* Boutton modifier message image page accueil */}
                                                    <button className="deleModif" onClick={handleEdit}>
                                                        <i className="fas fa-edit stylo" />
                                                    </button>

                                                    {/* Boutton effacer message iamge page accueil */}
                                                    <button className="deleModif" onClick={() => handleDelete(x.comment_id)}>
                                                        <i className="fas fa-trash-alt poubelle" />
                                                    </button>

                                                    {/* Boutton valider modification commentaire image */}
                                                    <button className='deleModif'>
                                                        <i className="fas fa-plus-circle accueil" onClick={addModify}></i>
                                                    </button>

                                                </div>
                                            </div>
                                        }
                                    </li>
                                </ul>
                            );
                        })
                        : <li>Vous avez aucun commentaire</li>}
                </section>
            </fieldset>
        </div>
    );
}
export default CardGetAllCommentImage;
