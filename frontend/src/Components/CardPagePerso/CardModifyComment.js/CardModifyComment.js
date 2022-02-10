import React from 'react'
import { useState } from "react"
import Axios from 'axios';

function CardModifyComment() {

    const idy = JSON.parse(localStorage.id)
    const prenom = JSON.parse(localStorage.prenom)
    const [message, setmessageModify] = useState('')

    const [isActive, setisActive] = useState("")

    const commentRegex = /(.*[a-z]){5,30}/;

    // Ouverture fenêtre pour modifier le message
    const handleShow = () => {
        if (isActive === "active") {
            setisActive("")

        } else {
            setisActive("active")
        }
    }

    // Fonction modifier message
    const addCommentModify = () => {
        if (window.confirm(`${prenom} êtes vous sur de vouloir modifier votre message`)) {
            addCommentModifyDefini()
        } else {
            window.location.reload()
        }
    }

    const addCommentModifyDefini = () => {
        if (commentRegex.test(message)) {
            console.log("bon");

            Axios.put("http://localhost:3001/api/messagesPerso/", + idy, {
                commentaire: message,

            })
                .then(
                    (response) => {
                        console.log(response);
                    }

                )
                .then(() => {
                    alert(`${prenom} vous venez de modifier votre message `);
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
            <div className="pen">
                <button onClick={handleShow}>
                    <span>
                        <i className="fas fa-edit stylo" />
                    </span>
                </button>
            </div>
            <div className={`profilesCommentsInput open ${isActive}`}>
                <label></label>
                <input className="profilesComments"
                    id='commentaires'
                    type="text"
                    placeholder="Modifier le message que vous avez publier"
                    onChange={(event) => {
                        if (commentRegex.test(event.target.value)) {
                            setmessageModify(event.target.value)
                            return
                        }
                    }}
                ></input>

                <i className="fas fa-plus-circle valide" onClick={addCommentModify}></i>

            </div>
        </>
    )
}

export default CardModifyComment