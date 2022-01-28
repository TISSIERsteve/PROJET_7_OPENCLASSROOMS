import React from 'react';
import Axios from 'axios';

function PersoProfileScreen() {

    // Récupère les publications de commentaire
    const getCommentsOne = () => {
        Axios.get("http://localhost:3001/api/messagesPerso/:id/perso")
            .then((response) => {
                const result = (response)
                console.log(result)
                // document.getElementById("items").innerHTML =

                //     result.map((x) =>
                //         `
                //             <article id="card">
                //             <img id="profileCommentImage" src="./images/img1.png" alt="logo Entreprise">
                //                 <h3 id="profileName"> ${x.prenom} de chez GROUPOMANIA</h3>
                //                 <p id="profileComment"><em><strong>à publier</strong></em> : ${x.commentaire} </p>
                //                 <div id="profileComments">
                //                     <p> J'aime </p>
                //                     <p> Commenter </p>
                //                 </div>
                //                 <div id="profilesCommentsInput">
                //                 <input id="profilesComments"
                //                  placeholder="Ecrivez un commentaire..." 
                //                 </input>
                //                 </div><div id="valide">&#10162;</div>
                //             </article>
                //        `
                //     ).join("")
            });
    };
    // =============================== JSX ======================
    return <div>
        perso
        {/*  Partie dynamique prénom et commentaires  */}
        <section id='items'></section>

        {getCommentsOne()}
    </div>;



}
export default PersoProfileScreen;
