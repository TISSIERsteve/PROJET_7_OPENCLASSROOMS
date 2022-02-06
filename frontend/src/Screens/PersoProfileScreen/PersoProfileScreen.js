import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

// Component
import SeeComment from '../../Components/ProfileScreenItem/SeeComment/SeeComment';
import ButtonAside from '../../Components/ButtonAside/ButtonAside';
import Aside from "../../Components/Aside/Aside"

// CSS
import "../PersoProfileScreen/PersoProfileScreen.css"

// ===== Page perso accueil ===== 
function PersoProfileScreen() {

    const prenom = JSON.parse(localStorage.prenom)

    // Afficher tous les messages
    const identifiant = JSON.parse(localStorage.id)
    const [post, setpost] = useState('')

    useEffect(() => {
        Axios.get("http://localhost:3001/api/messagesPerso/" + identifiant,)
            .then((response) => {
                setpost(response.data.result)
            })
    }, [identifiant])

    // Supprimer un message 
    const deleteCom = (id) => {
        if (window.confirm("Voulez vous vraiment supprimer ce post ?")) {
            deleteDefini(id)
        }
    }

    const deleteDefini = (id) => {
        Axios.delete("http://localhost:3001/api/messagesPerso/" + id,)
            .then((response) => {
                alert("Votre message à bien été suprrimé")
                window.location.reload()
            })
    }

    // JSX
    return <div>
        {/* Component Button Aside */}
        <ButtonAside />

        {/* Component Aside */}
        <div id="open" className="aside_form">
            <Aside />
        </div>

        <Link to="/ProfileScreen">
            <i className="fas fa-arrow-left flecheGauche" /> retour
        </Link>
        {/*  Partie dynamique mes messages perso   */}
        <section className='itemsPerso'>
            <div className='persoprofilescreen_prenom'>
                <h3>Voici vos publications {prenom}</h3>
            </div>
            {post && post.length ? post.map((x) => {
                return (
                    < li key={x.message_perso_id} >
                        <article className="card">
                            <div className='cardProfilePerso'>
                                <img className="profileCommentImage" src="./images/img1.png" alt="logo Entreprise" />
                            </div>
                            <h3 className="profileName">
                                {x.prenom} <br></br> {x.date}
                            </h3>
                            <p className="profileComment"> {x.commentaire} </p>


                            {/* Components Seecomment */}
                            <SeeComment></SeeComment>

                            <div className='trash'>
                                <button onClick={() => deleteCom(x.message_perso_id)}>
                                    <span>
                                        <i className="fas fa-trash-alt poubelle"></i>
                                    </span>
                                </button>
                            </div>
                        </article>
                    </li>
                )
            }) : <h3 className='profileScreenEntete'>Vous n'avez rien publier pour le moment</h3>}
        </section>
    </div >;



}
export default PersoProfileScreen;
