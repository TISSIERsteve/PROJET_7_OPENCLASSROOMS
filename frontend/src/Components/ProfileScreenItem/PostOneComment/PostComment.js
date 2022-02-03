import React from 'react';
import { useState } from "react"
import Axios from 'axios';

// CSS
import "./PostComment.css"

function PostComment() {
    // ======================== Ajouter un commentaire sur un message ====================================
    const compte = JSON.parse(localStorage.id)
    const prenom = JSON.parse(localStorage.prenom)
    const [commentaires, setcommentaires] = useState('')

    const commentRegex = /(.*[a-z]){5,30}/;

    // Fonction ajout commentaire
    const addCommentUser = () => {
        if (window.confirm("Etes vous sur de vouloir publier votre commentaire")) {
            addCommentUserDefini()
        }
    }

    const addCommentUserDefini = () => {
        if (commentRegex.test(commentaires)) {
            Axios.post("http://localhost:3001/api/comments", {
                commentaires,
                compte
            })
                .then(() => {
                    alert(`Bravo ${prenom} ton commentaire est maintenant visible sur GROUPOMANIA`);
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
    return <div className='profilesCommentsInput'>
        <input className="profilesComments"
            id='commentaires'
            type="text"
            placeholder="Ecrivez un commentaire ..."
            onChange={(event) => {
                if (commentRegex.test(event.target.value)) {
                    setcommentaires(event.target.value)
                    return
                }
            }}
        ></input>
        <div className="valide"
            onClick={addCommentUser}>
            &#10010;
        </div>
    </div>;
}

export default PostComment;
