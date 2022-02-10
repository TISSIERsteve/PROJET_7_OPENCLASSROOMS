import React from 'react';
import { useState } from "react"
import Axios from 'axios';

// CSS
import "./CardPostComment.css"

// ===== Components ajout commentaire dans card sur Page principal accueil =====
function CardPostComment(props) {

    const [isActive, setisActive] = useState("")

    // Ouverture fenêtre de des commentaires que l'on nous a poster
    const handleShow = () => {
        if (isActive === "active") {
            setisActive("")

        } else {
            setisActive("active")
        }
    }
    // Ajouter un commentaire sur un message
    const compte = JSON.parse(localStorage.id)
    const prenom = JSON.parse(localStorage.prenom)
    const [commentaires, setcommentaires] = useState('')

    const commentRegex = /(.*[a-z]){5,30}/;

    // Fonction ajout commentaire
    const addCommentUser = () => {
        if (window.confirm(`${prenom} êtes vous sur de vouloir publier votre commentaire`)) {
            addCommentUserDefini()
        } else {
            window.location.reload()
        }
    }

    const addCommentUserDefini = () => {
        if (commentRegex.test(commentaires)) {
            Axios.post("http://localhost:3001/api/comments", {
                commentaires,
                compte,
                id_post: props.idPost
            })
                .then(() => {
                    alert(`${prenom} vous venez de commenter `);
                    window.location.reload()
                })
                .catch(err => {
                    alert("Une erreur est survenue, veuillez réessayer");
                });
        } else {
            alert("Veuillez insérer un minimum de 5 caractères")
        }
    }

    // JSX
    return (
        <>
            <p className='boutton_commenter' onClick={handleShow}>Commenter</p>
            <div className={`profilesCommentsInput open ${isActive}`}>
                <label></label>
                <input className="profilesComments"
                    id='commentaires'
                    type="text"
                    placeholder="Commentez la publication"
                    onChange={(event) => {
                        if (commentRegex.test(event.target.value)) {
                            setcommentaires(event.target.value)
                            return
                        }
                    }}
                ></input>

                <i className="fas fa-plus-circle valide" onClick={addCommentUser}></i>

            </div>
        </>
    )
}
export default CardPostComment;