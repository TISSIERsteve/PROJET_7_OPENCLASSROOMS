import React, { useState, useEffect } from 'react';
import Axios from 'axios';

// Components
import PostComment from './PostOneComment/PostComment';
import GetComment from './GetOneComment/GetComment';

function ProfileScreenItem() {
    // ===================== Affichage de tous les messages ============================
    const [post, setpost] = useState('')

    useEffect(() => {
        // Affichage de tous les messages postés
        Axios.get(
            "http://localhost:3001/api/messagesPerso")
            .then((response) => {
                // console.log(response.data);
                setpost(response.data.messageperso.resultat)
            })
    }, [])

    // JSX
    return <div>
        <section className="items">
            {post && post.length ? post.map((x) => {
                return (
                    <li key={x.message_perso_id}>
                        <article className="card">
                            <img className="profileCommentImage" src="./images/img1.png" alt="logo Entreprise" />
                            <h3 className="profileName">
                                {x.prenom}<br></br>
                                {x.date}
                            </h3>
                            <p className="profileComment"> {x.commentaire} </p>
                            <div className="profileComments">
                                <p>J'aime</p>
                                <p>Commenter</p>
                            </div>

                            {/* Components PostComment */}
                            <PostComment></PostComment>

                            {/* Components Get comment */}
                            <GetComment></GetComment>
                        </article>
                    </li>
                )
            }) : <h3 className='profileScreenEntete'>Il y a aucune publication pour le moment</h3>}
        </section>
    </div>;
}

export default ProfileScreenItem;
