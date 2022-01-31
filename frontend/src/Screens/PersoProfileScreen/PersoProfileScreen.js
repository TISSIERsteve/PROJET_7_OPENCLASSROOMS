import React from 'react';
import Axios from 'axios';

function PersoProfileScreen() {

    // Je récupère l'Id de l'utilisateur pour pouvoir afficher tous ses comments
    const identifiant = JSON.parse(localStorage.id)

    // Récupère les publications de commentaire
    const getCommentsOne = () => {
        Axios.get("http://localhost:3001/api/messagesPerso/:id/perso")
            .then((response) => {
                // localStorage.setItem("commentaire", JSON.stringify(response.data.commentaire))

                const result = (response.data.id)
                if (result === identifiant) {
                    console.log("bon");
                    // document.getElementById("itemsPerso").innerHTML = resultComments
                }
            });
    };
    // =============================== JSX ======================
    return <div>
        perso
        {/*  Partie dynamique prénom et commentaires  */}
        <section id='itemsPerso'></section>

        {getCommentsOne()}
    </div>;



}
export default PersoProfileScreen;
