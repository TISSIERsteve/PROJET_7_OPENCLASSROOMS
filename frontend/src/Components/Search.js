import React from 'react';
import Axios from "axios"
import { useState } from 'react';

function Search() {

    // Récupère le prénom
    const storage = JSON.parse(localStorage.prenom)

    const [commentaire, setcommentaire] = useState("")
    const commentRegex = /(.*[a-z]){5,30}/;

    const addComment = () => {
        let prenom = JSON.parse(localStorage.prenom);

        if (commentRegex.test(commentaire)) {
            window.location.reload()
            Axios.post("http://localhost:3001/api/messagesPerso/:id", {
                prenom: prenom,
                commentaire: commentaire
            })
        } else {
            alert("Veuillez insérer un minimum de 5 caractères")
        }
    }
    return <div>

        <div className='profileScreenPrenom'>
            <label htmlFor='commentaire'>Bonjour {storage} comment vas tu aujourd'hui ?</label>
        </div>
        <div className='profileScreen_BarreRecherche'>
            <input className='profileScreenInput'
                id='commentaire'
                type="text"
                placeholder="Quoi de neuf, poster un commentaire ?"
                onChange={(event) => {
                    if (commentRegex.test(event.target.value)) {
                        setcommentaire(event.target.value)
                        return
                    }
                }}
            ></input>
            <i className="far fa-plus-square add"
                onClick={addComment}
            ></i>
        </div>
    </div>;
}

export default Search;
