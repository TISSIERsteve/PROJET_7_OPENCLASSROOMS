import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

// CSS
import "../PersoProfileScreen/PersoProfileScreen.css"

function PersoProfileScreen() {

    // ===================== Afficher tous ses comments =======================
    const identifiant = JSON.parse(localStorage.id)
    const [post, setpost] = useState('')

    useEffect(() => {
        Axios.get("http://localhost:3001/api/messagesPerso/" + identifiant,)
            .then((response) => {
                setpost(response.data.result)
            })
    }, [identifiant])

    // ====================== Supprimer un commentaire ==========================
    // const keys = Object.values(post)
    // console.log(keys);

    // const result = document.querySelectorAll(".keys")

    // const test = Object.keys(re)
    // console.log(test);

    const deleteDefini = () => {

    }

    const deleteCom = () => {
        if (window.confirm("Voulez vous vraiment supprimer ce post ?")) {
            deleteDefini()
        }
        // Axios.get(`http://localhost:3001/api/messagesPerso/` + identifiant)
        //     .then((response) => {
        //         // (response.data.result.filter((x) => console.log(x.message_perso_id)))

        //     })
    }



    // =============================== JSX ======================
    return <div>
        <Link to="/ProfileScreen">
            <i className="fas fa-arrow-left flecheGauche" />
        </Link>
        <h3>
            Voici ce que vous avez publier
        </h3>

        {/*  Partie dynamique prénom et commentaires  */}
        <section id='itemsPerso'>
            {post && post.length && post.map((x) => {
                return (
                    <li className='keys' key={x.message_perso_id}>
                        <article id="card">
                            <div className='cardProfilePerso'>
                                <img id="profileCommentImage" src="./images/img1.png" alt="logo Entreprise" />
                                <p>Supprimer Commentaire <span><i className="fas fa-window-close"
                                    onClick={deleteCom}
                                ></i></span></p>
                            </div>
                            <h3 id="profileName"> {x.prenom} le {x.date} </h3>
                            <p id="profileComment"><em><strong>Vous avez publiez</strong></em> : {x.commentaire} </p>
                            <div>
                            </div>
                        </article>
                    </li>
                )
            })}
        </section>


    </div >;



}
export default PersoProfileScreen;
